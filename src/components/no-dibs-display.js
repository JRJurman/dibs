import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<span class="no-dibs-display">
			Couldn't find any calls
		</span>
	`
}