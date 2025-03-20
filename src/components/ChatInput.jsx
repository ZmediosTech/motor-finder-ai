
import send from "../assets/send.png"
import lens from "../assets/lens.png"
import mike from "../assets/mike.png"


const ChatInput = () => {
  return (
    <div className="flex items-center gradient-border bg-black rounded-full border-2 mt-8 pl-8 md:pl-12 pr-4 py-4 md:py-4 max-w-4xl mx-3 md:mx-8 lg:mx-auto 
     ">
      
      {/* Input Field */}
      <input
        type="text"
        placeholder="Ask me anything about motors..."
        className="flex-grow bg-transparent text-white font-thin md:text-2xl outline-none   placeholder-gray-400"
      />

      {/* Icons */}
      <button className= "">
      <img src={lens} alt=""  className="size-6 md:size-10"/>      </button>
      <button className= "">
      <img src={mike} alt=""  className="size-6 md:size-10"/></button>

      {/* Send Button */}
      <button className= "">
        <img src={send} alt=""  className="ml-4 size-10 md:size-16"/>
      </button>
    </div>
  );
};

export default ChatInput;