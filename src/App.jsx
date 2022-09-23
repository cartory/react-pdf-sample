import { useState, useEffect } from "react"

import { useForm } from "react-hook-form"
import { PDFViewer, StyleSheet } from "@react-pdf/renderer"

import { CartaRetencion } from "./templates/cartaRetencion.template"

const debounce = (fn, milliSeconds = 0) => {
	let timeout
	return function () {
		var context = this
		var args = arguments

		clearTimeout(timeout)
		timeout = setTimeout(() => {
			fn.apply(context, args)
		}, milliSeconds)
	}
}

const defaultCarta = <CartaRetencion />

const awaitPdf = (data) => {
	return new Promise((resolve, reject) => {
		try {
			resolve(<CartaRetencion {...data} />)
		} catch (error) {
			reject(<strong>error</strong>)
		}
	})
}

function App() {
	return (
		<>
			<div
				style={{
					width: "100%",
					height: "100vh",
					display: "flex",
				}}
			>
				<PDFViewer width="100%">
					<CartaRetencion />
				</PDFViewer>
			</div>
		</>
	)
}

export default App
