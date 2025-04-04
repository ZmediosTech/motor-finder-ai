
import send from "../assets/send.png"
import lens from "../assets/lens.png"
import mike from "../assets/mike.png"


const ChatInput = () => {
  return (
    <div className="flex items-center gradient-border bg-black rounded-full border-2 md:mt-6 mb-10 mt-3 md:mx-8 xl:mx-auto mx-4 xl:px-3 md:px-3 xl:py-2 md:py-2 p-2 xl:w-[calc(100vw-400px)] h-[11vw] md:h-[8.5vw] lg:h-[6vw] xl:h-[4.5vw]">

      {/* Input Field */}
      <input
        type="text"
        placeholder="Ask me anything about motors..."
        className="flex-grow bg-transparent text-white font-thin outline-none placeholder-gray-400 text-[3vw] md:text-[2vw] lg:text-[2vw] xl:text-[1vw]"
      />

      {/* Icons */}
      <button className="">
        <img src={lens} alt="" className="size-[5vw] md:size-[4vw] lg:size-[3vw] xl:size-[2vw]" /></button>
      <button className="">
        <img src={mike} alt="" className="size-[5vw] md:size-[4vw] lg:size-[3vw] xl:size-[2vw]" /></button>

      {/* Send Button */}
      <button className="">
        <img src={send} alt="" className="md:ml-4 ml-2 size-[6vw] md:size-[6vw] lg:size-[4vw] xl:size-[3vw]" />
      </button>
    </div>
  );
};

export default ChatInput;