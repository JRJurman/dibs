import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start, useEffect } from 'tram-one'
import AppHeader from './app-header'
import './styles.css'

/**
 * The entry point of the app, and where we mount the app on the DOM.
 * Read more about it here: https://tram-one.io/#components
 */

const html = registerHtml({
	'app-header': AppHeader,
})

const home = () => {
	useEffect(() => {
		console.log('Thanks for using Tram-One!')
	})
	return html`
		<main>
			<app-header />
		</main>
	`
}

// start the app on a div with id="app"
start(home, '#app')
