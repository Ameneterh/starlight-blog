import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  TextInput,
  Select,
  FileInput,
  Button,
  Alert,
  Spinner,
} from "flowbite-react";
import {
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
import { app } from "../firebase.js";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { modules } from "../modules.js";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);

  const [filePdf, setFilePdf] = useState([]);
  const [pdfUploadProgress, setPdfUploadProgress] = useState(null);
  const [pdfUploadError, setPdfUploadError] = useState(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please, select an image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed!");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed!!");
      setImageUploadProgress(null);
      // console.log(error);
    }
  };

  const handleUploadPdf = async () => {
    try {
      if (!filePdf[0]) {
        setPdfUploadError("Please, select a pdf to upload");
        return;
      }
      setPdfUploadError(null);
      const storage = getStorage(app);
      const fileName = (filePdf[0].name + "-" + new Date().toLocaleDateString())
        .split(" ")
        .join("-")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, "-");
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, filePdf[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPdfUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setPdfUploadError("File upload failed!");
          setPdfUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setPdfUploadProgress(null);
            setPdfUploadError(null);
            setFormData({ ...formData, downloadfile: downloadURL });
          });
        }
      );
    } catch (error) {
      setPdfUploadError("File upload failed!!");
      setPdfUploadProgress(null);
      // console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setLoading(false);
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setLoading(false);
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a Post</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">Select a category</option>
            <option value="living">Christian Living</option>
            <option value="general">General</option>
            <option value="holiness">Holiness</option>
            <option value="thanksgiving">Thanksgiving</option>
            <option value="worship">Worship</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3 rounded-lg">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>

        {/* for pdf upload */}
        <div className="flex gap-4 items-center justify-between border-4 bg-gray-200 dark:bg-slate-600 p-3 rounded-lg">
          <FileInput
            type="file"
            accept="application/pdf"
            onChange={(e) => setFilePdf(e.target.files)}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadPdf}
            disabled={pdfUploadProgress}
          >
            {pdfUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={pdfUploadProgress}
                  text={`${pdfUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload pdf"
            )}
          </Button>
        </div>

        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}

        {pdfUploadError && <Alert color="failure">{pdfUploadError}</Alert>}

        {formData.downloadfile && (
          <Alert color="success">Upload Completed successfully</Alert>
        )}

        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full, h-72 object-cover"
          />
        )}

        <ReactQuill
          theme="snow"
          modules={modules}
          placeholder="Write something ..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />

        <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
          {loading ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">Publishing ...</span>
            </>
          ) : (
            "Publish"
          )}
        </Button>

        {publishError && (
          <Alert color="failure" className="mt-5">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
