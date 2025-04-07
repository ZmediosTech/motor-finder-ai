import React, { useEffect, useState } from "react";
import logo from "../../assets/latina.png";
import LeftImg from "../../assets/chatbotinp.png";
import RightImg from "../../assets/userBotImg.png";
import send from "../../assets/send.png";
import lens from "../../assets/lens.png";
import mike from "../../assets/mike.png";

import WelcomeVideo from "../../assets/AudioFile/motor.mp4";

import WelcomeAudio from "../../assets/AudioFile/welcome.mp3";
import whatName from "../../assets/AudioFile/whatName.mp3";
import Great from "../../assets/AudioFile/great.mp3";
import Awesome from "../../assets/AudioFile/awesome.mp3";
import ThankYou from "../../assets/AudioFile/thankyou.mp3";
import AllSet from "../../assets/AudioFile/allset.mp3";
import SuccessImg from "../../assets/image.png";
import { CiMicrophoneOff, CiMicrophoneOn } from "react-icons/ci";

export default function AuthPage() {
  const chatData = [
    { question: "Enter your name", audioFile: whatName },
    {
      question:
        "Great! What would you like to list with us—products, services, or something else?",
      audioFile: Great,
    },
    {
      question: "Awesome! What’s the name of your business/ website URL?",
      audioFile: Awesome,
    },
    {
      question:
        "Thank you! Lastly, could you provide your email? We’ll send you a link to complete your listing.",
      audioFile: ThankYou,
    },
    {
      question:
        "You're all set! Keep an eye on your inbox for the next steps. Have a fantastic day!",
      audioFile: AllSet,
    },
  ];

  const [IsVideoPlaying, setIsVideoPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [responses, setResponses] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isWelcomeAudioCompleted, setIsWelcomeAudioCompleted] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const welcomeMessage =
    "Hello! Welcome to MotorsFinder.AI. Let’s get you started.";

  const handleUserInteraction = () => {
    const audio = new Audio(WelcomeAudio);
    setDisplayedText("");
    let index = 0;
    const words = welcomeMessage.split(" ");
    setIsAudioPlaying(true);

    audio
      .play()
      .then(() => {
        const interval = setInterval(() => {
          if (index < words.length) {
            setDisplayedText((prev) => prev + (prev ? " " : "") + words[index]);
            index++;
          } else {
            clearInterval(interval);
          }
        }, 300);
        audio.onended = () => {
          setIsAudioPlaying(false);
          setIsWelcomeAudioCompleted(true);
        };
      })
      .catch((error) => {
        console.error("Audio playback failed:", error);
        setIsAudioPlaying(false);
        setIsWelcomeAudioCompleted(true);
      });

    document.removeEventListener("click", handleUserInteraction);
  };

  useEffect(() => {
    const playAudio = async () => {
      if (currentStep >= chatData.length || !isWelcomeAudioCompleted) return;
      const audioFile = chatData[currentStep]?.audioFile;
      if (audioFile) {
        setIsAudioPlaying(true);
        const audio = new Audio(audioFile);
        await audio.play();
        audio.onended = () => setIsAudioPlaying(false);
      }
    };
    playAudio();
  }, [currentStep, isWelcomeAudioCompleted]);

  const handleInput = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "" && !isAudioPlaying) {
      saveResponse(inputValue);
    }
  };

  const saveResponse = (answer) => {
    const newResponses = [...responses];
    newResponses[currentStep] = {
      question: chatData[currentStep].question,
      answer,
    };
    setResponses(newResponses);
    setInputValue("");
    if (currentStep < chatData.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleRetype = (index) => {
    setCurrentStep(index);
    setInputValue(responses[index]?.answer || "");
  };

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      saveResponse(transcript);
    };

    recognition.start();
  };

  const realText = displayedText
    .split(" ")
    .filter((val) => val !== "undefined" && val !== undefined)
    ?.join(" ");

  return (
    <React.Fragment>
      {IsVideoPlaying && (
        <div className="top-0 left-0 w-full overflow-hidden relative">
          <div className="relative w-[100vw] h-[84vh]">
            <video className="w-full object-cover" autoPlay muted loop>
              <source src={WelcomeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              className="absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-[2.5vw] md:text-[2vw] lg:text-[2vw] xl:text-[1vw]"
              style={{
                boxShadow: "0px 0px 8px 0px #4B4CFF",
                outline: "none",
                cursor: "pointer",
                marginRight: "12px",
                width: "80px",
              }}
              onClick={() => {
                setIsVideoPlaying(false);
                handleUserInteraction();
              }}
            >
              Skip
            </button>
          </div>
        </div>
      )}

      {!IsVideoPlaying && (
        <>
          {currentStep !== 4 ? (
            <div className="w-[90%] m-auto mt-[30px] h-[calc(90vh-86px)]">
              <div className="flex items-center justify-center text-center">
                <div>
                  <img src={logo} alt="Logo" className="h-[150px]" />
                </div>
                <div className="ml-4">
                  <h1 className="text-4xl text-white leading-tight">
                    Hey, I’m Lina <br /> Your Personal AI Bot
                  </h1>
                </div>
              </div>

              {displayedText && (
                <div className="mt-5 text-center">
                  <h1 className="text-white text-3xl">{realText}</h1>
                </div>
              )}

              {isWelcomeAudioCompleted && (
                <div className="w-full">
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col shadow-lg h-[40vh] overflow-auto w-7/12 custom_scrollbar">
                      {responses.map((entry, index) => (
                        <div key={index} className="p-2 text-white">
                          <div className="flex items-center mb-2">
                            <img
                              src={logo}
                              alt="left_face"
                              className="mr-2 w-9 h-9 rounded-4xl"
                            />
                            <div
                              style={{
                                boxShadow: "0px 0px 8px 0px #4B4CFF",
                                outline: "none",
                                cursor: "pointer",
                              }}
                              className="bg-gradient-to-b from-[#FE8A70] to-[#F800C0] p-3 w-auto rounded-2xl rounded-full"
                            >
                              <strong>{entry?.question}</strong>
                            </div>
                          </div>

                          <div className="flex items-center mt-3 justify-end">
                            <div
                              style={{
                                background:
                                  "linear-gradient(90deg, #7670FF 0%, #5B42FF 100%)",
                                boxShadow: "0px 0px 8px 0px #4B4CFF",
                                outline: "none",
                                cursor: "pointer",
                              }}
                              className="bg-gradient-to-b from-[#FE8A70] to-[#F800C0] p-3 w-auto rounded-2xl mr-2 rounded-full px-5"
                            >
                              <p className="text-center">{entry?.answer}</p>
                            </div>

                            <div
                              style={{
                                background: "#fff",
                                padding: "5px",
                                borderRadius: "50%",
                                color: "#000",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-user-round-icon lucide-user-round"
                              >
                                <circle cx="12" cy="8" r="5" />
                                <path d="M20 21a8 8 0 0 0-16 0" />
                              </svg>
                            </div>

                            <button
                              onClick={() => handleRetype(index)}
                              className="ml-2 text-blue-500"
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      ))}

                      {currentStep < chatData.length && (
                        <div className="p-2 mt-4 text-white flex items-left">
                          <img
                            src={logo}
                            alt="left_face"
                            className="w-12 h-12 mr-2 rounded-4xl"
                          />
                          <div
                            style={{
                              boxShadow: "0px 0px 8px 0px #4B4CFF",
                              outline: "none",
                              cursor: "pointer",
                            }}
                            className="bg-gradient-to-b from-[#FE8A70] to-[#F800C0] p-3 w-auto rounded-2xl rounded-full"
                          >
                            <strong>{chatData[currentStep].question}</strong>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {currentStep !== 4 && (
                    <div className="flex items-center justify-center w-7/12 mt-4 mx-auto">
                      {currentStep < chatData.length && (
                        <>
                          <div className="flex items-center gradient-border bg-black rounded-full border-2 md:mt-6 mt-3 md:mx-8 xl:mx-auto mx-4 xl:px-3 md:px-3 xl:py-2 md:py-2 p-2 w-full h-[11vw] md:h-[8.5vw] lg:h-[6vw] xl:h-[4.5vw]">
                            <input
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                              onKeyDown={handleInput}
                              disabled={isAudioPlaying}
                              type="text"
                              placeholder="Type here..."
                              className="flex-grow bg-transparent text-white font-thin outline-none placeholder-gray-400 text-[3vw] md:text-[2vw] lg:text-[2vw] xl:text-[1vw]"
                            />
                            <button onClick={startListening} className="">
                              {isListening ? (
                                <CiMicrophoneOff color="red" size={25} />
                              ) : (
                                <img
                                  src={mike}
                                  alt=""
                                  className="size-[5vw] md:size-[4vw] lg:size-[3vw] xl:size-[2vw]"
                                />
                              )}
                            </button>
                            <button className="">
                              <img
                                src={send}
                                alt=""
                                className="md:ml-4 ml-2 size-[6vw] md:size-[6vw] lg:size-[4vw] xl:size-[3vw]"
                              />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-[calc(90vh-86px)]">
              <h1 className="text-white text-3xl text-center mb-4">
                {
                  "You're all set! Keep an eye on your inbox for the next steps. Have a fantastic day!"
                }
              </h1>
              <img
                src={SuccessImg}
                className="w-[250px] h-[250px]"
                alt="Success"
              />
            </div>
          )}
        </>
      )}
    </React.Fragment>
  );
}
