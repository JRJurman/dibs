import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start, useEffect, useUrlParams } from 'tram-one'
import NewDibPage from './pages/new-dib-page'
import DibResultPage from './pages/dib-result-page'
import DibListingPage from './pages/dib-listing-page'
import './styles.css'

/**
 * The entry point of the app, and where we mount the app on the DOM.
 * Read more about it here: https://tram-one.io/#components
 */

const url = window.location.hostname
const html = registerHtml({
	'new-dib-page': NewDibPage,
	'dib-result-page': DibResultPage,
	'dib-listing-page': DibListingPage,
})

const home = () => {
	useEffect(() => {
		console.log('Thanks for using Tram-One!')
	})
  if (useUrlParams('/dib-result').matches) return html`<dib-result-page />`
  if (useUrlParams('/dib-listing').matches) return html`<dib-listing-page />`
  return html`<new-dib-page />`
}

// start the app on a div with id="app"
start(home, '#app')
