import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<section class="dib-display">
			This is a placeholder for a dib result
		</section>
	`
}
