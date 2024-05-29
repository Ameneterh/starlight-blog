import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner, Table } from "flowbite-react";
import PostCard, { PostCardMobile } from "../components/PostCard";

export default function AuthorPage() {
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [author, setAuthor] = useState({});
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/user/${userId}`);
        let data = await res.json();

        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setAuthor(data);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchAuthor();
  }, [userId]);

  //   useEffect(() => {
  //     try {
  //       const fetchRecentPosts = async () => {
  //         const res = await fetch(`/api/users/getusers`);
  //         const data = await res.json();
  //         if (res.ok) {
  //           setRecentPosts(data.posts);
  //         }
  //       };
  //       fetchRecentPosts();
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className="p-3 flex flex-col max-w-4xl mx-auto min-h-screen">
      <div className="flex flex-col-reverse md:flex-row mt-6 gap-5">
        <div className="flex flex-col w-full md:max-w-[300px] items-center">
          <img
            src={author && author.profilePicture}
            alt={author && author.fullname}
            className="w-[300px] h-[300px] max-w-[300px] max-h-[300px] object-cover rounded-full"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 p-4 overflow-x-auto">
          <h1>Author Details:</h1>
          <Table striped className="">
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-16">
                  Author Full Name:
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white">
                  {author && author.fullname}
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-16">
                  Author Email:
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white">
                  {author && author.email}
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap flex justify-start w-16">
                  About Author:
                </Table.Cell>
                <Table.Cell className="text-gray-900 dark:text-white">
                  {/* {author && author.authorbio} */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: author && author.authorbio,
                    }}
                    className="w-full post-content"
                  ></div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>

      {/* Stop here */}

      {/* <div className="flex flex-col justify-center items-center mb-5">
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
      </div> */}
    </main>
  );
}
