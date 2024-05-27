import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard, { PostCardMobile } from "../components/PostCard";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState({});
  const [postAuthor, setPostAuthor] = useState({});
  const [recentPosts, setRecentPosts] = useState(null);

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
        const res = await fetch(`/api/post/getposts?limit=3`);
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

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-bold max-w-2xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>
      <div className="flex gap-4 items-center justify-center border-t border-slate-700 pt-2 text-sm">
        <Link
          to={`/user/${postAuthor._id}`}
          className="text-teal-700 hover:underline underline-offset-4"
        >
          {postAuthor.fullname}
        </Link>
        <p className="font-semibold">@{postAuthor.username}</p>
        <Link
          to={`mailto:${postAuthor.email}`}
          className="text-teal-700 hover:underline underline-offset-4"
        >
          {postAuthor.email}
        </Link>
      </div>

      <div className="flex flex-col md:flex-row mt-6 gap-5">
        <div className="flex flex-col w-full md:w-[400px]">
          <div className="flex items-center mt-5 gap-10">
            <Link
              to={`/search?category=${post && post.category}`}
              className="self-center"
            >
              <Button color="gray" size="sm" className="shadow-sm capitalize">
                {post && post.category}
              </Button>
            </Link>
            <Link
              to={post.downloadfile}
              download
              className="text-blue-700 hover:underline underline-offset-4"
            >
              Read or Download PDF
            </Link>
          </div>

          <img
            src={post && post.image}
            alt={post && post.title}
            className="hidden md:flex mt-4 p-3 max-h-[600px] w-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
            <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
            <span className="italic">
              {post && (post.content.length / 1000).toFixed(0)} mins read
            </span>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: post && post.content }}
            className="p-3 max-w-2xl mx-auto w-full post-content"
          ></div>

          <div className="max-w-4xl mx-auto w-full">
            <CallToAction />
          </div>
          <CommentSection postId={post._id} />
        </div>
      </div>

      {/* Stop here */}

      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5">Recent Articles</h1>
        <div className="hidden sm:flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
        <div className="sm:hidden flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => (
              <PostCardMobile key={post._id} post={post} />
            ))}
        </div>
      </div>
    </main>
  );
}
