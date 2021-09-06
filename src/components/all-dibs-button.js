import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<a href="/dib-listing" class="all-dibs-button">View All Calls</a>
	`
}
