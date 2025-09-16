'use client';

import { useEffect, useRef, useState } from 'react';

const Counter = ({ to, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const duration = 2000;
            const step = Math.ceil(to / (duration / 10));

            const timer = setInterval(() => {
              start += step;
              if (start > to) {
                start = to;
                clearInterval(timer);
              }
              setCount(start);
            }, 10);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [to]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-500">
        {prefix}
        {count}
        {suffix}
      </div>
    </div>
  );
};

export default Counter;
