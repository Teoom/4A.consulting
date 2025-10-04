import { IPromoOfffer } from '@/lib/api';
import { calcaluteDiscount } from '@/utils/calculateDiscount';

interface IPromoCard extends IPromoOfffer {
  name: string;
  isSelected: boolean;
  isPromo: boolean;
  onChange: (offer: IPromoOfffer) => void;
}

const PromoCard = ({
  id,
  full_price,
  price,
  period,
  is_best,
  text,
  name,
  isSelected,
  isPromo,
  onChange
}: IPromoCard) => {
  const discount = calcaluteDiscount(full_price, price);

  return (
    <label
      className={`lg:basis-[240px] basis-full   ${is_best && 'lg:basis-full order-first'} cursor-pointer`}
    >
      <input
        type='radio'
        name={name}
        value={period}
        className={`absolute opacity-0 w-0 h-0 pointer-events-none`}
        checked={isSelected}
        required
        onChange={() => {
          onChange({
            id,
            full_price,
            price,
            period,
            is_best,
            text
          });
        }}
      />

      <div
        className={`lg:px-4.5 px-[clamp(20px,100vi-345px,34px)] flex flex-row  items-center relative  h-full   
            bg-card-bg border-2 rounded-[20px] lg:rounded-[40px]   ${isSelected ? 'border-accent' : 'border-card-border '} sm:gap-x-12.5 xs:gap-x-7.5 
            py-[clamp(18px,4.53vw,30px)] ${!is_best && 'lg:pt-17.5'} lg:flex-col ${is_best && 'lg:rounded-[34px] lg:flex-row lg:gap-x-10 lg:pl-30.5 lg:pr-20'}
           `}
      >
        <span
          className='font-medium text-[clamp(13px,100vw-359px,22px)]/[1.3]  
					bg-hit w-fit px-[clamp(6px,1.6vw,8px)] py-[clamp(3px,0.8vw,5px)] 
					rounded-b-lg absolute  lg:left-[50px] right-[clamp(50px,18.14vw,120px)] top-[-2px] '
        >
          -{discount}%
        </span>
        {is_best && (
          <span
            className='text-accent  text-[clamp(13px,100vw-359px,22px)]/[1.3] 
            absolute top-[clamp(6px,1.6vw,10px)]  right-[clamp(14px,3.6vw,20px)]'
          >
            хит!
          </span>
        )}
        <div className='flex flex-col justify-center items-center'>
          <h2
            className={`text-[clamp(16px,4.8vw,26px)]/[1.2] font-medium ${!is_best && 'lg:mb-7.5'} mb-[clamp(12px,4.27vw,16px)]`}
          >
            {period}
          </h2>

          <span
            className={`${isSelected && 'text-accent'} font-semibold text-[clamp(30px,9.07vw,50px)]/[1] whitespace-nowrap
          `}
          >
            {isPromo ? price : full_price} ₽
          </span>

          <span
            className={`self-end line-through text-[clamp(14px,4.27vw,24px)]/[1.2] text-old-price 
              transition-opacity duration-500   ${isPromo ? 'opacity-100' : 'opacity-0'}`}
          >
            {full_price} ₽
          </span>
        </div>
        <h3
          className={`text-[clamp(12px,3.2vw,16px)]/[1.3]  ${!is_best && 'lg:mt-12.5'} `}
        >
          {text}
        </h3>
      </div>
    </label>
  );
};

export default PromoCard;
