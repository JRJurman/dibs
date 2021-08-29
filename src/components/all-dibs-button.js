import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<div class="all-dibs-button">
			<button> View All Calls</button>
		</div>
	`
}
