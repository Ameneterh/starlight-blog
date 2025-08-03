import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import CallToAction from "../components/CallToAction";
import SubscriptionComponent from "../components/SubscriptionComponent";
import TestimonialComponent from "../components/TestimonialComponent";
import { TESTIMONIALS } from "../constants/testimonials";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PostCard, { PostCardMobile } from "../components/PostCard";
import { Modal, Button } from "flowbite-react";
import Verses from "../components/RandomVerses.jsx";

export function HomePage() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    setShowModal(true);
  }, [!currentUser || currentUser._id]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts?limit=4");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-[url('/openbible.png')] min-h-screen flex flex-col items-center text-white text-center px-4 py-4 md:py-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-sans drop-shadow-md shadow-gray-950">
          Free Christian Resources{" "}
          <span className="md:block">to Nourish Your Faith</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="flex flex-1 flex-col gap-4 md:gap-10 px-3">
            {/* <h1 className="text-3xl font-bold lg:text-5xl drop-shadow-lg text-gray-700 md:text-white">
              Welcome to
            </h1> */}
            <div className="flex justify-center rounded-md bg-white backdrop-blur-3xl shadow-lg p-4">
              {/* <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-white">
                Starlight
              </span>{" "}
              Blog */}
              <img
                src="/apple-touch-icon.png"
                alt="starlight-logo"
                className="h-16 w-60 p-2"
              />
            </div>
            <p className="text-white text-sm sm:text-lg max-w-80 mx-auto">
              Here you'll find a variety of articles and publications on topics
              relating to the Christian faith; worship, christian-living,
              holiness, etc.
            </p>

            {/* <Link
              to="/search"
              className="text-lg sm:text-[16px] dark:text-teal-500 text-teal-700 font-bold hover:underline underline-offset-4"
            >
              View all posts
            </Link> */}
          </div>
          <div className="bg-white/10 backdrop-blur-xl shadow-lg rounded-lg p-3 md:p-8 flex flex-col justify-center">
            <p className="font-sans font-bold text-lg md:text-2xl mb-6 max-w-xl text-center flex flex-col items-center gap-3">
              <FaQuoteLeft />
              Always Free, <br />
              Always Christ-Centered.
              <FaQuoteRight />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/search"
                className="bg-white text-gray-800 px-6 py-2 rounded-md shadow hover:text-white hover:bg-gray-800/10 backdrop-blur-md transition-all duration-300"
              >
                Explore Articles
              </Link>
              <Link
                to="/downloads"
                className="bg-yellow-400 text-white px-6 py-2 rounded-md shadow hover:bg-yellow-600"
              >
                Free PDF Downloads
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="pt-4 md:pt-16 text-center bg-gray-200 dark:bg-gray-300">
        <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8">
          {posts?.length > 0 ? (
            <div className="flex flex-col gap-6 mb-10">
              <h2 className="text-3xl font-semibold dark:text-gray-400">
                Recent Posts
              </h2>
              <p className="w-full max-w-xl mx-auto px-2 md:mb-8">
                Discover fresh insights, inspiring testimonies, and biblical
                reflections in our latest articles to encourage your walk with
                Christ.
              </p>

              {/* for desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-3">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>

              {/* for mobile */}
              {/* <div className="flex sm:hidden flex-wrap gap-4 justify-center">
                {posts.map((post) => (
                  <PostCardMobile key={post._id} post={post} />
                ))}
              </div> */}
              <Link
                to="/search"
                className="text-lg text-white bg-gray-500 hover:bg-opacity-35 text-center py-2 px-12 mx-auto rounded-lg mt-8"
              >
                View all posts
              </Link>
            </div>
          ) : (
            <p className="text-red-600 font-bold w-full max-w-xl mx-auto">
              Unable to load recent posts
            </p>
          )}
        </div>
        <div className="py-4 md:py-16 text-center bg-gray-600">
          <h2 className="text-3xl font-semibold mb-8 dark:text-gray-400">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full px-3">
            {[
              "Seven Promises of God to Stand On Today (PDF) - FREE",
              "Free Bible Reading Plans (PDF) - 7-Days, 30-Days, 365-Days",
              "Free Christian ebooks from God's servants (PDF)",
            ].map((title, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-red-500 text-xl font-extrabold font-sans mb-3">
                  Available Shortly!
                </h2>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <button className="text-blue-600 mt-2">Watch Out →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jesus is Knocking */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <CallToAction />
      </section>

      {/* Email Signup */}
      <section className="bg-white pt-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">
          📬 Want to be notified of new content?
        </h2>
        <h1 className="font-sans text-2xl md:text-4xl font-extrabold">
          SUBSCRIBE
        </h1>
        <p className="my-3">
          to get <b>free</b> Christian encouragement <br />
          and <b>exclusive</b> resources to your inbox.
        </p>
        {/* <img src="/subscribe.png" alt="subscribe" className="w-60 mx-auto" /> */}
        {/* <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded-xl w-full"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-2 rounded-xl w-full"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-xl"
          >
            Sign Me Up →
          </button>
        </form> */}

        <SubscriptionComponent />
      </section>

      {/* Support Section */}
      <section className="bg-yellow-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">🙏 Support the Mission</h2>
        <p className="mb-6 font-bold text-sm md:text-xl">
          Our resources are 100% free,{" "}
          <span className="block">but not free to produce.</span>
        </p>
        <p className="mb-8">
          If our materials have blessed you, please join us and let's reach more
          people.
        </p>
        <div className="w-full max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/donate"
            className="bg-pink-600 text-white px-6 py-2 rounded-xl"
          >
            Make a Donation
          </Link>
          <Link
            to="/recommended"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl"
          >
            Shop Recommended Resources
          </Link>
        </div>
      </section>

      {/* Testimonial and Scripture */}
      <section className="bg-gray-100 py-16 px-6 text-center md:px-20">
        <p className="mt-6 text-xl text-gray-400 font-bold">TESTIMONIALS</p>
        <p className="my-8 font-sans font-extrabold text-2xl">
          What Our Readers Say
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, id) => (
            <TestimonialComponent
              key={id}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimony={testimonial.testimony}
              location={testimonial.location}
            />
          ))}
        </div>

        <p className="mt-8 text-lg font-semibold">
          📖 "The grass withers, the flower fades, but the word of our God will
          stand forever." – Isaiah 40:8
        </p>
      </section>

      {/* pop up modal */}
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
    </main>
  );
}
