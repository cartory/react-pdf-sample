import { Document, Page, View, Text } from "@react-pdf/renderer"

import { styles } from "./templateStyles"
import { getFechaLiteral } from "../utils/getFecha"
import { LineText, MarkedText } from "../widgets/LineText"

export const CartaBloqueoAduana = ({
	//
	codigoCite = "codigoCite",
	departamento = "departamento",
	cargoFuncionario = "cargoFuncionario",
	nombreFuncionario = "nombreFuncionario",
	codigoCircular = "codigoCircular",
	codigoNotaProceso = "codigoNotaProceso",
	importeDemanda = "importeDemanda",
	personaDemanda = "personaDemanda",
	personaCedula = "personaCedula",
	usuarioTopaz = "usuarioTopaz",
}) => {
	const fechaCircular = getFechaLiteral()
	const sendToTexts = [nombreFuncionario, cargoFuncionario]

	return (
		<Document title="cartaBloqueoAduana">
			<Page>
				<View style={styles.body}>
					<View>
						<LineText>
							<LineText>Santa Cruz, {fechaCircular}</LineText>
							<LineText>
								CITE: <MarkedText>{codigoCite}</MarkedText>
							</LineText>
							<LineText />
						</LineText>
						<LineText>
							<LineText>Señor(a):</LineText>
							{sendToTexts.map((text, index) => (
								<LineText key={index}>
									<MarkedText>{text}</MarkedText>
								</LineText>
							))}
							<LineText>Aduana Nacional</LineText>
							<LineText style={{ textDecoration: "underline" }}>
								<MarkedText>{departamento}</MarkedText>
							</LineText>
						</LineText>
					</View>
					<View>
						<LineText style={{ textTransform: "uppercase", textAlign: "center" }}>
							ref.- <Text style={{ textDecoration: "underline", backgroundColor: "yellow" }}>retención de fondos</Text>
							<LineText />
						</LineText>
						<LineText style={{ textAlign: "justify" }}>
							<LineText>
								De nuestra consideración.
								<LineText />
							</LineText>
							Dando cumplimiento a la carta circular <MarkedText>{codigoCircular}</MarkedText> de fecha <MarkedText>{fechaCircular}</MarkedText>, dentro del Proceso de Ejecución Tributaria informada mediante la <MarkedText>NOTA {codigoNotaProceso}</MarkedText> por el importe demandado de <MarkedText>{importeDemanda}</MarkedText> seguido por la <MarkedText>Gerencia Regional Potosi</MarkedText> de la Aduana Nacional contra <MarkedText>{personaDemanda}</MarkedText>, al respecto nos corresponde informar lo siguiente:
							<LineText />
						</LineText>
						<LineText>
							<Text>Es/son cliente(s)</Text>de nuestra Institución
						</LineText>
					</View>
					<View
						style={{
							flexDirection: "row",
							paddingVertical: 11,
							paddingHorizontal: "10%",
							justifyContent: "space-between",
						}}
					>
						<MarkedText>- {personaDemanda}</MarkedText>
						<MarkedText>C.I. {personaCedula}</MarkedText>
					</View>
					<View>
						<LineText>
							Asimismo, informamos que solo se procedió al bloqueo de la cuenta quedando solo habilitada para depósitos del cliente mencionado, la misma no cuenta con saldo para realizar la retención del monto ordenado.
							<LineText />
						</LineText>
						<LineText>
							Con este particular esperando haber cumplido con su requerimiento, saludamos a usted atentamente.
							<LineText />
						</LineText>
						<Text style={{ textAlign: "justify" }}>
							<Text style={{ textAlign: "center" }}>BANCO GANADERO S.A.</Text>
						</Text>
					</View>
					<View
						style={{
							left: "20%",
							color: "grey",
							bottom: "10%",
							position: "absolute",
						}}
					>
						<LineText>
							<MarkedText>{usuarioTopaz}</MarkedText>
						</LineText>
						<LineText>c.c. Archivo</LineText>
					</View>
				</View>
			</Page>
		</Document>
	)
}
