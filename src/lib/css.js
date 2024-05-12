/**
 * Creates a stylesheet to be imported to the component
 * @param {string} css CSS string
 * @returns {Array} Array of CSS Object Model
 */
export const createSheet = ( css ) => {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync( css );
	return [ sheet ];
};
