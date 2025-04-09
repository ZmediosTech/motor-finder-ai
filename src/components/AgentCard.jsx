import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

 
const AgentCard = ({ agent }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#010122] rounded-2xl overflow-hidden shadow-lg text-white relative flex lg:flex-row flex-col">
            {/* Car Image */}
            <div className="relative">
                <img
                    src={agent.image}
                    alt={agent.name}
                    className="lg:w-[232px] w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-1.5">
                    <Heart className="w-5 h-5" fill="#fff" />
                </button>
            </div>

            {/* Card Content */}
            <div className="p-4 flex-grow">
                <div className="mb-3">
                    <div className="text-sm font-light flex flex-col gap-2">
                        <h3 className="md:text-lg font-semibold">{agent.name}</h3>
                        <p className="text-pink-500">
                            Since / <span className="opacity-80 text-white">{agent.since}</span>
                        </p>
                        <p className="text-pink-500">
                        Nationality /  {" "}
                            <span className="opacity-80 text-white">{agent.nationality}</span>
                        </p>
                        <p className="text-pink-500">
                        Listing / {" "}
                            <span className="opacity-80 text-white">
                            {agent.listing}
                            </span>
                        </p>
                        <p className="text-pink-500">
                        Review / {" "}
                            <span className="opacity-80 text-white">{agent.review}</span>
                        </p>
                        
                    </div>
                </div>

                {/* Chat Button */}
                <button
                    className="w-full bg-gradient-to-b from-[#FE8A70] to-[#F800C0] text-white py-3 px-4 rounded-full font-medium flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
                    onClick={() => navigate("/detail")}
                >
                    Chat with Us
                </button>
            </div>
        </div>
    );
};

export default AgentCard;
