import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/latina.png";
import send from "../../assets/send.png";
import mike from "../../assets/mike.png";
import SuccessImg from "../../assets/image.png";
import { CiMicrophoneOff } from "react-icons/ci";
import { Pencil } from "lucide-react";
export default function AuthPage() {
  const chatData = [
    { question: "Please enter your name?" },
    {
      question:
        "Great! What would you like to list with us—products, services, or something else?",
    },
    { question: "Awesome! What’s the name of your business/ website URL?" },
    {
      question:
        "Thank you! Lastly, could you provide your email? We’ll send you a link to complete your listing.",
    },
    {
      question:
        "You're all set! Keep an eye on your inbox for the next steps. Have a fantastic day!",
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  console.log(currentStep,"currentStep")
  // const speakQuestion = (text) => {
  //   const synth = window.speechSynthesis;

  //   const utterance = new SpeechSynthesisUtterance(text);
  //   utterance.lang = "en-US";
  //   utterance.rate = 1; // Speed (0.1 to 10)
  //   utterance.pitch = 1; // Pitch (0 to 2)
  //   utterance.onstart = () => setIsAudioPlaying(true);
  //   utterance.onend = () => {
  //     setIsAudioPlaying(false);
  //   };
  //   if (femaleVoice) {
  //     utterance.voice = femaleVoice;
  //   }

  //   synth.speak(utterance);
  //   // window.speechSynthesis.speak(utterance);
  // };

  const speakQuestion = (text) => {
    const synth = window.speechSynthesis;
  
    // Stop any current speech
    synth.cancel();
  
    const words = text.split(" ");
    let index = 0;
  
    // Setup voice
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1.5;     // Fast speech
    utterance.pitch = 1.2;  // Energetic
    utterance.volume = 1.0; // Max allowed
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
  
    // Start speaking
    setIsAudioPlaying(true);
    synth.speak(utterance);
  
    // Display words one-by-one in UI
    setDisplayedText(""); // Clear UI
    const displayInterval = setInterval(() => {
      if (index < words.length) {
        const word = words[index];
        setDisplayedText((prev) => prev + (prev ? " " : "") + word);
        index++;
      } else {
        clearInterval(displayInterval);
      }
    }, 400); // Show words every 100ms (adjust as needed)
  
    utterance.onend = () => {
      setIsAudioPlaying(false);
      setIsEditable(false)
    };
  };
  
  

  

  //   const speakQuestion = (text) => {
  //     const synth = window.speechSynthesis;
  //     const utterance = new SpeechSynthesisUtterance(text);
  //     utterance.lang = "en-US";
  //     utterance.rate = 1; // Speed (0.1 to 10)
  //     utterance.pitch = 1; // Pitch (0 to 2)

  //     const words = text.split(' '); // Split the question into words
  //     let index = 0;

  //     // Stream words one by one
  //     const interval = setInterval(() => {
  //       if (index < words.length) {
  //         setDisplayedText((prev) => prev + (prev ? " " : "") + words[index]);
  //         index++;
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 300); // Adjust the speed of text display here

  //     utterance.onstart = () => setIsAudioPlaying(true);
  //     utterance.onend = () => {
  //       setIsAudioPlaying(false);
  //     };

  //     // Handle voice
  //     if (femaleVoice) {
  //       utterance.voice = femaleVoice;
  //     }

  //     // Speak it
  //     synth.speak(utterance);
  // };

  const [displayedText, setDisplayedText] = useState("");
  console.log(displayedText, "displayedText");
  const [welcomeText, setWelcomeText] = useState("");
  const [responses, setResponses] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [iseditable,setIsEditable] = useState(false)
  console.log(iseditable,"iseditable")
  console.log(isAudioPlaying, "isAudioPlaying");
  const [isWelcomeAudioCompleted, setIsWelcomeAudioCompleted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [femaleVoice, setFemaleVoice] = useState(null);
  const [editIndex, setEditIndex] = useState()
  const welcomeMessage =
    "Hello Welcome to MotorsFinder.AI. Let’s get you started.";
    console.log(currentStep,"currentStep")
  useEffect(() => {
    console.log(chatData[currentStep], "step");
    if (isWelcomeAudioCompleted == true && iseditable == false) {
      setIsAudioPlaying(true);
      speakQuestion(chatData[currentStep].question);
    }
  }, [isWelcomeAudioCompleted, currentStep]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("query");
  const navigate = useNavigate();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IiIsImlkIjoxMDIsImV4cCI6MTc0NDY5Nzg5M30.0JsZd5s3WWwR9cXagd___-kx0smkYOyKzS1aRwbWjeU";

  const handleUserInteraction = () => {
    setDisplayedText(""); // clear existing text
    let index = 0;
    const words = welcomeMessage.split(" ");
    const synth = window.speechSynthesis;

    const utterance = new SpeechSynthesisUtterance(welcomeMessage);
    utterance.lang = "en-US";
    utterance.rate = 1.5;
    utterance.pitch = 1;

    setIsAudioPlaying(true);
    const interval = setInterval(() => {
      if (index < words.length) {
        setWelcomeText((prev = "") => prev + (prev ? " " : "") + words[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    },300);

    // When speech ends
    utterance.onend = () => {
      setIsAudioPlaying(false);
      setIsWelcomeAudioCompleted(true);
    };

    // Handle speech error
    utterance.onerror = (err) => {
      console.error("Speech synthesis error:", err);
      setIsAudioPlaying(false);
      setIsWelcomeAudioCompleted(true);
    };

    // Speak it
    window.speechSynthesis.cancel(); // stop any ongoing speech
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    synth.speak(utterance);

    document.removeEventListener("click", handleUserInteraction);
  };
  useEffect(() => {
    if (queryValue && femaleVoice !== null) {
      handleUserInteraction();
    }
  }, [queryValue, femaleVoice]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const synth = window.speechSynthesis;

    const loadVoices = () => {
      const voices = synth.getVoices();
      const female = voices.find((voice) =>
        /female|woman|Google UK English Female|Samantha|Microsoft Zira/i.test(
          voice.name
        )
      );
      setFemaleVoice(female || voices[0]);
    };

    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }
    loadVoices();
  }, []);

  const registerionData = async (name, service, url, email) => {
    const validCustomerServices = [
      "products",
      "product",
      "services",
      "service",
    ];

    const data = {
      username: name,
      platform_type: "Motorfinder",
      business_type: validCustomerServices.includes(service.toLowerCase())
        ? "CUSTOMER"
        : "GUEST",
      business_name: url,
      email: email,
    };

    try {
      const response = await fetch(`${API_URL}/auth/register_motor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.status === "SUCCESS") {
        console.log("Registration successful:", result);
        localStorage.setItem("token", token);
        window.dispatchEvent(new Event("authChanged"));

        if (!isAudioPlaying) {
          navigate("/");
        }
      } else {
        console.error("Registration failed:", result);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  useEffect(() => {
    if (currentStep == 4) {
      registerionData(
        responses[0]?.answer,
        responses[1]?.answer,
        responses[2]?.answer,
        responses[3]?.answer
      );
    }
  }, [currentStep]);

  const handleInput = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "" && !isAudioPlaying) {
      saveResponse(inputValue);
    }
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const saveResponse = (answer) => {
    // Validate email when it's the email question
    if (currentStep === 3 && !isValidEmail(answer) && iseditable == false) {
      const synth = window.speechSynthesis;
      const utterThis = new SpeechSynthesisUtterance("Please provide a valid email");
  
      if (femaleVoice) {
        utterThis.voice = femaleVoice;
      }
  
      synth.speak(utterThis);
      return;
    }
  
    // Create a copy of the responses array
    const newResponses = [...responses];
    console.log(newResponses, "newResponses");
  
    if (iseditable) {
      // Update the response for the specific question selected in edit mode
      const questionIndex = editIndex; // This could be adjusted based on the edit mode logic
      newResponses[questionIndex] = {
        question: chatData[questionIndex].question,
        answer,
      };
    } else {
      // Standard flow: Save the answer to the current step
      newResponses[currentStep] = {
        question: chatData[currentStep].question,
        answer,
      };
       if (currentStep < chatData.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
    }
  
    // Update the responses state
    setResponses(newResponses);
    setInputValue(""); // Clear the input field
    setIsEditable(false); // Disable edit mode
  
    // Move to the next question unless it's the last question
    // if (currentStep < chatData.length - 1) {
    //   setCurrentStep((prev) => prev + 1);
    // }
  };
  

  const handleRetype = (index) => {
    console.log(index,"index")
    setEditIndex(index)
    setIsEditable(true)
  //  setCurrentStep(index);
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
      let transcript = event.results[0][0].transcript.toLowerCase();
      console.log(transcript, "original transcript");

      // Replace spoken terms with symbols
      transcript = transcript
        .replace(/\s+/g, "") // Remove spaces
        .replace(/attherate|at the rate|at/g, "@")
        .replace(/dot/g, ".")
        .replace(/underscore/g, "_")
        .replace(/dash|hyphen/g, "-")
        .replace(/plus/g, "+");

      console.log(transcript, "normalized transcript");
      // setInputValue(transcript)
      saveResponse(transcript);
    };

    recognition.start();
  };

  const realText = [...new Set(welcomeMessage.split(" "))]
    .filter((val) => val && val !== "undefined")
    .join(" ");

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [responses, currentStep, displayedText]);

  return (
    <React.Fragment>
      <>
        {currentStep !== 4 ? (
          <div className="flex-1 w-full">
            <div className="relative mx-8 my-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7670FF] to-[#5B42FF] opacity-10 rounded-3xl"></div>
              <div className="flex items-center justify-center text-center flex-col md:flex-row py-6 gap-3">
                <div>
                  <img src={logo} alt="Logo" className="h-[150px]" />
                </div>
                <div className="ml-4">
                  <h1 className="lg:text-5xl md:text-3xl text-2xl text-white mb-3">
                    Hey, I’m Lina
                  </h1>
                  <p className="lg:text-3xl md:text-xl text-xl text-white">
                    Your Personal AI Bot
                  </p>
                </div>
              </div>

              {/* {displayedText && ( */}
              <div className="py-5 text-center px-4">
                <h3 className="text-white lg:text-3xl text-xl">
                  {/* Hello! {realText} */}
                  {/* {welcomeText} */}
                  <p>Hello! {(welcomeText ?? "").replace("undefined", "")}</p>

                </h3>
              </div>
              {/* )} */}

              {isWelcomeAudioCompleted && (
                <div className="w-full flex flex-col min-h-[calc(55vh-50px)] pb-8">
                  <div className="flex justify-center flex-1">
                    <div className="flex flex-col shadow-lg xl:w-7/12 lg:w-10/12 w-full md:px-5 px-3">
                      {responses.map((entry, index) => (
                        <div key={index} className="p-2 text-white mb-6">
                          <div className="flex items-center mb-4 gap-4">
                            <img
                              src={logo}
                              alt="left_face"
                              className="md:w-13 md:h-13 rounded-4xl w-8 h-8"
                            />
                            <div
                              style={{
                                cursor: "pointer",
                              }}
                              className="bg-gradient-to-r from-[#F800C0] to-[#FE8A70] py-3 md:px-8 px-5 md:max-w-3/4 max-w-10/12 rounded-[50px] box-shadow"
                            >
                              <p className="font-normal md:text-base text-xs">
                                {entry?.question}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start mt-3 justify-end gap-4">
                            <div
                              style={{
                                cursor: "pointer",
                              }}
                              className="py-3 md:px-8 px-5 rounded-[50px] bg-gradient-to-r from-[#7670FF] to-[#5B42FF] md:max-w-3/4 max-w-10/12 relative group box-shadow"
                            >
                              <p className="font-normal md:text-base text-xs">
                                {entry?.answer}
                              </p>
                              <div className="absolute -bottom-4 right-0 bg-gray-200 rounded-lg p-2 flex items-center justify-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200">
                                <button
                                  onClick={() => handleRetype(index)}
                                  className="text-gray-500"
                                >
                                  <Pencil size={18} />
                                </button>
                              </div>
                            </div>

                            <div className="flex justify-center items-center bg-white rounded-full text-black border border-[#4b4cff]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-user-round-icon lucide-user-round md:w-13 md:h-13 w-8 h-8"
                              >
                                <circle cx="12" cy="8" r="5" />
                                <path d="M20 21a8 8 0 0 0-16 0" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}

                      {currentStep < chatData.length && (
                        <div className="p-2 text-white flex items-center gap-4 mb-6">
                          <img
                            src={logo}
                            alt="left_face"
                            className="w-8 h-8 rounded-4xl md:w-12 md:h-12"
                          />
                          <div
                            style={{
                              boxShadow: "0px 0px 8px 0px #4B4CFF",
                              outline: "none",
                              cursor: "pointer",
                            }}
                            className="bg-gradient-to-r from-[#F800C0] to-[#FE8A70] py-3 md:px-8 px-5 rounded-[50px] md:max-w-3/4 max-w-10/12"
                          >
                            <p className="font-normal md:text-base text-xs">
                              {/* {chatData[currentStep].question} */}
                              {displayedText}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {currentStep !== 4 && (
                    <div className="flex items-center justify-center xl:w-7/12 lg:w-10/12 w-full mt-2 mx-auto">
                      {currentStep < chatData.length && (
                        <>
                          <div className="flex items-center gradient-border bg-black rounded-full border-2 xl:mx-auto mx-4 xl:px-3 md:px-3 xl:py-2 md:py-2 p-2 w-full h-[11vw] md:h-[8.5vw] lg:h-[6vw] xl:h-[4.5vw]">
                            <input
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                              onKeyDown={handleInput}
                              disabled={isAudioPlaying}
                              type="text"
                              placeholder="Type here..."
                              className="flex-grow ml-5 bg-transparent text-white font-thin outline-none placeholder-gray-400 text-[3vw] md:text-[2vw] lg:text-[2vw] xl:text-[1vw]"
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
                            <button
                              className=""
                              onClick={() => {
                                if (inputValue.trim() !== "") {
                                  saveResponse(inputValue);
                                }
                                setInputValue("");
                              }}
                            >
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
    </React.Fragment>
  );
}
