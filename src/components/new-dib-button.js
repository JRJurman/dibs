import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<a href="/" class="new-dib-button">Call something else</a>
	`
}