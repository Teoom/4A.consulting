'use client';

import { useState, useEffect, useRef } from 'react';
import { usePromo } from '@/hooks/usePromo';
import StarIcon from '../../public/star.svg';

const PromoTimer = () => {
  const { promoTimerSeconds, setPromoActive } = usePromo();
  const [timer, setTimer] = useState(promoTimerSeconds);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    ref.current = window.setInterval(() => {
      setTimer((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => {
      if (ref.current !== null) {
        clearInterval(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setPromoActive(false);
      if (ref.current !== null) {
        clearInterval(ref.current);
      }
    }
  }, [timer, setPromoActive]);

  const minutes = String(Math.floor(timer / 60)).padStart(
    2,
    '0'
  );
  const seconds = String(timer % 60).padStart(2, '0');

  return (
    <span
      className={`inline-flex items-center gap-2 font-gudea select-none
    text-(--color-accent) text-[clamp(28px,8.53332vw,40px)]/[1.1]  ${timer > 0 && timer <= 30 && 'motion-safe:animate-timer'}`}
    >
      <StarIcon className='w-3.5 h-3.5' />
      {minutes + ' : ' + seconds}
      <StarIcon className='w-3.5 h-3.5' />
    </span>
  );
};

export default PromoTimer;
