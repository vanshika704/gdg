
'use client'; // Add this line to mark this as a client component

import Image from "next/image";
import React, { useState } from "react";

// Define the type for the props
interface FluidAnimationProps {
  path: string;
  quote: string;
}

const FluidAnimation = ({ path, quote }: FluidAnimationProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Inline styles with correct types using React.CSSProperties
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      width: '300px',
      height: '300px',
      perspective: '1000px', // Adds depth for 3D effect
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: '100%',
      height: '100%',
      transition: 'transform 0.6s',
      transformStyle: 'preserve-3d', // Preserve the 3D space for the flip
      transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)', // Flip horizontally
      position: 'relative', // Corrected position type
    },
    imageContainer: {
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden', // Hide the back side of the image when flipped
      borderRadius: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    quoteContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      backfaceVisibility: 'hidden', // Hide the front when the card is flipped
      transform: 'rotateY(180deg)', // Rotate the quote to show it after the flip
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      borderRadius: '100%',
      width: '100%',
      height: '100%',
      padding: '20px',
      textAlign: 'center',
    },
  };

  return (
    <div
      className="w-[200px] md:w-[300px] py-3 px-1 sm:px-6 lg:px-8 justify-between animate-fluid-morph"
      style={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.card}>
        {/* Image Container */}
        <div style={styles.imageContainer}>
          <Image
            width={300}
            height={300}
            src={path}
            alt="about"
            className="rounded-full"
          />
        </div>

        {/* Quote Container */}
        <div style={styles.quoteContainer}>
          <p>{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default FluidAnimation;
