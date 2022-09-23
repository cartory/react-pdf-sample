import { Text } from "@react-pdf/renderer"

import { Show } from "../widgets/show"
import { ProcesoSchema, PersonaSchema } from "./data.template"

export const TextoCarta = ({ proceso = ProcesoSchema, persona = PersonaSchema }) => {
	const { nombre, ciONit } = persona
	const { tipo, mediante, codigos } = proceso

	return <Text>Dando Cumplimiento a la carta circular {/*  */}</Text>
}
