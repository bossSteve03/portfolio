import React, { useState } from 'react';
import { Card } from '../../components';

// Import images
import spainFlag from '../../assets/spainflag.png';
import zen1 from '../../assets/zen.png';
import zen2 from '../../assets/zen2.png';
import zen3 from '../../assets/zen3.jpg';
import photo1 from '../../assets/iPhonePhotography.jpeg';
import photo2 from '../../assets/iPhonePhotography2.jpeg';
import photo3 from '../../assets/iPhonePhotography3.png';

const interests = [
  {
    title: 'Hispanic Culture & Language',
    emoji: '🇪🇸',
    images: [spainFlag],
    description: [
      "I've always been drawn to Hispanic culture, from the food and music to the way language is used day to day. What started as curiosity turned into learning Spanish properly and using it whenever I get the chance.",
      "I'm at a conversational level now and getting more comfortable having real conversations. I enjoy Spanish media, picking up expressions, and learning how culture and language connect in everyday life.",
    ],
    polaroidPositions: [
      { top: '50%', left: '-15%', rotate: -8 },   // left → lean out (negative)
    ],
  },
  {
    title: 'Zen the Husky',
    emoji: '🐺',
    images: [zen3, zen1, zen2],
    description: [
      "This is Zen. He's my husky and, at the time of writing, he's 12 years old. He's stubborn, dramatic, and absolutely convinced he's still a puppy.",
      "Our walks are one of my favourite parts of the day. They're a great excuse to get outside, clear my head, and let him pretend he's leading an expedition instead of just going around the block.",
    ],
    polaroidPositions: [
      { top: '30%', left: '-15%', rotate: -12 },  // left → lean out (negative)
      { top: '50%', right: '-15%', rotate: 8 },   // right → lean out (positive)
      { top: '75%', left: '-8%', rotate: -5 },    // left → lean out (negative, subtle)
    ],
  },
  {
    title: 'iPhone Photography',
    emoji: '📱',
    images: [photo3, photo1, photo2],
    description: [
      'I enjoy photography as a way to slow down and notice details. All of my photos are taken on an iPhone, which keeps things simple and accessible.',
      "I focus more on capturing the small moments in life instead of high level equipment and minute detail. It's about capturing moments and views that hold a memory rather than chasing the perfect shot.",
    ],
    polaroidPositions: [
      { top: '30%', right: '-15%', rotate: 14 },  // right → lean out (positive, dramatic)
      { top: '50%', left: '-15%', rotate: -10 },  // left → lean out (negative)
      { top: '75%', right: '-8%', rotate: 6 },    // right → lean out (positive, subtle)
    ],
  },
];

// Image Modal Component
function ImageModal({ images, currentIndex, onClose, onNext, onPrev }) {
  if (currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        style={{ fontSize: '2rem' }}
      >
        ✕
      </button>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2"
            style={{ fontSize: '2.5rem' }}
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2"
            style={{ fontSize: '2.5rem' }}
          >
            ›
          </button>
        </>
      )}

      {/* Image container - fixed height for consistency */}
      <div
        className="flex items-center justify-center"
        style={{ width: '90vw' }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt=""
          className="max-w-full object-contain rounded-lg"
          style={{ height: '60svh' }}
        />
      </div>

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Polaroid Image Component
const POLAROID_SIZE = '11.25rem'; // width for portrait, height for landscape

function Polaroid({ src, position, onClick }) {
  const [isLandscape, setIsLandscape] = useState(null);

  const positionStyles = {
    top: position.top,
    left: position.left,
    right: position.right,
  };

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setIsLandscape(naturalWidth > naturalHeight);
  };

  return (
    <div
      className="polaroid absolute hidden md:block cursor-pointer transition-all duration-300 hover:scale-110 hover:z-20"
      style={{
        ...positionStyles,
        transform: `translateY(-50%) rotate(${position.rotate}deg)`,
        visibility: isLandscape === null ? 'hidden' : 'visible',
      }}
      onClick={onClick}
    >
      <div
        className="p-3 pb-6 rounded-sm shadow-xl"
        style={{
          backgroundColor: '#fefefe',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 5px 15px rgba(0,0,0,0.2)',
        }}
      >
        <img
          src={src}
          alt=""
          className="rounded-sm"
          onLoad={handleImageLoad}
          style={{
            display: 'block',
            width: isLandscape ? 'auto' : POLAROID_SIZE,
            height: isLandscape ? POLAROID_SIZE : 'auto',
          }}
        />
      </div>
    </div>
  );
}

// Mobile Image Strip Component
function MobileImageStrip({ images, onImageClick }) {
  return (
    <div className="flex md:hidden gap-3 mb-4 overflow-x-auto pb-2 -mx-2 px-2">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={() => onImageClick(idx)}
          style={{
            transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)`,
          }}
        >
          <div
            className="p-1.5 pb-3 rounded-sm"
            style={{
              backgroundColor: '#fefefe',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            <img
              src={img}
              alt=""
              className="w-24 h-20 object-cover rounded-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const [modalState, setModalState] = useState({ images: [], currentIndex: null });

  const openModal = (images, index) => {
    setModalState({ images, currentIndex: index });
  };

  const closeModal = () => {
    setModalState({ images: [], currentIndex: null });
  };

  const nextImage = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const prevImage = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  return (
    <>
      {/* Personal Summary Section */}
      <section className="section" style={{ paddingTop: 'calc(var(--section-spacing))' }}>
        <div className="container">
          <h1>About Me</h1>

          <div className="max-w-3xl">
            <p className="text-lead mb-6">
              I&apos;m a software engineer based in London with a passion for building clean,
              maintainable systems. Beyond the technical work, I&apos;m driven by curiosity
              and a commitment to continuous learning.
            </p>
            <p className="text-lead">
              Whether it&apos;s picking up a new programming language, exploring different
              cultures, or finding the right angle for a photo, I believe in taking the
              time to understand things properly before moving forward.
            </p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="section">
        <div className="container">
          <h2>Personal Interests</h2>

          <div className="flex flex-col gap-16 md:gap-24 mt-12">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="relative flex justify-center"
                style={{ minHeight: '18.75rem' }}
              >
                {/* Floating Polaroids - Desktop */}
                {interest.images.map((img, imgIndex) => (
                  <Polaroid
                    key={imgIndex}
                    src={img}
                    position={interest.polaroidPositions[imgIndex]}
                    onClick={() => openModal(interest.images, imgIndex)}
                    index={imgIndex}
                  />
                ))}

                {/* Text Card */}
                <div
                  className="relative z-10 w-full md:w-[55%] rounded-[var(--radius-lg)] border p-6 md:p-8"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-light)',
                  }}
                >
                  {/* Mobile Image Strip */}
                  <MobileImageStrip
                    images={interest.images}
                    onImageClick={(idx) => openModal(interest.images, idx)}
                  />

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{interest.emoji}</span>
                    <h3 className="text-xl m-0" style={{ color: 'var(--text-primary)' }}>
                      {interest.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div>
                    {interest.description.map((para, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-sm mb-4 last:mb-0"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Click hint for desktop */}
                  {interest.images.length > 0 && (
                    <p
                      className="hidden md:block text-xs mt-4 mb-0"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      Click photos to view gallery
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills/Approach Section */}
      <section className="section">
        <div className="container">
          <h2>My Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <h3 style={{ color: 'var(--text-primary)' }}>Problem Solving</h3>
              <p>
                I believe in solving the right problems first. My process starts with
                understanding requirements clearly, then choosing the simplest robust
                approach before iterating toward polish.
              </p>
              <p className="mb-0">
                Whether working on front-end interfaces or back-end systems, I prioritize
                performance, accessibility, and maintainability – building solutions that
                stand the test of time.
              </p>
            </Card>

            <Card>
              <h3 style={{ color: 'var(--text-primary)' }}>Continuous Learning</h3>
              <p>
                Technology moves fast, and I make it a priority to stay current while
                also understanding the fundamentals that don&apos;t change.
              </p>
              <p className="mb-0">
                From learning new frameworks to picking up Spanish as my third language,
                I find that the best way to grow is to stay curious and embrace challenges
                that push me outside my comfort zone.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        images={modalState.images}
        currentIndex={modalState.currentIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
