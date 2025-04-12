import send from "../assets/send.png";
import mike from "../assets/mike.png";

const ChatInput2 = () => {
  return (
    <div
      className="flex items-center gradient-border bg-black rounded-full border-2 mt-8 pl-6 md:pl-8 pr-2 lg:pr-4 py-3 md:py-4 w-[300px] md:w-[400px] lg:w-[500px] mx-auto 
     "
    >
      {/* Input Field */}
      <input
        type="text"
        placeholder="Ask me anything about motors..."
        className="flex-grow bg-transparent text-white font-thin md:text-base text-xs  lg:text-xl outline-none placeholder-gray-400 border-l border-[#F800C0] ps-2"
      />

      <button className="">
        <img src={mike} alt="" className="size-5 md:size-6 lg:size-7" />
      </button>

      {/* Send Button */}
      <button className="">
        <img
          src={send}
          alt=""
          className="ml-2 lg:ml-4 size-8 md:size-10 lg:size-12"
        />
      </button>
    </div>
  );
};

export default ChatInput2;
