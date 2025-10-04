import { createContext, useContext } from 'react';

interface IPromoContext {
  promoTimerSeconds: number;
  isPromoActive: boolean;
  setPromoActive: (value: boolean) => void;
}

export const PromoContext = createContext<
  IPromoContext | undefined
>(undefined);

export const usePromo = () => {
  const contex = useContext(PromoContext);

  if (!contex) throw new Error('PromoContext undefined');

  return contex;
};
