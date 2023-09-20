import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ClockContainer, ClockText } from './styles';

const DigitalClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeString = format(new Date(), 'HH:mm:ss');
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ClockContainer>
        <ClockText>{currentTime}</ClockText>
    </ClockContainer>

  );
};

export default DigitalClock;
