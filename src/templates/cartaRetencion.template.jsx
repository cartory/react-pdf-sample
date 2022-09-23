import { Page, View, Document, StyleSheet, Text } from "@react-pdf/renderer"

import { Show } from "../widgets/show"
import { LineText, MarkedText } from "../widgets/LineText"

import { CartaSchema, PersonaSchema } from "./carta.schema"
import { getFechaLiteral } from "../utils/getFecha"
import { DestinatarioCarta } from "./destinatario.template"

const styles = StyleSheet.create({
	body: {
		fontSize: 11,
		width: "100%",
		height: "100%",
		position: "relative",
		paddingVertical: "10%",
		paddingHorizontal: "15%",
	},
})

const getImporteContra = (personas = [PersonaSchema]) => {
	const { nombres, importes } = personas
		.map((persona, index) => {
			const { importe, nombre } = persona

			const nombres = (
				<Text key={index}>
					<MarkedText>{nombre}</MarkedText>
					{", "}
				</Text>
			)

			const importes = (
				<Text key={index}>
					<MarkedText>
						{importe.moneda} {importe.monto}
					</MarkedText>
					{", "}
				</Text>
			)

			return { nombres, importes }
		})
		.reduce((prev, curr) => {
			return {
				nombres: [prev.nombres, curr.nombres],
				importes: [prev.importes, curr.importes],
			}
		})

	return (
		<>
			por el importe de {importes} contra {nombres}
			<Show when={personas.length > 1}>respectivamente</Show>
		</>
	)
}

export const CartaRetencion = ({ carta = CartaSchema }) => {
	const { destinatario, codigoCite, codTramite, circular, importe, proceso, seguidoPor } = carta
	const fechaLiteral = getFechaLiteral(importe.fecha)

	return (
		<Document>
			<Page>
				<View style={styles.body}>
					<LineText>
						<LineText>
							<LineText>Santa Cruz, {fechaLiteral}</LineText>
							<LineText>
								CITE: <MarkedText>{codigoCite}</MarkedText>
							</LineText>
						</LineText>
					</LineText>
					<View>
						<DestinatarioCarta destinatario={destinatario} />
					</View>
					<View>
						<LineText style={{ textTransform: "uppercase", textAlign: "center" }}>
							REF.-{" "}
							<Show when={codTramite != null}>
								<LineText>
									trámite <MarkedText>{carta.codTramite}</MarkedText>
								</LineText>
							</Show>
							<LineText>
								<MarkedText>RETENCION</MarkedText> DE FONDOS
							</LineText>
						</LineText>
						<LineText>
							<LineText>De nuestra consideración.</LineText>
						</LineText>
						<LineText style={{ textAlign: "justify" }}>
							Dando cumplimiento a la carta circular{" "}
							<Show when={circular != null}>
								<MarkedText>{circular.tipo}</MarkedText>{" "}
							</Show>
							<MarkedText>{circular.codigo}</MarkedText>, de fecha <MarkedText>{fechaLiteral}</MarkedText>, del Proceso <MarkedText>{proceso.tipo}</MarkedText> mediante <MarkedText>{proceso.medio}</MarkedText>
							{", "}
							seguido por <MarkedText>{seguidoPor.nombre}</MarkedText>, {getImporteContra(seguidoPor.personas)}
						</LineText>
					</View>
				</View>
			</Page>
		</Document>
	)
}
