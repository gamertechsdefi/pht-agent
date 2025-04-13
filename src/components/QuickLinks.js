"use client"; // Only if using client-side interactions

import Link from "next/link";

const QuickLinks = () => {
  return (
    <footer className=" text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Products Section */}
        <div>
          <h3 className="text-orange-400 font-semibold text-lg">Products</h3>
          <ul className="mt-2 space-y-2">
            {[
               { name: "Phoenix Token", path: "https://www.phoenixtoken.community" },
               { name: "Token Tracker", path: "https://tracker.phoenixtoken.community" },
               { name: "Resurgence Foundation", path: "https://www.resurgencefoundation.org/" },
               { name: "Phoenix Swap", path: "#" },
               { name: "Whitepaper", path: "#" },
            ].map((item) => (
              <li key={item.name}>
                <a href={item.path} className="hover:text-gray-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-orange-400 font-semibold text-lg">Resources</h3>
          <ul className="mt-2 space-y-2">
            {[
               { name: "Whitepaper", path: "#" },
               { name: "Agent Docs", path: "#" },
               { name: "Partner with us", path: "#" },
            ].map((item) => (
              <li key={item.name}>
                <a href={item.path} className="hover:text-gray-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

       

        {/* Resources Section */}
        <div>
          <h3 className="text-orange-400 font-semibold text-lg">Socials</h3>
          <ul className="mt-2 space-y-2">
            {[
                { name: "X (Twitter)", path: "https://www.phoenixtoken.community" },
                { name: "Telegram", path: "https://tracker.phoenixtoken.community" },
                { name: "Medium", path: "https://www.resurgencefoundation.org/" },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.path} className="hover:text-gray-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Email Section */}
        <div>
          <h3 className="text-orange-400 font-semibold text-lg">Email</h3>
          <a href="mailto:admin@aitech.io" className="mt-2 block text-white hover:underline">
            team@phoenixtoken.community
          </a>
        </div>
      </div>

      <div className="text-center mt-16">
        <h1>2025 Phoenix Token, All Rights Reserved</h1>
      </div>
    </footer>
  );
};

export default QuickLinks;
