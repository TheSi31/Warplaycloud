import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type ImageProps = {
  images: string[]; // Список изображений
  alt?: string;
};

const ImageComponent: React.FC<ImageProps> = ({ images, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className='play-for-browser__image'>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={alt}
          className={isVisible ? 'image-visible' : 'image-hidden'}
        />
      ))}
    </div>
  );
};

export default ImageComponent;
