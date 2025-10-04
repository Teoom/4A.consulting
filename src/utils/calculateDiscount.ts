export const calcaluteDiscount = (
  full_price: number,
  newPrice: number
) => {
  const discount = Math.round(
    ((full_price - newPrice) / full_price) * 100
  );

  return discount;
};
