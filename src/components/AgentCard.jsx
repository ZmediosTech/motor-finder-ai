import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";


const AgentCard = ({ agent }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#010122] rounded-2xl overflow-hidden shadow-lg text-white flex flex-col lg:flex-row">
            {/* Car Image */}
            <div className="relative flex-1 lg:basis-1/2">
                <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-[300px] object-cover"
                />
                <button className="absolute top-4 right-4 p-1.5">
                    <Heart className="w-5 h-5" fill="#fff" />
                </button>
            </div>

            {/* Card Content */}
            <div className="flex-1 lg:basis-1/2 p-4 flex flex-col justify-between">
                <div className="mb-3 space-y-2 text-sm font-light">
                    <h3 className="text-lg font-semibold">{agent.name}</h3>
                    <p className="text-pink-500">
                        Since / <span className="opacity-80 text-white">{agent.since}</span>
                    </p>
                    <p className="text-pink-500">
                        Nationality / <span className="opacity-80 text-white">{agent.nationality}</span>
                    </p>
                    <p className="text-pink-500">
                        Listing / <span className="opacity-80 text-white">{agent.listing}</span>
                    </p>
                    <p className="text-pink-500">
                        Review / <span className="opacity-80 text-white">{agent.review}</span>
                    </p>
                </div>

                {/* Chat Button */}
                <button
                    className="mt-4 w-full bg-gradient-to-b from-[#FE8A70] to-[#F800C0] text-white py-3 px-4 rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
                    onClick={() => navigate("/agent")}
                >
                    Chat with Us
                </button>
            </div>
        </div>

    );
};

export default AgentCard;
