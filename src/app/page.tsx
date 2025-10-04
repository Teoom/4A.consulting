import PromoTimer from '@/components/PromoTimer';
import Image from 'next/image';

import { getPromoOffers } from '@/lib/api';
import PromoForm from '@/components/PromoForm';

export default async function Home() {
  const data = await getPromoOffers();

  return (
    <div>
      <div>
        <div className='h-[clamp(74px,22.67vw,103px)]  py-2 text-center bg-(--color-timer-bg) '>
          <p className='text-[clamp(14px,-9.272px+7.2727vw,24px))]/[1.3] font-semibold mb-2 '>
            Успейте открыть пробную неделю
          </p>
          <PromoTimer />
        </div>
        <main className='pt-[clamp(20px,5.33vw,50px)] max-w-[1248px] m-auto px-4'>
          <section>
            <h1 className='text-[clamp(22px,6.4vw,40px)]/[1.1] font-bold tracking-[0.5px] md:mb-27 sm:mb-5 xs:mb-6'>
              Выбери подходящий для себя{' '}
              <span className='text-(--color-accent)'>
                тариф
              </span>
            </h1>
            <div className='flex lg:gap-[87px] items-center lg:flex-row flex-col sm:flex-col '>
              <div
                className='w-[clamp(99px,100vw-251px,380px)] h-[clamp(200px,100vw-125px,767px)] relative
                after:content-[""] after:w-full after:h-[20%]  after:absolute after:bottom-0 after:block 
                after:bg-linear-to-t after:from-(--color-gradient)  after:to-transparent flex-shrink-0'
              >
                <Image
                  src='/pumped_man.png'
                  alt='Здоровый красивый мужчина'
                  fill
                />
              </div>
              <div>
                <PromoForm data={data} fieldName='promo' />
              </div>
            </div>
            <div className='mt-[clamp(22px,6.4vw,64px)] lg:rounded-[30px] rounded-[20px] border border-(--gray-700) p-3 lg:p-5 '>
              <div
                className='max-w-115.25 w-full border border-additional rounded-[30px] text-additional text-[clamp(16px,4.8vw,28px)]/[1.2]
               text-center pt-2.5 lg:pt-4 pb-3 lg:pb-4.5'
              >
                гарантия возврата 30 дней
              </div>
              <p className='mt-2.5 lg:mt-7.5 text-garant-text leading-[1.3] lg:text-[24px] sm:text-[14px] xs:text-[13px]'>
                Мы уверены, что наш план сработает для тебя
                и ты увидишь видимые результаты уже через 4
                недели! Мы даже готовы полностью вернуть
                твои деньги в течение 30 дней с момента
                покупки, если ты не получишь видимых
                результатов.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
