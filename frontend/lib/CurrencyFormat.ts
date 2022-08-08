export const CurrencyFormat = (number) => {
	return Intl.NumberFormat("es-ES", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 0,
	}).format(number);
};
