import React, { useEffect, useState } from "react";
import logo from "../../assets/latina.png";
import LeftImg from "../../assets/chatbotinp.png";
import RightImg from "../../assets/userBotImg.png";

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

  const [currentStep, setCurrentStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [responses, setResponses] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isWelcomeAudioCompleted, setIsWelcomeAudioCompleted] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const welcomeMessage =
    "Hello! Welcome to MotorsFinder.AI. Let’s get you started.";

  useEffect(() => {
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
              setDisplayedText(
                (prev) => prev + (prev ? " " : "") + words[index]
              );
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

    document.addEventListener("click", handleUserInteraction);
    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

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
      {currentStep !== 4 ? (
        <div className="pl-[150px] pr-[150px] w-[80%] m-auto mt-[30px] h-[calc(90vh-86px)]">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="h-[150px]" />
          </div>

          {displayedText && (
            <div className="mt-5 text-center">
              <h1 className="text-white text-3xl">{realText}</h1>
            </div>
          )}

          {isWelcomeAudioCompleted && (
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center w-full max-w-lg rounded-2xl overflow-hidden shadow-lg p-4">
                {responses.map((entry, index) => (
                  <div key={index} className="p-2 border-b text-white w-100">
                    <div className="flex items-center mb-2">
                      <img
                        src={LeftImg}
                        alt="left_face"
                        className="mr-2 w-9 h-9 rounded-4xl"
                      />
                      <strong>{entry?.question}</strong>
                    </div>
                    <div className="flex items-center">
                      <p className="mr-2">{entry?.answer}</p>
                      <img
                        src={RightImg}
                        alt="right_face"
                        className="w-12 h-12 ml-2 rounded-4xl"
                      />
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
                  <div className="p-2 mt-4 text-white flex items-center">
                    <img
                      src={LeftImg}
                      alt="left_face"
                      className="w-12 h-12 mr-2 rounded-4xl"
                    />
                    <strong>{chatData[currentStep].question}</strong>
                  </div>
                )}

                {currentStep !== 4 && (
                  <div className="flex items-center justify-center w-full mt-4">
                    {currentStep < chatData.length && (
                      <>
                        <input
                          type="text"
                          className="chatbox_input p-2 border text-white rounded w-full"
                          placeholder="Type your response..."
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleInput}
                          disabled={isAudioPlaying}
                        />

                        <button onClick={startListening} className="ml-2">
                          {isListening ? (
                            <CiMicrophoneOff color="red" size={25} />
                          ) : (
                            <CiMicrophoneOn color="#fff" size={25} />
                          )}
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[calc(90vh-86px)]">
          <h1 className="text-white text-3xl text-center mb-4">
            Thanks for Choosing our Platform to find your dream Motor
          </h1>
          <img src={SuccessImg} className="w-[250px] h-[250px]" alt="Success" />
        </div>
      )}
    </React.Fragment>
  );
}
