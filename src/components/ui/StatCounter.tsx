import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, suffix = '', label, duration = 2.5 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">
        {inView ? (
          <CountUp end={end} duration={duration} suffix={suffix} />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="text-gray-300 text-sm uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
