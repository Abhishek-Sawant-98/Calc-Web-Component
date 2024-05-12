/* eslint-disable import/no-unresolved */
/* eslint-disable no-new-func */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-throw-literal */
/* eslint-disable no-useless-escape */
import { createShadowRoot } from '../../../lib/html.js';
import html from '../fragment/index.html?raw';
import css from '../css/index.css?inline';

class MyCalculator extends HTMLElement {
	constructor() {
		super();
		createShadowRoot.call( this, html, css );
		this.setOnclickForAllKeys();
		this.getOutputElement().focus();
	}

	static observedAttributes = [
		'calc-name',
		'calc-input',
		'width',
		'height',
		'margin',
		'border-radius',
	];

	// Whenever <my-calculator> attribute values are changed
	attributeChangedCallback( name, _, newValue ) {
		const myCalc = this.root.querySelector( '.calc-container' ),
			property = name === 'width'
        || name === 'height'
        || name === 'margin'
        || name === 'calc-name'
        || name === 'calc-input'
				? name
				: 'borderRadius',

			calcHeader = myCalc?.querySelector( '.calc-heading > p' );

		if (
			property === 'calc-name'
        && newValue?.trim() !== ''
        && calcHeader?.textContent
		) {
			calcHeader.textContent = newValue;
		} else if (
			property === 'calc-input'
        && /^[\d\.\+\-\x\/\^\!\(\)]+$/.test( newValue )
		) {
			const inputElem = myCalc?.querySelector(
				'#output > input',
			);

			if ( !inputElem?.value ) return;
			inputElem.value = newValue;
			inputElem.focus();
		} else if ( myCalc?.style ) {
			myCalc.style[ property ] = newValue;
		}
	}

	setOnclickForAllKeys() {
		const outputElem = this.root.querySelector(
				'#output > input',
			),
			calcKeys = this.root.querySelectorAll( '.calc-keys' )[ 0 ];
		let displayText,
			charToBeInserted;

		const onNumericKeyClick = ( n ) => {
				this.resetDisplay();
				this.insertChar( outputElem, n );
				outputElem.focus();
			},

			onResetKeyClick = () => {
				this.resetDisplay();
				outputElem.value = '';
				outputElem.focus();
			},

			onInverseKeyClick = () => {
				this.calculateResult( '**-1' );
				outputElem.focus();
			},

			onSquaredKeyClick = () => {
				this.calculateResult( '**2' );
				outputElem.focus();
			},

			onSqrtKeyClick = () => {
				this.calculateResult( '**0.5' );
				outputElem.focus();
			},

			onParenthesisKeyClick = () => {
				displayText = this.getDisplayTextBeforeCaret( outputElem );
				let openingBracketCount = 0,
					closingBracketCount = 0;
				const lastChar = displayText.charAt( displayText.length - 1 );

				displayText.forEach( ( ch ) => {
					openingBracketCount += ch === '(' ? 1 : 0;
					closingBracketCount += ch === ')' ? 1 : 0;
				} );

				charToBeInserted = openingBracketCount === closingBracketCount
					? '('
					: lastChar === '(' || lastChar === ')'
						? lastChar
						: /[\d\.\!]/.test( lastChar )
							? ')'
							: '(';

				this.insertChar( outputElem, charToBeInserted );
			},

			onExponentKeyClick = () => {
				this.resetDisplay();
				displayText = this.getDisplayTextBeforeCaret( outputElem );
				charToBeInserted = displayText === ''
					? ''
					: /[\^\(]$/.test( displayText )
						? ''
						: /[\-\+\x\/\.]$/.test( displayText )
							? this.replaceOperator( outputElem, '^' )
							: '^';

				this.insertChar( outputElem, charToBeInserted );
			},

			onFactorialKeyClick = () => {
				this.resetDisplay();
				displayText = this.getDisplayTextBeforeCaret( outputElem );
				charToBeInserted = displayText === ''
					? ''
					: /[\(]$/.test( displayText )
						? ''
						: /[\-\+\x\^\/\.]$/.test( displayText )
							? this.replaceOperator( outputElem, '!' )
							: '!';

				this.insertChar( outputElem, charToBeInserted );
			},

			onDivideKeyClick = () => {
				this.resetDisplay();
				displayText = this.getDisplayTextBeforeCaret( outputElem );
				charToBeInserted = displayText === ''
					? ''
					: /[\/\(]$/.test( displayText )
						? ''
						: /[\-\+\x\^]$/.test( displayText )
							? this.replaceOperator( outputElem, '/' )
							: '/';

				this.insertChar( outputElem, charToBeInserted );
			},

			onMultiplyKeyClick = () => {
				this.resetDisplay();
				displayText = this.getDisplayTextBeforeCaret( outputElem );
				charToBeInserted = displayText === ''
					? ''
					: /[\x\(]$/.test( displayText )
						? ''
						: /[\-\+\/\^]$/.test( displayText )
							? this.replaceOperator( outputElem, 'x' )
							: 'x';

				this.insertChar( outputElem, charToBeInserted );
			},

			onSubtractKeyClick = () => {
				this.resetDisplay();
				displayText = this.getDisplayTextBeforeCaret( outputElem );
				charToBeInserted = /[\-]$/.test( displayText )
					? ''
					: /[\+\.]$/.test( displayText )
						? this.replaceOperator( outputElem, '-' )
						: '-';

				this.insertChar( outputElem, charToBeInserted );
			},

			onAddKeyClick = () => {
				this.resetDisplay();
				displayText = this.getDisplayTextBeforeCaret( outputElem );
				charToBeInserted = displayText === ''
					? ''
					: /[\+\(]$/.test( displayText )
						? ''
						: /[\-\.\x\/\^]$/.test( displayText )
							? this.replaceOperator( outputElem, '+' )
							: '+';

				this.insertChar( outputElem, charToBeInserted );
			},

			onBackspaceKeyClick = () => {
				this.resetDisplay();
				let caretPos = this.getCaretPosition( outputElem );
				const arr = outputElem.value.split( '' );
				arr.splice( --caretPos, 1 ); // Remove the character preceding the caret (caretPos - 1)
				outputElem.value = arr.join( '' );
				outputElem.setSelectionRange( caretPos, caretPos );
				outputElem.focus();
			},

			onEqualKeyClick = () => {
				this.calculateResult( '' );
				this.getOutputElement().focus();
			},

			onDecimalPointKeyClick = () => {
				this.resetDisplay();
				displayText = this.getDisplayTextBeforeCaret( outputElem );
				charToBeInserted = displayText === '' ? '0.' : /[\.]$/.test( displayText ) ? '' : '.';
				this.insertChar( outputElem, charToBeInserted );
			};

		// Event delegation (using 'e.target.id' to set event listener to each calc key)
		calcKeys.addEventListener( 'click', ( e ) => {
			switch ( ( e?.target )?.id ) {
				case 'reset-key':
					onResetKeyClick();
					break;

				case 'inverse-key':
				case 'img-inverse-key':
					onInverseKeyClick();
					break;

				case 'squared-key':
				case 'img-squared-key':
					onSquaredKeyClick();
					break;

				case 'sqrt-key':
				case 'img-sqrt-key':
					onSqrtKeyClick();
					break;

				case 'parenthesis-key':
					onParenthesisKeyClick();
					break;

				case 'exponent-key':
				case 'img-exponent-key':
					onExponentKeyClick();
					break;

				case 'factorial-key':
					onFactorialKeyClick();
					break;

				case 'divide-key':
					onDivideKeyClick();
					break;

				case 'multiply-key':
				case 'img-multiply-key':
					onMultiplyKeyClick();
					break;

				case 'subtract-key':
				case 'img-subtract-key':
					onSubtractKeyClick();
					break;

				case 'add-key':
				case 'img-add-key':
					onAddKeyClick();
					break;

				case 'backspace-key':
				case 'img-backspace-key':
					onBackspaceKeyClick();
					break;

				case 'equal-key':
					onEqualKeyClick();
					break;

				case 'decimal-point-key':
					onDecimalPointKeyClick();
					break;

				case 'key-0':
					onNumericKeyClick( '0' );
					break;

				case 'key-1':
					onNumericKeyClick( '1' );
					break;

				case 'key-2':
					onNumericKeyClick( '2' );
					break;

				case 'key-3':
					onNumericKeyClick( '3' );
					break;

				case 'key-4':
					onNumericKeyClick( '4' );
					break;

				case 'key-5':
					onNumericKeyClick( '5' );
					break;

				case 'key-6':
					onNumericKeyClick( '6' );
					break;

				case 'key-7':
					onNumericKeyClick( '7' );
					break;

				case 'key-8':
					onNumericKeyClick( '8' );
					break;

				case 'key-9':
					onNumericKeyClick( '9' );
					break;
				default:
					break;
			}
		} );

		// Event delegation (using 'e.target.className' to set event listener to each calc key)
		calcKeys.addEventListener( 'keydown', ( e ) => {
			if ( ( e?.target )?.className?.includes( 'calc-key' ) ) {
				const calcKey = e.target;
				if ( ( e )?.key === ' ' ) {
					calcKey.click();
					setTimeout( () => {
						if (
							calcKey.id !== 'squared-key'
                && calcKey.id !== 'img-squared-key'
						) {
							(
								this.root.querySelector( '#backspace-key' )
							).click();
						}

						calcKey.focus();
					}, 1 );
				}
			}
		} );

		outputElem.addEventListener( 'focus', () => {
			const caretPos = this.getCaretPosition( outputElem );
			outputElem.setSelectionRange( caretPos, caretPos );
		} );

		outputElem.addEventListener( 'keydown', ( event ) => {
			const { key } = event;

			// If any of the below conditions are true, allow the key character to be entered in input
			outputElem.disabled = !/(\d|Backspace|Delete|Home|End|ArrowLeft|ArrowRight|Tab)/.test( key );

			const keyToBeClicked = key === '(' || key === ')'
				? 'parenthesis-key'
				: key === '!'
					? 'factorial-key'
					: key === '*'
						? 'multiply-key'
						: key === 'Enter'
							? 'equal-key'
							: key === '='
								? 'equal-key'
								: key === '.'
									? 'decimal-point-key'
									: key === '-'
										? 'subtract-key'
										: key === '+'
											? 'add-key'
											: key === '/'
												? 'divide-key'
												: key === '^'
													? 'exponent-key'
													: key === 'Escape'
														? 'reset-key'
														: null;

			if ( keyToBeClicked ) {
				(
					this.root.querySelector( `#${keyToBeClicked}` )
				).click();
			}

			// Maintain the 'enabled' and 'focus' state of the input
			// upon the above restriction after 10 ms
			if ( key !== 'Tab' ) {
				setTimeout( () => {
					outputElem.disabled = false;
					outputElem.focus();
				}, 10 );
			}
		} );
	}

	insertChar( outputElem, char ) {
		const outputEl = outputElem,
			arr = outputEl.value.split( '' );
		if ( char === 'replaced' ) return;

		if ( char === '' ) {
			outputEl.focus();
			return;
		}
		let insertionIndex = this.getCaretPosition( outputEl );
		arr.splice( insertionIndex, 0, char );
		outputEl.value = arr.join( '' );
		// Set the caret position at 'insertionIndex + 1' (if it's not -1) or else at
		// 'insertionIndex + 2' (if it's -1)
		insertionIndex += insertionIndex === -1 ? 2 : 1;
		insertionIndex += char === '0.' ? 1 : 0;
		outputEl.setSelectionRange( insertionIndex, insertionIndex );
		outputEl.focus();
	}

	getCaretPosition( outputElem ) {
		if ( !outputElem ) return 0;
		return outputElem.selectionStart || outputElem.value.length - 1;
	}

	getDisplayTextBeforeCaret( outputElem ) {
		const caretPos = this.getCaretPosition( outputElem );
		return outputElem.value.substring( 0, caretPos );
	}

	replaceOperator( outputElem, operator ) {
		const outputEl = outputElem,
			caretPos = this.getCaretPosition( outputEl ),
			arr = outputEl.value.split( '' );
		arr.splice( caretPos - 1, 1, operator );
		outputEl.value = arr.join( '' );
		outputEl.setSelectionRange( caretPos, caretPos );
		outputEl.focus();
		return 'replaced';
	}

	parseExpression( expression ) {
		// Replace '.' with '*('        .(     =>   *(
		// Just after 0-9 add '*'       9(     =>   9*(
		// Just after '!' add '*'       !(     =>   !*(
		// Replace '.' with ')*'        ).     =>   )*
		// Just before 0-9 add '*'      )9     =>   )*9
		// Replace ')(' with ')*('      )(     =>   )*(
		return expression
			.replaceAll( 'x', '*' )
			.replaceAll( '^', '**' )
			.replaceAll( '.e', 'e' )
			.replaceAll( ')(', ')*(' )
			.replaceAll( '0(', '0*(' )
			.replaceAll( '1(', '1*(' )
			.replaceAll( '2(', '2*(' )
			.replaceAll( '3(', '3*(' )
			.replaceAll( '4(', '4*(' )
			.replaceAll( '5(', '5*(' )
			.replaceAll( '6(', '6*(' )
			.replaceAll( '7(', '7*(' )
			.replaceAll( '8(', '8*(' )
			.replaceAll( '9(', '9*(' )
			.replaceAll( '.(', '*(' )
			.replaceAll( '!(', '!*(' )
			.replaceAll( ').', ')*' )
			.replaceAll( ')0', ')*0' )
			.replaceAll( ')1', ')*1' )
			.replaceAll( ')2', ')*2' )
			.replaceAll( ')3', ')*3' )
			.replaceAll( ')4', ')*4' )
			.replaceAll( ')5', ')*5' )
			.replaceAll( ')6', ')*6' )
			.replaceAll( ')7', ')*7' )
			.replaceAll( ')8', ')*8' )
			.replaceAll( ')9', ')*9' );
	}

	calculateResult( appendOperation ) {
		this.resetDisplay();
		const outputElem = this.getOutputElement();
		let displayText = outputElem.value;
		if ( displayText === '' ) {
			return;
		}

		displayText = this.parseExpression( displayText );
		displayText += appendOperation;

		let result;
		try {
			if ( /^!/.test( displayText ) ) {
				// If there's nothing before '!'
				throw 'Invalid Input';
			}
			while ( /!/.test( displayText ) ) {
				// As long as '!' is present
				displayText = this.parseFactorialInput( displayText );
			}
			result = Function( `return ${displayText}` )();
			if ( result === Infinity || result === -Infinity ) {
				throw 'Value too large';
			} else if ( result === true || result === false ) {
				// Eg: !0 or !1 or !3 etc. are boolean, but invalid since here '!' is
				// a 'factorial' operator, not a 'NOT' operator
				throw 'Invalid Input';
			} else {
				if ( result.toString().length > 14 ) {
					if ( result > 10 ** 14 ) {
						result = result.toExponential( 8 );
					} else if ( result > 1 ) {
						result = result.toPrecision( 14 );
					} else if ( result < 1 ) {
						result = result.toExponential( 8 );
					}
				}
				result = result.toString().replaceAll( 'e', '.e' );
				outputElem.value = result;
			}
		} catch ( err ) {
			const errMsgElem = this.getErrorMsgElement(),
				errMsg = typeof err === 'string' ? err : 'Invalid Input';
			outputElem.style.color = 'rgb(255, 87, 21)';
			errMsgElem.textContent = errMsg;
		}
	}

	parseFactorialInput( text ) {
		const factorialIndex = text.indexOf( '!' ),
			nextChar = text.charAt( factorialIndex + 1 );
		let prevCharIndex = factorialIndex - 1,
			prevChar = text.charAt( prevCharIndex ),
			factorialResult = 0,
			parsedArr = [];

		if ( !/[\d\)]/.test( prevChar ) ) {
			// If previous character is neither a digit nor ')'
			throw 'Invalid Input'; // Eg: (-! or +! or x! or /! or ^! or .!) is invalid
		}

		if ( prevChar === ')' ) {
			// (8-(4+1))! = 3!
			let innerExpression = '', // [  ),1,+,4,(,-,8  ]
				index = prevCharIndex,
				openingBracketCount = 0,
				closingBracketCount = 1;

			while (
				prevChar !== '('
          || openingBracketCount !== closingBracketCount
			) {
				if ( index === 0 ) throw 'Invalid Input';
				innerExpression += text.charAt( index-- );
				prevChar = text.charAt( index );
				if ( prevChar === ')' ) closingBracketCount++;
				if ( prevChar === '(' ) openingBracketCount++;
			}
			innerExpression += '(';
			innerExpression = innerExpression.split( '' ).reverse().join( '' );
			innerExpression = new Function( `return ${innerExpression}` )();
			factorialResult = this.getFactorialOf( Number( innerExpression ) );
			parsedArr = text.split( '' );
			parsedArr.splice(
				index,
				prevCharIndex - index + 2,
				factorialResult.toString(),
			);
			return parsedArr.join( '' );
		}

		let number = 0,
			power = 0;
		while ( /\d/.test( prevChar ) ) {
			// As long as previous character is a digit
			number += parseInt( text.charAt( prevCharIndex ), 10 ) * 10 ** power++;
			prevChar = text.charAt( --prevCharIndex );
		}
		if ( /[\.]/.test( prevChar ) ) {
			// Factorial of fractions are invalid
			throw 'Invalid Input'; // Eg: (5.03! or .03!) is invalid
		}
		factorialResult = this.getFactorialOf( number );
		parsedArr = text.split( '' );

		// If char next to '!' is a digit or fraction, multiply it with the factorial
		// (Append * operator to the factorial result)
		if ( /[\d\.\(]/.test( nextChar ) ) {
			factorialResult = `${factorialResult.toString()}*`;
		}

		parsedArr.splice(
			prevCharIndex + 1,
			power + 1,
			factorialResult.toString(),
		);
		return parsedArr.join( '' );
	}

	getFactorialOf( num ) {
		let tempNum = num;
		if ( tempNum === 0 ) {
			return 1;
		}
		if ( tempNum <= 2 ) {
			return tempNum;
		}
		for ( let i = tempNum - 1; i >= 2; --i ) {
			tempNum *= i;
			if ( tempNum === Infinity ) {
				throw 'Value too large';
			}
		}
		return tempNum;
	}

	getOutputElement() {
		return this.root.querySelector( '#output > input' );
	}

	getErrorMsgElement() {
		return this.root.querySelector( '#error-msg' );
	}

	resetDisplay() {
		const outputElem = this.getOutputElement(),
			errMsgElem = this.getErrorMsgElement(),
			errMsg = errMsgElem.textContent;
		if ( errMsg === 'Invalid Input' || errMsg === 'Value too large' ) {
			outputElem.style.color = 'rgb(235, 235, 235)';
			errMsgElem.textContent = '';
		}
	}
}

customElements.define( 'my-calculator', MyCalculator );
