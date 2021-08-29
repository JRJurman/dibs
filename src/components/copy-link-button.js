import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<h1 class="copy-link-button">
			${children}
		</h1>
	`
}
