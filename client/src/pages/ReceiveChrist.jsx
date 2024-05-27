import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import { HiMail, HiOutlinePhoneMissedCall, HiUser } from "react-icons/hi";
import {
  Alert,
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import Divider from "../components/Divider";
import { useNavigate } from "react-router-dom";

export default function ReceiveChrist() {
  const [formData, setFormData] = useState({});
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/saved/accepted-christ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setUploadError(data.message);
        return;
      }
      if (res.ok) {
        setUploadError(null);
        navigate("/");
      }
    } catch (error) {
      setUploadError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-justify">
        <div className="mt-5">
          <h1 className="flex flex-col items-center w-full mb-4 pb-4">
            <img
              src="./apple-touch-icon.png"
              alt="starlight magazine image"
              className="w-[250px] "
            />
            <span className="text-red-500 mt-3">
              shining the light, enriching the soul
            </span>
          </h1>

          <div className="text-md text-gray-500 flex flex-col gap-6 border-2 border-red-600 dark:border-gray-600 rounded-lg p-4 relative mb-5">
            <FaQuoteLeft className="text-6xl absolute top-[-15px] left-[-15px] text-red-600 bg-white dark:bg-slate-900 p-2" />
            <h1 className="text-2xl font-semibold ml-8 text-red-600">
              Do you want to make Jesus Christ Lord of your life?
            </h1>
            <h1 className="text-2xl font-semibold text-center">
              Say this prayer from a sincere heart:
            </h1>
            <p className="text-lg text-center">
              Dear Lord Jesus, I acknowledge that I am a sinner, but I come to
              You today and I ask for Your forgiveness of <b>ALL</b> my sins. I
              believe You died for my sins and rose from the dead on the third
              day. I turn from my sins today and invite You to come into my
              heart and life. I want to trust and follow You as my Lord and
              Savior.
            </p>
            <p className="text-lg text-center">
              Give me the grace and strength to follow You to the end. In Your
              precious name I pray; Amen.
            </p>
          </div>
          <div className="text-md text-gray-500 flex flex-col gap-6 border-2 dark:border-slate-600 rounded-lg p-4 relative mt-8 mb-5">
            <FaQuoteLeft className="text-6xl absolute top-[-15px] left-[-15px] bg-white dark:bg-slate-900 p-2" />
            <h1 className="text-2xl font-semibold ml-8">Contact Us:</h1>
            <p>
              If you have made a decision for Jesus Christ today as Lord and
              Saviour, please contact us using the form below. We would be glad
              to pray along with you.
            </p>
            <Divider />

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <TextInput
                  icon={HiUser}
                  id="fullname"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, fullname: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <TextInput
                  icon={HiMail}
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                  className="flex-1"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <TextInput
                  icon={HiOutlinePhoneMissedCall}
                  id="phonenumber"
                  type="phone"
                  placeholder="+2348154230654"
                  required
                  className="flex-1"
                  onChange={(e) =>
                    setFormData({ ...formData, phonenumber: e.target.value })
                  }
                />
              </div>
              <div>
                <Textarea
                  id="message"
                  placeholder="Leave us a message"
                  rows={4}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="tc_acceptance"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tc_acceptance: e.target.checked,
                    })
                  }
                />
                <Label htmlFor="agree" className="flex">
                  I agree with the&nbsp;
                  <Link
                    href="#"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    terms and conditions
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="dark:bg-[rgb(43,56,88)]">
                Submit
              </Button>
              {uploadSuccess && (
                <Alert color="success" className="mt-5">
                  {uploadSuccess}
                </Alert>
              )}
              {uploadError && (
                <Alert color="failure" className="mt-5">
                  {uploadError}
                </Alert>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
