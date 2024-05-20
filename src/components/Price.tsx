export function Price({ price }: { price: string }) {
  const formattedPrice = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'CLP',
    currencyDisplay: 'narrowSymbol'
  }).format(parseFloat(price))

  return <>{formattedPrice}</>;
}