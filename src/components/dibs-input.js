import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<div class="dibs-input">
			What are you calling?
			<div>
				<input placeholder="Dib">
			</div>
		</div>
	`
}