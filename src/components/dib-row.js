import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<div class="dib-row">
			${children}
		</div>
	`
}