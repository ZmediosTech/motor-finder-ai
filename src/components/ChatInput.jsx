import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import send from "../assets/send.png";
import lens from "../assets/lens.png";
import mike from "../assets/mike.png";

const ChatInput = () => {
  const navigate = useNavigate();
  const [IsSearch, setIsSearch] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const text = "Ask me anything about motors...";
  let index = 0;
  let isDeleting = false;

  useEffect(() => {
    if (IsSearch.length > 0) return;
    const typingInterval = setInterval(
      () => {
        setPlaceholder((prev) =>
          isDeleting ? prev.slice(0, -1) : text.slice(0, index + 1)
        );
        if (!isDeleting && index === text.length - 1) {
          setTimeout(() => (isDeleting = true), 1000);
        } else if (isDeleting && index === 0) {
          isDeleting = false;
        }
        index = isDeleting ? index - 1 : index + 1;
      },
      isDeleting ? 100 : 200
    );

    return () => clearInterval(typingInterval);
  }, [IsSearch]);

  return (
    <div className="flex items-center gradient-border bg-black rounded-full border-2 md:mt-2 mb-4 mt-3 md:mx-8 xl:mx-auto mx-4 xl:px-3 md:px-3 xl:py-2 md:py-2 p-2 xl:w-[calc(100vw-400px)] h-[11vw] md:h-[8.5vw] lg:h-[6vw] xl:h-[4.5vw]">
      {/* Input Field */}
      <input
        type="text"
        placeholder={placeholder}
        className="flex-grow bg-transparent text-white font-thin outline-none placeholder-gray-400 text-[3vw] md:text-[2vw] lg:text-[2vw] xl:text-[1vw] sm:ms-6 ms-4 border-l border-[#F800C0] ps-2"
      />

      {/* Icons */}
      <button className="">
        <img
          src={lens}
          alt=""
          className="size-[5vw] md:size-[4vw] lg:size-[3vw] xl:size-[2vw]"
        />
      </button>
      <button className="">
        <img
          src={mike}
          alt=""
          className="size-[5vw] md:size-[4vw] lg:size-[3vw] xl:size-[2vw]"
        />
      </button>

      {/* Send Button */}
      <button className="" onClick={() => navigate("/detail")}>
        <img
          src={send}
          alt=""
          className="md:ml-4 ml-2 size-[6vw] md:size-[6vw] lg:size-[4vw] xl:size-[3vw]"
        />
      </button>
    </div>
  );
};

export default ChatInput;
