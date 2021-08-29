import { registerHtml, useGlobalStore } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<div class="call-dibs-button">
			<button>Call Dibs</button>
		</div>
	`
}
