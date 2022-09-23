import { View, Text } from "@react-pdf/renderer"
import { MarkedText } from "../widgets/LineText"
import { ProcesoSchema, PersonaSchema } from "../templates/data.template"

export const CuerpoCarta = ({ persona = PersonaSchema }) => {
	const { nombre, ciONit } = persona

	if (!persona.cuentas?.length && true) {
		return (
			<View>
				<Text>
					- <MarkedText>{nombre}</MarkedText>
				</Text>
				<MarkedText>{ciONit}</MarkedText>
			</View>
		)
	}

	return <View></View>
}
