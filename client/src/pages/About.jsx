import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto p-3">
        <div className="w-full mx-auto text-justify">
          <p className="text-slate-700 w-full text-center">About</p>
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
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 min-h-56 mb-5">
            <div
              id="mission"
              className="text-md text-gray-500 flex flex-col gap-6 border-2 dark:border-slate-600 rounded-lg p-4 relative flex-1"
            >
              <FaQuoteLeft className="text-6xl absolute top-[-15px] left-[-15px] bg-white dark:bg-slate-900 p-2" />
              <h1 className="text-2xl font-semibold ml-7">The Mission</h1>
              <p className="text-xl text-center">
                Periodically publish articles as led by the Holy Spirit to
                teach, reproof, correct, and train until we all become complete,
                equipped for every good work (1 Timothy 3:16)
              </p>
            </div>

            <div
              id="vision"
              className="text-md text-gray-500 flex flex-col gap-6 border-2 dark:border-slate-600 rounded-lg p-4 relative flex-1"
            >
              <FaQuoteLeft className="text-6xl absolute top-[-15px] left-[-15px] bg-white dark:bg-slate-900 p-2" />
              <h1 className="text-2xl font-semibold ml-7">The Vision</h1>
              <p className="text-xl text-center">
                To leverage on the power of social media to reach the world and
                preach the Good News to everyone (Mark 16:15).
              </p>
            </div>
          </div>

          <div className="text-md text-gray-500 flex flex-col gap-6 border-l-4 dark:border-slate-600 rounded-lg p-4 relative mb-5">
            {/* <FaQuoteLeft className="text-6xl absolute top-[-15px] left-[-15px] bg-white dark:bg-slate-900 p-2" /> */}
            <h1 id="motivation" className="text-2xl font-semibold">
              The Motivation
            </h1>
            <p>
              <i>
                Jesus came up and said to them, “All authority (all power of
                absolute rule) in heaven and on earth has been given to Me. Go
                therefore and make disciples of all the nations [help the people
                to learn of Me, believe in Me, and obey My words], baptizing
                them in the name of the Father and of the Son and of the Holy
                Spirit, teaching them to observe everything that I have
                commanded you; and lo, I am with you always [remaining with you
                perpetually—regardless of circumstance, and on every occasion],
                even to the end of the age”
              </i>{" "}
              (Matthew 28:18-20 AMP)
            </p>
            <p>
              <i>
                Those who are [spiritually] wise will shine brightly like the
                brightness of the expanse of heaven, and those who lead many to
                righteousness, [will shine] like the stars forever and ever
              </i>{" "}
              (Daniel 12:3 NLT)
            </p>
            <p>
              <i>
                Then the righteous [those who seek the will of God] will shine
                forth [radiating the new life]like the sun in the kingdom of
                their Father. He who has ears [to hear],let him hear and heed My
                words
              </i>{" "}
              (Matthew 13:43 AMP)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
