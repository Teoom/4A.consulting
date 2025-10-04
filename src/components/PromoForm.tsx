'use client';

import { useState, useCallback } from 'react';
import { IPromoOfffer } from '@/lib/api';
import PromoCard from './PromoCard';
import { usePromo } from '@/hooks/usePromo';
import AlertIcon from '../../public/alert.svg';
import CheckIcon from '../../public/check.svg';
import Link from 'next/link';

interface IPromoForm {
  data: IPromoOfffer[];
  fieldName: string;
  className?: string;
}

const PromoForm = ({
  data,
  fieldName,
  className
}: IPromoForm) => {
  const [offer, setOffer] = useState<IPromoOfffer | null>(
    null
  );
  const [showError, setShowError] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const { isPromoActive } = usePromo();

  const handleChangePromo = useCallback(
    (offer: IPromoOfffer) => setOffer(offer),
    []
  );

  const handleChangeCheck = useCallback(() => {
    setIsCheck((prev) => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setOffer(null);
    setIsCheck(false);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isCheck || !offer) {
        setShowError(true);
        setTimeout(() => setShowError(false), 1000);
        return;
      }

      try {
        await fetch('/api/promo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...offer,
            terms: isCheck,
            isPromoActive
          })
        });
        handleReset();
      } catch (err) {
        console.log(err);
      }
    },

    [offer, isCheck]
  );

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} id='wtf'>
        <fieldset className='flex gap-[14px]  flex-wrap'>
          {data.map((promo, index) => (
            <PromoCard
              key={promo.id + index}
              {...promo}
              name={fieldName}
              onChange={handleChangePromo}
              isSelected={offer?.period === promo.period}
              isPromo={isPromoActive}
            />
          ))}
        </fieldset>
        <div
          className={` sm:rounded-[20px] xs:rounded-[16px] bg-(--gray-800) max-w-124.75 w-full
           mt-[clamp(10px,3.2vw,20px)] py-[clamp(16px,4.26vw,18px)] pl-5 lg:pr-5 sm:pr-8.75 xs:pr-7.5`}
        >
          <p className='text-[clamp(12px,3.2vw,16px)]/[1.3] flex gap-x-1.5'>
            <span>
              {' '}
              <AlertIcon className='w-5 h-6' />
            </span>
            Следуя плану на 3 месяца и более, люди получают
            в 2 раза лучший результат, чем за 1 месяц
          </p>
        </div>
        <label>
          <input
            type='checkbox'
            checked={isCheck}
            onChange={handleChangeCheck}
            name='terms'
            className='absolute opacity-0 w-0 h-0 pointer-events-none'
          />
          <div className='flex items-center sm:gap-3 xs:gap-2.5 max-w-162.25 w-full mt-[clamp(16px,100vi-351px,30px)]'>
            <span className='w-8 h-8 shrink-0 rounded-[4px] border-[#606566] border-[1.5px]  cursor-pointer flex items-center justify-center'>
              {isCheck && <CheckIcon className='w-5 h-4' />}
            </span>
            <p className='text-terms-text text-[clamp(12px,3.2vw,16px)]/[1.1]'>
              Я согласен с{' '}
              <Link href='#' className='underline'>
                офертой рекуррентных платежей
              </Link>{' '}
              и{' '}
              <Link href='#' className='underline'>
                Политикой конфиденциальности
              </Link>{' '}
            </p>
          </div>
        </label>
        <button
          type='submit'
          className={`max-w-88 w-full bg-accent text-[#191E1F] font-bold lg:mt-4 mt-5  text-lg/[1.3] lg:text-xl/[1.3]  
          sm:py-5 xs:py-4 rounded-[20px] cursor-pointer
            ${showError ? 'bg-red-500 animate-pulse' : ''}`}
        >
          Купить
        </button>
      </form>
      <p className='lg:mt-3.5 sm:mt-5  xs:mt-2.5 text-(--gray-500) lg:text-sm/[1.2] text-[10px]/[1.2]'>
        Нажимая кнопку «Купить», Пользователь соглашается на
        разовое списание денежных средств для получения
        пожизненного доступа к приложению. Пользователь
        соглашается, что данные кредитной/дебетовой карты
        будут сохранены для осуществления покупок
        дополнительных услуг сервиса в случае желания
        пользователя.
      </p>
    </div>
  );
};

export default PromoForm;
