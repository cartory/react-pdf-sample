import { DestinatarioSchema } from "./carta.schema"

import { Show } from "../widgets/show"
import { LineText, MarkedText } from "../widgets/LineText"

export const DestinatarioCarta = ({ destinatario = DestinatarioSchema }) => {
	const { nombre, nurej, cargos, ubicación } = destinatario

	return (
		<LineText>
			<LineText>Señor(a):</LineText>
			<LineText>
				<MarkedText>{nombre}</MarkedText>
			</LineText>
			{cargos.map((cargo, index) => (
				<LineText key={index}>
					<MarkedText>{cargo}</MarkedText>
				</LineText>
			))}
			<Show when={!isNaN(nurej) && nurej != 0}>
				<LineText>Nurej: {nurej}</LineText>
			</Show>
			<LineText style={{ textDecoration: "underline" }}>
				<MarkedText>{ubicación}</MarkedText>
			</LineText>
		</LineText>
	)
}
