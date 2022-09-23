import { Text } from "@react-pdf/renderer"

const textProps = Text.prototype?.props

export const LineText = (props = textProps) => {
	return (
		<Text>
			<Text {...props} />
			{"\n"}
		</Text>
	)
}

export const MarkedText = (props = textProps) => {
	return <Text {...props} style={{ backgroundColor: "yellow" }} />
}
