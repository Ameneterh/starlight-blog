import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import { FaDownload, FaRegShareSquare } from "react-icons/fa";
import { SlDislike, SlLike } from "react-icons/sl";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard, { PostCardMobile } from "../components/PostCard";
import Divider from "../components/Divider";
import BookAdvert from "../components/BookAdvert";
import { useSelector } from "react-redux";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState({});
  const [postAuthor, setPostAuthor] = useState({});
  const [recentPosts, setRecentPosts] = useState(null);
  const [copied, setCopied] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  console.log(post);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts/?slug=${postSlug}`);
        let data = await res.json();

        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();

    const fetchPostAuthor = async (userId) => {
      const res = await fetch(`/api/user/${userId}`);
      const author = await res.json();
      if (res.ok) {
        setPostAuthor(author);
      }
    };

    fetchPostAuthor(post.userId);
  }, [postSlug, post.userId]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=10`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleLike = async (postId) => {
    try {
      if (!currentUser) {
        navigate("/sign-in");
        return;
      }
      const res = await fetch(`/api/post/likepost/${postId}`, {
        method: "PUT",
      });

      if (res.ok) {
        const data = await res.json();
        setPost(
          post.map((pst) =>
            pst._id === postId
              ? {
                  ...pst,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : pst
          )
        );
        window.location.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className="p-3 flex flex-col gap-4 md:flex-row max-w-6xl mx-auto min-h-screen">
      <div className="flex flex-col w-full lg:w-3/4">
        <img
          src={post && post.image}
          alt={post && post.title}
          className="flex h-56 lg:h-[400px] w-full object-cover object-top border-[1px] rounded-xl shadow-sm"
        />
        <h1 className="text-2xl mt-2 lg:mt-4 font-bold w-full mx-auto lg:text-3xl">
          {post && post.title}
        </h1>
        <Divider />
        {/* display author details and copy link buttons */}
        <div className="flex items-center justify-between flex-wrap gap-1 mt-1 lg:mt-2">
          <div className="flex items-center gap-2">
            <img
              src={postAuthor && postAuthor.profilePicture}
              alt={post && postAuthor.fullname}
              className="flex h-9 w-9 object-cover object-top border-2 rounded-full"
            />
            <div className="flex flex-col gap-0 w-24 lg:w-40">
              <Link
                to={`/user/${postAuthor._id}`}
                className="text-slate-600 dark:text-slate-400 font-bold hover:underline underline-offset-4 uppercase  line-clamp-1 text-sm lg:text-md"
                title="view author profile"
              >
                {postAuthor.fullname}
              </Link>
              <Link
                to={`mailto:${postAuthor.email}`}
                className="text-teal-700 hover:underline underline-offset-4 overflow-clip text-sm lg:text-md"
              >
                {postAuthor.email}
              </Link>
            </div>
          </div>

          <div
            className="h-10 bg-gray-200 dark:bg-gray-600 dark:text-slate-200 px-3 py-1 rounded-full flex items-center gap-4"
            title="likes not yet functional"
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleLike(post._id)}
                className={` hover:text-blue-500 ${
                  currentUser &&
                  post.likes.includes(currentUser._id) &&
                  "!text-blue-500"
                }`}
              >
                <SlLike className="text-md" />
              </button>
              <p className="text-gray-400">
                {post.numberOfLikes > 0 &&
                  post.numberOfLikes +
                    " " +
                    (post.numberOfLikes === 1 ? "like" : "likes")}
              </p>
            </div>
            <div className="h-full border-r-[1px] border-slate-400"></div>
            <div className="flex items-center gap-2">
              <button>
                <SlDislike />
              </button>
              <span className="text-transparent">0</span>
            </div>
          </div>
          <Link
            to={`/search?category=${post && post.category}`}
            className="self-center"
            title="view other posts in same category"
          >
            <Button
              color="gray"
              size="sm"
              className="shadow-sm capitalize rounded-full px-4"
            >
              {post && post.category}
            </Button>
          </Link>
          <div
            className="h-10 px-3 py-1 bg-gray-200 dark:bg-gray-600 cursor-pointer flex items-center gap-1 rounded-full text-slate-500 dark:text-slate-200"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopied(true);
            }}
            title="copy link to share"
          >
            <FaRegShareSquare className="text-xl" />
            <span>Copy Link</span>
          </div>

          {copied &&
            setTimeout(() => {
              setCopied(false);
            }, 2000) && (
              <p className="fixed top-[28%] right-[50%] z-10 rounded-md bg-green-400 text-white p-2">
                Link copied!
              </p>
            )}

          <Link
            to={post.downloadfile}
            target="_blank"
            className="flex gap-1"
            title="read or download pdf"
          >
            <FaDownload /> PDF
          </Link>
        </div>

        {/* post content */}
        <div className="flex-1">
          <div className="flex justify-between pt-3 border-b border-slate-500 mx-auto w-full text-xs">
            <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
            <span className="italic">
              {post && (post.content.length / 1000).toFixed(0)} mins read
            </span>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: post && post.content }}
            className="w-full post-content text-justify mt-2"
          ></div>

          <div className="max-w-4xl mx-auto w-full">
            <CallToAction />
          </div>
          <CommentSection postId={post._id} />
        </div>
      </div>

      <div className="flex-1">
        {/* Books for Sale */}
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-xl mt-5">Published Books</h1>

          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            <BookAdvert bookImage="/inonefall_cover.jpg" />
          </div>
        </div>

        {/* recent articles */}
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-xl mt-5">Recent Articles</h1>
          {/* <div className="hidden sm:flex flex-wrap gap-5 mt-5 justify-center">
            {recentPosts &&
              recentPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
          </div> */}
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            {recentPosts &&
              recentPosts.map((post) => (
                <PostCardMobile key={post._id} post={post} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
