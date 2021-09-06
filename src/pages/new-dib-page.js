import { registerHtml, useEffect } from 'tram-one'
import AppHeader from '../components/app-header'
import NewDibForm from '../components/new-dib-form';
import AllDibsButton from '../components/all-dibs-button';

/**
 * The landing page for each new dib page
 */

const html = registerHtml({
	'app-header': AppHeader,
	'new-dib-form': NewDibForm,
	'all-dibs-button': AllDibsButton,
})

export default () => {
	return html`
		<main>
			<app-header />
			<new-dib-form />
			<all-dibs-button />
		</main>
	`
}
