import React, { useEffect, useRef, useState } from 'react';

type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  rootMargin?: string;
};

const transparentPixel =
  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  srcSet,
  sizes,
  rootMargin = '600px 0px',
  loading = 'lazy',
  ...rest
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!src) {
      return;
    }

    if (typeof window === 'undefined') {
      setShouldLoad(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );

    const node = imgRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, src]);

  return (
    <img
      ref={imgRef}
      src={shouldLoad ? src : transparentPixel}
      srcSet={shouldLoad ? srcSet : undefined}
      sizes={shouldLoad ? sizes : undefined}
      loading={loading}
      decoding="async"
      {...rest}
    />
  );
};
