import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<div class="name-input">
			name
			<div>
				<input placeholder="your name">
			</div>
		</div>
	`
}