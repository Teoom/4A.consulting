import PromoTimer from '@/components/PromoTimer';

export default function Home() {
  return (
    <div>
      <div>
        <div className='h-[clamp(74px,22.67vw,103px)]  py-2 text-center bg-(--color-timer-bg) '>
          <p className='text-[clamp(14px,-9.272px+7.2727vw,24px))]/[1.3] font-semibold mb-2 '>
            Успейте открыть пробную неделю
          </p>
          <PromoTimer />
        </div>
      </div>
    </div>
  );
}
