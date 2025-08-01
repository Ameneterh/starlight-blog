export function DonatePage() {
  return (
    <div className="font-sans text-gray-800 px-6 py-12 max-w-3xl mx-auto dark:text-gray-200">
      <h1 className="text-3xl font-bold text-center mb-6">
        🙏 Support This Ministry
      </h1>
      <p className="text-center text-lg mb-8 w-full max-w-xl mx-auto">
        Help us keep sharing the Gospel with free devotionals and Bible study
        tools for believers worldwide.
      </p>

      {/* Donation Options */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold mb-4">
          💳 One-time <span className="block md:inline">or Monthly Giving</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl mx-auto">
          <button className="bg-pink-600 text-white px-6 py-2 rounded-xl">
            Donate via PayPal
          </button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-xl">
            Support on Ko-fi
          </button>
        </div>
      </div>

      {/* How Funds Are Used */}
      <div className="bg-yellow-50 dark:bg-gray-300 dark:text-gray-800 p-6 rounded-xl shadow mb-10 w-full max-w-xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Where Your Gift Goes:</h3>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-lg">
          <li>Create more Bible-based content and devotionals</li>
          <li>Maintain and improve the website</li>
          <li>Offer free PDF downloads worldwide</li>
          <li>Reach more souls with God’s Word</li>
        </ul>
      </div>

      {/* Alternative Support Methods */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold mb-4">
          🛍️ Prefer to Support Another Way?
        </h2>
        <p className="mb-4">
          Browse our recommended Christian resources — books, devotionals, and
          more.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl">
          Visit Resource Page
        </button>
      </div>

      {/* Thank You Note */}
      <div className="text-center">
        <p className="mb-4 italic w-full px-2 max-w-2xl mx-auto">
          "Thank you for being part of this journey. <br />
          Your generosity fuels this mission to bring hope, light, and truth to
          the world."
        </p>
        <div className="flex flex-col items-center w-full p-3 max-w-xl mx-auto">
          {/* <p className="font-extrabold text-4xl text-center">📖</p> */}
          <img src="/open_bible.png" alt="open bible" className="w-40" />
          <p className="text-xs md:text-sm italic w-full max-w-md">
            "The Lord bless you, and keep you [protect you, sustain you, and
            guard you]; The Lord make His face shine upon you [with favor], And
            be gracious to you [surrounding you with lovingkindness]; The Lord
            lift up His countenance (face) upon you [with divine approval], And
            give you peace [a tranquil heart and life]"{" "}
            <span className="not-italic block mt-2">(Numbers 6:24-26 AMP)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
