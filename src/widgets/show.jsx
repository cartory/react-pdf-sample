const divProps = (<div style={{}} />).props

export const Show = ({ when = true, children }) => {
	return when && children != null ? children : null
}
