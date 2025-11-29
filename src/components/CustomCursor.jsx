import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { bghero, hero, profile, profile2 } from "../constants";

const CustomCursor = () => {
    const images = [hero, bghero, profile, profile2];

    const dotRef = useRef(null);
    const imgRef = useRef();
    const intervalRef = useRef(null);

    const [imgIndex, setImgIndex] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [showImages, setShowImages] = useState(false);

    useLayoutEffect(() => {
        const dot = dotRef.current;
        const img = imgRef.current;

        const move = (e) => {
            gsap.to([dot, img], {
                x: e.clientX+8,
                y: e.clientY-8,
            });
        };
        window.addEventListener("mousemove", move);

        const handleEnterImages = () => {
            gsap.to(dot, { opacity: 0, scale: 0.3, duration: 0.2 });
            gsap.to(img, { opacity: 1, scale: 1, duration: 0.2 });
          setShowImages(true);
            // Start image carousel
            intervalRef.current = setInterval(() => {
                setImgIndex((prev) => (prev + 1) % images.length);
            }, 300); // 0.3 seconds
        };

        const handleEnterButton = () => {
            gsap.to(dot, { opacity: 1, scale: 1, duration: 0.2 });
            gsap.to(img, { opacity: 0, scale: 0.5, duration: 0.2 });
            setShowButton(true);
            setShowImages(false);
            clearInterval(intervalRef.current);
            setImgIndex(0);
        };

        const handleLeave = () => {
            gsap.to(dot, { opacity: 1, scale: 1, duration: 0.2 });
            gsap.to(img, { opacity: 0, scale: 0.5, duration: 0.2 });
            setShowButton(false);
            setShowImages(false);
            clearInterval(intervalRef.current);
            setImgIndex(0);
        };

        window.addEventListener("cursor-hover-images", handleEnterImages);
        window.addEventListener("cursor-hover-button", handleEnterButton);
        window.addEventListener("cursor-hover-leave", handleLeave);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("cursor-hover-images", handleEnterImages);
            window.removeEventListener("cursor-hover-button", handleEnterButton);
            window.removeEventListener("cursor-hover-leave", handleLeave);
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="max-md:hidden z-12 flex w-3 h-3 fixed justify-center items-center"
            >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-100"></span>
                <span className="relative inline-flex w-3 h-3 rounded-full bg-orange-500 justify-center items-center">
                    {showButton && (
                        <button className="absolute text-center inset-0 m-auto w-16 h-16 rounded-full bg-white text-orange-500 text-xs font-semibold flex justify-center items-center">
                            View <br /> Site
                        </button>
                    )}
                </span>
            </div>

            {showImages && (
                <img
                    ref={imgRef}
                    src={images[imgIndex]}
                    className="cursor-img z-99"
                    alt="hjk"
                />
            )}
        </>
    );
};

export default CustomCursor;
