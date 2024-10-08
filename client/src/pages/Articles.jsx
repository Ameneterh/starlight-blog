import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import { Spinner, Table } from "flowbite-react";
import Pagination from "../components/Pagination";

export default function Articles() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/post/getposts`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 10) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };

    fetchPosts();
  }, []);

  const handleShowMore = async () => {
    const startIndex = posts.length;
    try {
      const res = await fetch(`/api/post/getposts?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
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
    <div className="max-w-6xl mx-auto min-h-screen mb-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 py-7 mb-4 table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
        {currentPosts && currentPosts.length > 0 ? (
          <>
            <Table hoverable className="shadow-md">
              <Table.Head>
                <Table.HeadCell>Date Updated</Table.HeadCell>
                <Table.HeadCell>Post Image</Table.HeadCell>
                <Table.HeadCell>Post Title</Table.HeadCell>
                <Table.HeadCell>Post Excerpt</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                {/* <Table.HeadCell>Author Username</Table.HeadCell> */}
              </Table.Head>
              {currentPosts.map((post) => (
                <Table.Body className="divide-y" key={post._id}>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                      {new Date(post.updatedAt).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell>
                      <Link to={`/post/${post.slug}`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-20 h-10 object-cover object-top bg-gray-500"
                        />
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Link
                        className="font-medium text-gray-900 dark:text-white"
                        to={`/post/${post.slug}`}
                      >
                        {post.title}
                      </Link>
                    </Table.Cell>
                    <Table.Cell
                      className="h-24 line-clamp-4 w-60 lg:w-96 overflow-clip"
                      dangerouslySetInnerHTML={{ __html: post && post.content }}
                    ></Table.Cell>
                    <Table.Cell>
                      <Link to={`/search?category=${post.category}`}>
                        {post.category}
                      </Link>
                    </Table.Cell>
                    {/* <Table.Cell>{post.userId}</Table.Cell> */}
                  </Table.Row>
                </Table.Body>
              ))}
            </Table>
            {showMore && (
              <button
                onClick={handleShowMore}
                className="w-full text-teal-500 self-center text-sm py-7"
              >
                Show More
              </button>
            )}
          </>
        ) : (
          <p>You have not posts yet!</p>
        )}
      </div>
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
