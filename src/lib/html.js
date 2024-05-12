import { createSheet } from './css.js';

/**
 * Creates a template element for use in the ShadowDOM
 * @param {string} html HTML string
 * @returns {HTMLTemplateElement} Template to be used
 */
export const createTemplate = ( html ) => {
	const template = document.createElement( 'template' );
	template.innerHTML = html;
	return template.content.cloneNode( true );
};

/**
 * Creates a shadow root (expected to be executed with `.call()` method)
 * @param {string} html HTML string for the template
 * @param {string} css CSS string for the stylesheet
 * @param {object} [config] Additional configuration for the shadow root
 */
export function createShadowRoot( html, css, config = {} ) {
	this.root = this.attachShadow( { mode: 'open', ...config } );
	this.root.appendChild( createTemplate( html ) );
	this.root.adoptedStyleSheets = createSheet( css );
}

/**
 * Queries elements and returns an array instead of a node list
 * @param {string} selector Query selector string to be retrieved
 * @returns {Array} Array of elements
 */
export function querySelectorArray( selector ) {
	return Array.from(
		this.root.querySelectorAll( selector ),
	);
}
