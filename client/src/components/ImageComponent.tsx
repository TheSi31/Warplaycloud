import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  src: string;
  alt?: string;
};

const ImageComponent = ({ src, alt }: Props) => {
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
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={isVisible ? 'image-visible' : 'image-hidden'}
    />
  );
};

export default ImageComponent;
