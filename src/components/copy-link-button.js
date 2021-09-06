import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<div class="copy-link-button">
			<button>Copy Dib Link</button>
		</div>
	`
}
