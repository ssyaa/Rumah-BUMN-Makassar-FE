import React from 'react';

interface TestimonialCardProps {
    imageSrc: string;
    quote: string;
    name: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ imageSrc, quote, name }) => {
    return (
        <div className="testimonial-card bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-64 h-auto max-h-[350px] overflow-hidden cursor-pointer">
            <img
                src={imageSrc}
                alt={name}
                className="rounded-full w-24 h-24 object-cover mb-4"
            />
            <div className="px-4 py-2">
                <p className="text-center text-gray-600 italic">"{quote}"</p>
                <p className="text-center text-gray-800 font-semibold mt-2">{name}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
