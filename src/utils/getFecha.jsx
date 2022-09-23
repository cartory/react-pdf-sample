export const getMes = {
	0: "Enero",
	1: "Febrero",
	2: "Marzo",
	3: "Abril",
	4: "Mayo",
	5: "Junio",
	6: "Julio",
	7: "Agosto",
	8: "Septiembre",
	9: "Octubre",
	10: "Noviembre",
	11: "Diciembre",
}

export const getFechaLiteral = (fecha = new Date()) => {
	const [day, month, year] = [fecha.getDate(), fecha.getMonth(), fecha.getFullYear()]

	return `${day} de ${getMes[month]} del ${year}`
}
