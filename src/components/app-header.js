import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<h1 class="app-header">
			DIBS
			<span>you called dibs, we have the proof</span>
		</h1>
	`
}
