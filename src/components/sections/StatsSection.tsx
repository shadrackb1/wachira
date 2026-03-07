import React from 'react';
import StatCounter from '../ui/StatCounter';

const StatsSection = ({ data }: { data: any }) => {
  const stats = data.stats || [
    { end: 15, suffix: "+", label: "Years Experience" },
    { end: 500, suffix: "+", label: "Successful Cases" },
    { end: 120, suffix: "+", label: "Corporate Clients" },
    { end: 2, label: "Cities Served" }
  ];

  return (
    <section className="py-16 bg-primary text-white relative z-20 -mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-8">
          {stats.map((stat: any, index: number) => (
            <StatCounter key={index} end={stat.end} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
