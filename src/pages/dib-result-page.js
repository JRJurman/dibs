import { registerHtml, useEffect } from 'tram-one'
import AppHeader from '../components/app-header'
import DibDisplay from '../components/dib-display';
import NewDibButton from '../components/new-dib-button';
import CopyLinkButton from '../components/copy-link-button';
import AllDibsButton from '../components/all-dibs-button';

/**
 * The results for a dib
 */

const html = registerHtml({
	'app-header': AppHeader,
	'dib-display': DibDisplay,
	'new-dib-button': NewDibButton,
	'copy-link-button': CopyLinkButton,
	'all-dibs-button': AllDibsButton,
})

export default () => {
	return html`
		<main>
			<app-header />
			<dib-display />
			<copy-link-button />
			<new-dib-button />
			<all-dibs-button />
		</main>
	`
}
