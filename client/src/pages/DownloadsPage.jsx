import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DownloadsPage() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    setShowModal(true);
  }, [!currentUser || currentUser._id]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto min-h-screen mt-4 md:my-10 text-sm">
      {/* <img src="/downloads.png" alt="download icon" className="w-20 mx-auto" /> */}
      <h1 className="uppercase text-center font-sans font-extrabold text-xl md:text-5xl">
        downloads
      </h1>
      <p className="w-full max-w-xl mx-auto text-sm md:text-lg text-center mt-3 px-3">
        Discover a world of inspiring Christian articles, devotionals, and more;
        download free PDFs to read offline or print and share God’s Word with
        others!
      </p>
      {/* <Divider /> */}

      <div className="w-full p-3 mt-4 md:mt-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
          {posts?.length > 0 ? (
            posts.map((post, id) => (
              <PostDisplay
                title={post.title}
                category={post.category}
                pubDate={post.createdAt}
                downloadfile={post.downloadfile}
              />
            ))
          ) : (
            <p>Problem Displaying Posts</p>
          )}
        </ul>
      </div>
    </div>
  );
}

const PostDisplay = ({ title, pubDate, category, downloadfile }) => {
  return (
    <div className="w-full p-3 bg-white rounded shadow-md">
      <Link
        to={downloadfile}
        target="_blank"
        title="read or download pdf"
        className="text-sm md:text-xl text-blue-600 hover:underline underline-offset-2 font-bold flex items-center justify-between gap-2"
      >
        {title} <span className="h-[1px] bg-gray-600 flex-1"></span>
      </Link>
      <p className="flex items-center justify-between capitalize">
        Category: {category === "living" ? "Christian Living" : category}
        <span>Date Published: {new Date(pubDate).toLocaleDateString()}</span>
      </p>
    </div>
  );
};
