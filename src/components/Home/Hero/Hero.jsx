import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import "./Hero.css";

const slides = [
  {
    url: "../../../../assets/slider/hoodies.webp",
    label: "NOW IN XXXL",
    link: "/shop/hoodies",
  },
  {
    url: "../../../../assets/slider/MIAMI_TEE_BANNER_1944x.webp",
    label: "Miami Tee",
    link: "/shop/miami-tee",
  },
  {
    url: "../../../../assets/slider/slider/music.webp",
    label: "Music",
    link: "/shop/music",
  },
  {
    url: "../../../../assets/slider/slider/t-shirt.webp",
    label: "T-Shirt",
    link: "/shop/t-shirt",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let slideInterval;
    if (isPlaying) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }

    return () => clearInterval(slideInterval);
  }, [isPlaying, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    if (isPlaying) {
      setIsPlaying(false);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    if (isPlaying) {
      setIsPlaying(false);
    }
  };

  const pausePlaySlide = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <a
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ display: index === currentSlide ? "block" : "none" }}
        >
          <img src={slide.url} alt={slide.label} className="slide-image" />
        </a>
      ))}

      <div className="slider-controls">
        <div className="slide-indicator">
          {currentSlide + 1}/{slides.length}
        </div>

        <button onClick={pausePlaySlide} className="control-btn">
          {isPlaying ? <IoIosPause /> : <IoIosPlay />}
        </button>
        <button onClick={prevSlide} className="control-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} className="control-btn">
          <FaChevronRight />
        </button>
        <button
          onClick={() => (window.location.href = slides[currentSlide].link)}
          className="control-btn shop-btn"
        >
          {slides[currentSlide].label}
          <span>→</span>
        </button>
      </div>
      <div className="world-shipping">
        <span>ESSENTIAL TEE -</span>
        <a href="/shipping-info">WORLDWIDE SHIPPING→</a>
      </div>
    </div>
  );
};

export default Hero;
