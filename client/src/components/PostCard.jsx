import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link
      to={`/post/${post.slug}`}
      className="w-full md:w-[240px] max-w-[240px] border border-gray-400 shadow-lg rounded-lg overflow-hidden relative group bg-white hover:bg-gray-100"
    >
      <div
        className={`w-full h-32 bg-gray-500 overflow-hidden transition-all bg-[image:var(--bg-image)] bg-cover bg-top bg-no-repeat flex flex-col justify-end`}
        style={{ "--bg-image": `url('${post.image}')` }}
      >
        {/* <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full object-cover object-top group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link> */}
        {/* <Link
          to={`/post/${post.slug}`}
          className="z-10 group-hover:top-1/4 size-36 rounded-full absolute bottom-[-200px] left-0 right-0 bg-white/10 backdrop-blur-sm shadow-xl
             border border-teal-500 text-teal-500 hover:backdrop-blur-xl transition-all 300 text-center flex items-center justify-center mx-auto"
        >
          Read Article
        </Link> */}
      </div>
      <div className="h-36 p-3 flex flex-col text-black items-start justify-between">
        <p className="line-clamp-1 text-left">{post.title}</p>
        <div className="flex flex-col gap-1 w-full">
          <p className="text-sm bg-gray-200 px-2 rounded capitalize text-center">
            {post.category == "living" ? "Christian Living" : post.category}
          </p>
          <div className="flex justify-between text-sm w-full">
            <div className="flex items-center gap-2 flex-1">
              <img
                src={post.userId.profilePicture}
                alt={post.userId.fullname}
                className="w-8 h-8 rounded-full"
              />
              <p className="text-xs leading-[1.2]">
                authored by:{" "}
                <span className="block font-bold">@{post.userId.username}</span>
              </p>
            </div>
            <p className="text-gray-500">
              {(post.content.length / 1000).toFixed(0)} mins read
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function PostCardMobile({ post }) {
  return (
    <Link
      to={`/post/${post.slug}`}
      className="p-2 group hover:shadow-xl border h-[120px] rounded-lg border-gray-400 shadow-md overflow-hidden transition-all"
    >
      <div className="flex group relative w-full overflow-hidden rounded-lg">
        <img
          src={post.image}
          alt="post cover"
          className="h-full w-36 object-cover object-top z-20"
          // className="h-full w-36 object-cover object-top group-hover:h-[200px] transition-all duration-300 z-20"
        />
        <div className="flex flex-col flex-1 gap-1">
          <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
          <span className="italic text-sm">{post.category}</span>
          <Link
            to={`/post/${post.slug}`}
            className="z-10 group-hover:bottom-0  text-teal-500"
          >
            Read Article
          </Link>
        </div>
      </div>
    </Link>
  );
}
