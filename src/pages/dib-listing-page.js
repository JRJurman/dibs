import { registerHtml, useEffect } from 'tram-one'
import AppHeader from '../components/app-header'
import NoDibsDisplay from '../components/no-dibs-display';
import NewDibButton from '../components/new-dib-button';
import DibDisplay from '../components/dib-display';


/**
 * The landing page for each new dib page
 */

const html = registerHtml({
	'app-header': AppHeader,
	'no-dibs-display': NoDibsDisplay,
	'new-dib-button': NewDibButton,
	'dib-display': DibDisplay,
})

export default () => {
	if (true) {
		return html`
			<main>
				<app-header />
				<new-dib-button />
				<dib-display />
			</main>
		`
	}
	return html`
		<main>
			<app-header />
			<no-dibs-display />
			<new-dib-button />
		</main>
	`
}
