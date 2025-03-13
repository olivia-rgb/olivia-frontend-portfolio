import React, { useState, useEffect } from 'react';

// Custom hook for the animated counter
const useCounter = (targetValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Parse the target value to ensure it's a number
    const target = parseInt(targetValue, 10);
    if (isNaN(target)) return;
    
    // Reset count when target changes
    setCount(0);
    
    // Calculate animation steps
    const steps = 60;
    const increment = target / steps;
    const intervalTime = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);
    
    return () => clearInterval(timer);
  }, [targetValue, duration]);
  
  return count;
};

const AnimatedCounter = ({ value, duration = 2000, prefix = '', postfix = '', className = '' }) => {
  const count = useCounter(value, duration);
  
  return (
    <span className={className}>
      {prefix}{count}{postfix}
    </span>
  );
};

const AchievementsSection = () => {
  const achievementsList = [
    {
      metric: "Projects",
      value: "10",
      postfix: "+",
    },
    {
      metric: "Certifications",
      value: "3",
    },
    {
      metric: "Years",
      value: "3",
    },
  ];
  
  return (
    <div className=" w-full">
      <div className="w-4/5 max-w-[1400px] mx-auto border-[#33353F] border rounded-md py-8  flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center  mx-4"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                <AnimatedCounter
                  value={achievement.value}
                  duration={2000 + (index * 300)}
                  className="text-white text-4xl font-bold"
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;