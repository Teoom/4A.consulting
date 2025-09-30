'use client';

import { useEffect, useState } from 'react';
import { PromoContext } from '@/hooks/usePromo';

const PromoProvider = ({
  children,
  initialSeconds = 120
}: {
  children: React.ReactNode;
  initialSeconds?: number;
}) => {
  const [timer, setTimer] = useState(initialSeconds);
  const [isPromoActive, setIsPromoActive] = useState(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setIsPromoActive(false);
          clearInterval(timerId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <PromoContext.Provider
      value={{ promoTimerSeconds: timer, isPromoActive }}
    >
      {children}
    </PromoContext.Provider>
  );
};

export default PromoProvider;
