export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-IT", {
    style: "currency",
    currency: "EUR",
  }).format(number / 100);
};
