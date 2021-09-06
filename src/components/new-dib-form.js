import { registerHtml, useStore } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	const inputValueStore = useStore({dib: '', name: ''})
	// enable the button if the dib and name value have characters
	const isEnabled = (inputValueStore.dib.length > 0 && inputValueStore.name.length > 0) ? '' : 'disabled'

	const updateTextState = (event) => {
		const id = event.target.id
		inputValueStore[id] = event.target.value
	}

	const onSubmit = (event) => {
		event.preventDefault()

		// grab the name and value inputs from the event
		const form = event.target
		const inputName = form.name.value
		const inputDib = form.dib.value
	}

	return html`
		<form class="new-dib-form" onsubmit=${onSubmit}>
			<label for="name">Name</label>
			<input class="name-input" id="name" type="text" placeholder="Your Name" onkeyup=${updateTextState} value=${inputValueStore.name}/>
			<label for="dib">What are you calling?</label>
			<input class="dibs-input" id="dib" type="text" placeholder="Dib" onkeyup=${updateTextState} value=${inputValueStore.dib}/>
			<input class="call-dibs-button" type="submit" value="Call Dib" ${isEnabled} />
		</form>
	`
}