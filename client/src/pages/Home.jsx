import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction.jsx";
import PostCard, { PostCardMobile } from "../components/PostCard.jsx";
import { useSelector } from "react-redux";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Verses from "../components/RandomVerses.jsx";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const { currentUser } = useSelector((state) => state.user);

  // useEffect(() => {
  //   setShowModal(true);
  // }, [currentUser._id || !currentUser]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts?limit=4");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex gap-10 p-16 px-3 max-w-6xl mx-auto">
        <div className="flex flex-1 flex-col gap-10 px-3">
          <h1 className="text-3xl font-bold lg:text-5xl">Welcome to</h1>
          <div className="whitespace-nowrap text-3xl sm:text-3xl lg:text-5xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Starlight
            </span>{" "}
            Blog
          </div>
          <p className="text-gray-500 text-lg sm:text-lg">
            Here you'll find a variety of articles and publications on topics
            relating to the Christian faith; worship, christian-living,
            holiness, etc.
          </p>

          <Link
            to="/search"
            className="text-lg sm:text-[16px] dark:text-teal-500 text-teal-700 font-bold hover:underline underline-offset-4"
          >
            View all posts
          </Link>
        </div>
        <div className="hidden sm:flex flex-1 w-full h-96 bg-[url('/reading-book.gif')] bg-no-repeat bg-cover rounded-xl shadow-md"></div>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>

            {/* for desktop */}
            <div className="hidden sm:flex flex-wrap gap-4 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>

            {/* for mobile */}
            <div className="flex sm:hidden flex-wrap gap-4 justify-center">
              {posts.map((post) => (
                <PostCardMobile key={post._id} post={post} />
              ))}
            </div>
            <Link
              to="/search"
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <Verses />
            <div className="flex justify-center mt-4">
              <Button color="gray" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
