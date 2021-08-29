import { registerHtml, useEffect } from 'tram-one'
import AppHeader from '../components/app-header'
import NameInput from '../components/name-input';
import DibsInput from '../components/dibs-input';
import CallDibsButton from '../components/call-dibs-button';
import AllDibsButton from '../components/all-dibs-button';

/**
 * The landing page for each new dib page
 */

const html = registerHtml({
	'app-header': AppHeader,
	'name-input': NameInput,
	'dibs-input': DibsInput,
	'call-dibs-button': CallDibsButton,
	'all-dibs-button': AllDibsButton,
})

export default () => {
	return html`
		<main>
			<app-header />
			<name-input />
			<dibs-input />
			<call-dibs-button />
			<all-dibs-button />
		</main>
	`
}
