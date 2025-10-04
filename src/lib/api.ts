export interface IPromoOfffer {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
}

export const getPromoOffers = async (): Promise<
  IPromoOfffer[]
> => {
  const res = await fetch(
    'https://t-core.fit-hub.pro/Test/GetTariffs'
  );
  const data = await res.json();

  return data;
};
