'use client';
import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimoni: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const Testimoni = [
        {
            imageSrc: '/mnt/data/image.png',
            quote: 'Alhamdulillah saya sangat terbantu setelah saya menjadi bagian dari RB!',
            name: 'Nama Testimoni 1',
        },
        {
            imageSrc: '/mnt/data/image.png',
            quote: 'Alhamdulillah saya sangat terbantu setelah saya menjadi bagian dari RB!',
            name: 'Nama Testimoni 2',
        },
        {
            imageSrc: '/mnt/data/image.png',
            quote: 'Alhamdulillah saya sangat terbantu setelah saya menjadi bagian dari RB!',
            name: 'Nama Testimoni 3',
        },
        {
            imageSrc: '/mnt/data/image.png',
            quote: 'Alhamdulillah saya sangat terbantu setelah saya menjadi bagian dari RB!',
            name: 'Nama Testimoni 4',
        },
        {
            imageSrc: '/mnt/data/image.png',
            quote: 'Alhamdulillah saya sangat terbantu setelah saya menjadi bagian dari RB!',
            name: 'Nama Testimoni 5',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % Testimoni.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (cardRefs.current[activeIndex]) {
            cardRefs.current[activeIndex]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            });
        }
    }, [activeIndex]);

    const handleCardChange = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="Testimoni-section bg-blue h-[50vh] w-full flex items-center justify-center py-0">
            <div className="container mx-auto px-[5vw] flex items-center justify-between w-full">
                <div className="w-full lg:w-1/2 text-left pr-[5vw]">
                    <h2 className="text-[4vw] font-bold mb-[3vh]">Kenapa memilih Rumah BUMN?</h2>
                </div>
                <div className="w-full lg:w-1/2 overflow-x-auto whitespace-nowrap flex">
                    {Testimoni.map((testimonial, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}
                            className={`inline-block mr-[2vw] transition-all duration-500 transform ${
                                activeIndex === index ? 'scale-110 shadow-2xl shadow-blue-500 z-10' : 'scale-100'
                            }`}
                            onClick={() => handleCardChange(index)}
                        >
                            <TestimonialCard
                                imageSrc={testimonial.imageSrc}
                                quote={testimonial.quote}
                                name={testimonial.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimoni;