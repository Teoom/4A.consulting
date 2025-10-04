'use client';

import { useState, useCallback } from 'react';
import { PromoContext } from '@/hooks/usePromo';

const PromoProvider = ({
  children,
  initialSeconds = 120
}: {
  children: React.ReactNode;
  initialSeconds?: number;
}) => {
  const [isPromoActive, setIsPromoActive] = useState(true);

  const setPromoActive = useCallback(
    (value: boolean) => setIsPromoActive(value),
    []
  );

  const contextValue = {
    isPromoActive,
    promoTimerSeconds: initialSeconds,
    setPromoActive
  };

  return (
    <PromoContext.Provider value={contextValue}>
      {children}
    </PromoContext.Provider>
  );
};

export default PromoProvider;
