'use client';

import { usePromo } from '@/hooks/usePromo';
import StarIcon from '../../public/star.svg';

const PromoTimer = () => {
  const { promoTimerSeconds } = usePromo();

  return (
    <span
      className={`inline-flex items-center gap-2 font-gudea select-none
    text-(--color-accent) text-[clamp(28px,8.53332vw,40px)]/[1.1]  ${promoTimerSeconds <= 0 && promoTimerSeconds > 0 && 'motion-safe:animate-timer'}`}
    >
      <StarIcon className='w-3.5 h-3.5' />
      {Math.floor(promoTimerSeconds / 60)
        .toString()
        .padStart(2, '0')}{' '}
      :{' '}
      {(promoTimerSeconds % 60).toString().padStart(2, '0')}
      <StarIcon className='w-3.5 h-3.5' />
    </span>
  );
};

export default PromoTimer;
