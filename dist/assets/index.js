const V = Object.defineProperty,
	ee = ( o, l, e ) => ( l in o ? V( o, l, {
		enumerable: !0, configurable: !0, writable: !0, value: e,
	} ) : o[ l ] = e ),
	F = ( o, l, e ) => ( ee( o, typeof l !== 'symbol' ? `${l}` : l, e ), e ),
	te = ( o, l, e ) => { if ( !l.has( o ) ) throw TypeError( `Cannot ${e}` ); },
	p = ( o, l, e ) => { if ( l.has( o ) ) throw TypeError( 'Cannot add the same private member more than once' ); l instanceof WeakSet ? l.add( o ) : l.set( o, e ); },
	r = ( o, l, e ) => ( te( o, l, 'access private method' ), e ); ( function () {
	const l = document.createElement( 'link' ).relList; if ( l && l.supports && l.supports( 'modulepreload' ) ) return; for ( const t of document.querySelectorAll( 'link[rel="modulepreload"]' ) )s( t ); new MutationObserver( ( t ) => { for ( const i of t ) if ( i.type === 'childList' ) for ( const a of i.addedNodes )a.tagName === 'LINK' && a.rel === 'modulepreload' && s( a ); } ).observe( document, { childList: !0, subtree: !0 } ); /**
																																																																																																																																																																																																																																																																																																																																																																																																																																																	 *
																																																																																																																																																																																																																																																																																																																																																																																																																																																	 * @param t
																																																																																																																																																																																																																																																																																																																																																																																																																																																	 */
	function e( t ) { const i = {}; return t.integrity && ( i.integrity = t.integrity ), t.referrerPolicy && ( i.referrerPolicy = t.referrerPolicy ), t.crossOrigin === 'use-credentials' ? i.credentials = 'include' : t.crossOrigin === 'anonymous' ? i.credentials = 'omit' : i.credentials = 'same-origin', i; }/**
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff *
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff * @param t
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
																																																																																																																																																																																																																																																																																																																	 * @param t
																																																																																																																																																																																																																																																																																																																	 */
	function s( t ) { if ( t.ep ) return; t.ep = !0; const i = e( t ); fetch( t.href, i ); }
}() ); const ie = ( o ) => { const l = new CSSStyleSheet(); return l.replaceSync( o ), [ l ]; },
	re = ( o ) => { const l = document.createElement( 'template' ); return l.innerHTML = o, l.content.cloneNode( !0 ); }; /**
																																																																																																																							 *
																																																																																																																							 * @param o
																																																																																																																							 * @param l
																																																																																																																							 * @param e
																																																																																																																							 */
function ae( o, l, e = {} ) { this.root = this.attachShadow( { mode: 'open', ...e } ), this.root.appendChild( re( o ) ), this.root.adoptedStyleSheets = ie( l ); } const se = `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">\r
\r
<!---------------------    My Calculator Container   --------------------->\r
<div class="calc-container" tabindex="1">\r
\r
    <!------------------    Heading   ------------------>\r
    <div class="calc-heading">\r
        <p>My Calculator</p>\r
    </div>\r
\r
    <!------------------    Display   ------------------>\r
    <div class="calc-display">\r
        <div id="output">\r
            <input type="text" inputmode="none" placeholder="Enter input..." tabindex="1.2">\r
        </div>\r
        <div id="error-msg"></div>\r
    </div>\r
\r
    <!------------------    Keys   ------------------>\r
    <div class="calc-keys">\r
        <!------------------------    Row 1   ------------------------>\r
        <div id="reset-key" class="calc-key" title="All Clear (Reset)" tabindex="2">AC</div>\r
        <div class="calc-key orange-keys" id="inverse-key" title="Inverse (Reciprocal)" tabindex="3">\r
            <img id="img-inverse-key" src="./resources/images/x-inverse.png" alt="x-inverse-key" width="35" height="35">\r
        </div>\r
        <div class="calc-key orange-keys" id="squared-key" title="Squared" tabindex="4">\r
            <img id="img-squared-key" src="./resources/images/x-square.png" alt="x-squared-key" width="25" height="25">\r
        </div>\r
        <div class="calc-key orange-keys" id="sqrt-key" title="Square Root" tabindex="5">\r
            <img id="img-sqrt-key" src="./resources/images/sqrt.png" alt="sqrt-key" width="40" height="40">\r
        </div>\r
\r
        <!------------------------    Row 2   ------------------------>\r
        <div class="calc-key blue-keys" id="parenthesis-key" title="Parenthesis" tabindex="6">\r
            ()\r
        </div>\r
        <div class="calc-key blue-keys" id="factorial-key" title="Factorial ( a! )" tabindex="7">\r
            !\r
        </div>\r
        <div class="calc-key blue-keys" id="exponent-key" title="Exponent (x ^ y)" tabindex="8">\r
            <img id="img-exponent-key" src="./resources/images/x-power-y.png" alt="exponent-key" width="30" height="30">\r
        </div>\r
        <div class="calc-key blue-keys" style="font-size:42px;font-family:monospace" id="divide-key"\r
            title="Divide (a / b)" tabindex="9">\r
            &divide;\r
        </div>\r
\r
        <!------------------------    Row 3   ------------------------>\r
        <div class="calc-key black-keys" id="key-7" tabindex="22">7</div>\r
        <div class="calc-key black-keys" id="key-8" tabindex="23">8</div>\r
        <div class="calc-key black-keys" id="key-9" tabindex="24">9</div>\r
        <div class="calc-key blue-keys" id="multiply-key" title="Multiply (a x b)" tabindex="10">\r
            <i id="img-multiply-key" class="material-icons" style="font-size:32px;">close</i>\r
        </div>\r
\r
        <!------------------------    Row 4   ------------------------>\r
        <div class="calc-key black-keys" id="key-4" tabindex="19">4</div>\r
        <div class="calc-key black-keys" id="key-5" tabindex="20">5</div>\r
        <div class="calc-key black-keys" id="key-6" tabindex="21">6</div>\r
        <div class="calc-key blue-keys" id="subtract-key" title="Subtract (a - b)" tabindex="11">\r
            <i id="img-subtract-key" class="material-icons" style="font-size:35px;">remove</i>\r
        </div>\r
\r
        <!------------------------    Row 5   ------------------------>\r
        <div class="calc-key black-keys" id="key-1" tabindex="16">1</div>\r
        <div class="calc-key black-keys" id="key-2" tabindex="17">2</div>\r
        <div class="calc-key black-keys" id="key-3" tabindex="18">3</div>\r
        <div class="calc-key blue-keys" id="add-key" title="Add (a + b)" tabindex="12">\r
            <i id="img-add-key" class="material-icons" style="font-size:35px;">add</i>\r
        </div>\r
\r
        <!------------------------    Row 6   ------------------------>\r
        <div class="calc-key black-keys" id="decimal-point-key" title="Decimal point" tabindex="25">.</div>\r
        <div class="calc-key black-keys" id="key-0" tabindex="15">0</div>\r
        <div class="calc-key black-keys" id="backspace-key" title="Backspace" tabindex="14">\r
            <i id="img-backspace-key" class="material-icons" style="font-size: 30px;margin-right: 2px">\r
                backspace\r
            </i>\r
        </div>\r
        <div id="equal-key" class="calc-key" style="font-size:41px;font-family:monospace" title="Equals (Calculate)"\r
            tabindex="13">\r
            =\r
        </div>\r
\r
    </div>\r
</div>`,
	le = '.calc-container{-webkit-user-select:none;user-select:none;display:inline-block;-ms-overflow-style:none;scrollbar-width:none;width:360px;margin:50px;padding:10px;border-radius:25px;border:15px ridge rgb(165,165,165);background-image:linear-gradient(0deg,#000,#000764);box-shadow:15px 15px 15px #36363699}::-webkit-scrollbar{display:none;width:0px}.calc-heading{margin:-25px 0 -15px;border-radius:15px;background-image:linear-gradient(45deg,#ff25ed80,#ff2d6c80)}.calc-heading>p{display:flex;justify-content:center;align-items:center;text-align:center;padding:10px;font-family:Georgia,Times New Roman,Times,serif;font-size:25px;font-weight:700;color:#d6d6d6}.calc-display{color:#ebebeb;font-family:Verdana,Geneva,Tahoma,sans-serif;height:100px;margin:10px 0;padding:1px;border-radius:15px;background-color:#4b4b4b}#output{display:flex;justify-content:flex-start}#output>input{display:inline-block;overflow:scroll;border:none;outline:none;line-height:55px;caret-color:#00aeff;margin:0 10px;font-size:32px;font-family:Verdana,Geneva,Tahoma,sans-serif;background-color:#4b4b4b;color:#fff;width:100%}#error-msg{margin:0 10px;overflow:scroll;color:#ff5715;font-size:21px}.calc-keys{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-end;padding:0;margin:10px}.calc-key{display:flex;justify-content:center;align-items:center;margin:4px;width:70px;height:55px;font-size:25px;font-family:Verdana,Geneva,Tahoma,sans-serif;border-radius:50%}.calc-key:hover{cursor:pointer;box-shadow:4px 4px 15px #adadad99}.calc-key:active{cursor:pointer;border-radius:15px}#equal-key{color:#080808;background-color:#c8fffc}#equal-key:hover{color:#080808;background-color:#e4fffe}#reset-key{color:#080808;background-color:#99e299}#reset-key:hover{color:#080808;background-color:#b8ffb8}#parenthesis-key{font-family:monospace;font-weight:700}#factorial-key{font-family:Georgia,Times New Roman,Times,serif;font-size:35px}.blue-keys{color:#080808;background-color:#00aeff}.blue-keys:hover{color:#080808;background-color:#7cd5ff}.orange-keys{color:#080808;background-color:#c47f00}.orange-keys:hover{color:#080808;background-color:#fca400}.black-keys{color:#ebebeb;background-color:#3d3d3d}.black-keys:hover{color:#ebebeb;background-color:#5a5a5a}.black-keys:active{color:#ebebeb;background-color:#646464}'; let O,
	H,
	f,
	g,
	w,
	I,
	h,
	x,
	m,
	q,
	j,
	_,
	S,
	R,
	B,
	J,
	T,
	N,
	E,
	K,
	$,
	D,
	k,
	u; class G extends HTMLElement {
	constructor() { super(); p( this, O ); p( this, f ); p( this, w ); p( this, h ); p( this, m ); p( this, j ); p( this, S ); p( this, B ); p( this, T ); p( this, E ); p( this, $ ); p( this, k ); ae.call( this, se, le ), r( this, O, H ).call( this ), r( this, E, K ).call( this ).focus(); }

	attributeChangedCallback( e, s, t ) {
		const i = this.root.querySelector( '.calc-container' ),
			a = e === 'width' || e === 'height' || e === 'margin' || e === 'calc-name' || e === 'calc-input' ? e : 'borderRadius',
			y = i == null ? void 0 : i.querySelector( '.calc-heading > p' ); if ( a === 'calc-name' && ( t == null ? void 0 : t.trim() ) !== '' && ( y != null && y.textContent ) )y.textContent = t; else if ( a === 'calc-input' && /^[\d\.\+\-\x\/\^\!\(\)]+$/.test( t ) ) { const d = i == null ? void 0 : i.querySelector( '#output > input' ); if ( !( d != null && d.value ) ) return; d.value = t, d.focus(); } else i != null && i.style && ( i.style[ a ] = t );
	}
}O = new WeakSet(), H = function () {
	const e = this.root.querySelector( '#output > input' ),
		s = this.root.querySelectorAll( '.calc-keys' )[ 0 ]; let t,
		i; const a = ( c ) => { r( this, k, u ).call( this ), r( this, f, g ).call( this, e, c ), e.focus(); },
		y = () => { r( this, k, u ).call( this ), e.value = '', e.focus(); },
		d = () => { r( this, S, R ).call( this, '**-1' ), e.focus(); },
		M = () => { r( this, S, R ).call( this, '**2' ), e.focus(); },
		P = () => { r( this, S, R ).call( this, '**0.5' ), e.focus(); },
		v = () => {
			t = r( this, h, x ).call( this, e ); let c = 0,
				n = 0; const b = t.charAt( t.length - 1 ); t.forEach( ( C ) => { c += C === '(' ? 1 : 0, n += C === ')' ? 1 : 0; } ), i = c === n ? '(' : b === '(' || b === ')' ? b : /[\d\.\!]/.test( b ) ? ')' : '(', r( this, f, g ).call( this, e, i );
		},
		A = () => { r( this, k, u ).call( this ), t = r( this, h, x ).call( this, e ), i = t === '' || /[\^\(]$/.test( t ) ? '' : /[\-\+\x\/\.]$/.test( t ) ? r( this, m, q ).call( this, e, '^' ) : '^', r( this, f, g ).call( this, e, i ); },
		L = () => { r( this, k, u ).call( this ), t = r( this, h, x ).call( this, e ), i = t === '' || /[\(]$/.test( t ) ? '' : /[\-\+\x\^\/\.]$/.test( t ) ? r( this, m, q ).call( this, e, '!' ) : '!', r( this, f, g ).call( this, e, i ); },
		z = () => { r( this, k, u ).call( this ), t = r( this, h, x ).call( this, e ), i = t === '' || /[\/\(]$/.test( t ) ? '' : /[\-\+\x\^]$/.test( t ) ? r( this, m, q ).call( this, e, '/' ) : '/', r( this, f, g ).call( this, e, i ); },
		Q = () => { r( this, k, u ).call( this ), t = r( this, h, x ).call( this, e ), i = t === '' || /[\x\(]$/.test( t ) ? '' : /[\-\+\/\^]$/.test( t ) ? r( this, m, q ).call( this, e, 'x' ) : 'x', r( this, f, g ).call( this, e, i ); },
		U = () => { r( this, k, u ).call( this ), t = r( this, h, x ).call( this, e ), i = /[\-]$/.test( t ) ? '' : /[\+\.]$/.test( t ) ? r( this, m, q ).call( this, e, '-' ) : '-', r( this, f, g ).call( this, e, i ); },
		W = () => { r( this, k, u ).call( this ), t = r( this, h, x ).call( this, e ), i = t === '' || /[\+\(]$/.test( t ) ? '' : /[\-\.\x\/\^]$/.test( t ) ? r( this, m, q ).call( this, e, '+' ) : '+', r( this, f, g ).call( this, e, i ); },
		X = () => { r( this, k, u ).call( this ); let c = r( this, w, I ).call( this, e ); const n = e.value.split( '' ); n.splice( --c, 1 ), e.value = n.join( '' ), e.setSelectionRange( c, c ), e.focus(); },
		Y = () => { r( this, S, R ).call( this, '' ), r( this, E, K ).call( this ).focus(); },
		Z = () => { r( this, k, u ).call( this ), t = r( this, h, x ).call( this, e ), i = t === '' ? '0.' : /[\.]$/.test( t ) ? '' : '.', r( this, f, g ).call( this, e, i ); }; s.addEventListener( 'click', ( c ) => { let n; switch ( ( n = c == null ? void 0 : c.target ) == null ? void 0 : n.id ) { case 'reset-key': y(); break; case 'inverse-key': case 'img-inverse-key': d(); break; case 'squared-key': case 'img-squared-key': M(); break; case 'sqrt-key': case 'img-sqrt-key': P(); break; case 'parenthesis-key': v(); break; case 'exponent-key': case 'img-exponent-key': A(); break; case 'factorial-key': L(); break; case 'divide-key': z(); break; case 'multiply-key': case 'img-multiply-key': Q(); break; case 'subtract-key': case 'img-subtract-key': U(); break; case 'add-key': case 'img-add-key': W(); break; case 'backspace-key': case 'img-backspace-key': X(); break; case 'equal-key': Y(); break; case 'decimal-point-key': Z(); break; case 'key-0': a( '0' ); break; case 'key-1': a( '1' ); break; case 'key-2': a( '2' ); break; case 'key-3': a( '3' ); break; case 'key-4': a( '4' ); break; case 'key-5': a( '5' ); break; case 'key-6': a( '6' ); break; case 'key-7': a( '7' ); break; case 'key-8': a( '8' ); break; case 'key-9': a( '9' ); break; } } ), s.addEventListener( 'keydown', ( c ) => {
		let n,
			b; if ( ( b = ( n = c == null ? void 0 : c.target ) == null ? void 0 : n.className ) != null && b.includes( 'calc-key' ) ) { const C = c.target; ( c == null ? void 0 : c.key ) === ' ' && ( C.click(), setTimeout( () => { C.id !== 'squared-key' && C.id !== 'img-squared-key' && this.root.querySelector( '#backspace-key' ).click(), C.focus(); }, 1 ) ); }
	} ), e.addEventListener( 'focus', () => { const c = r( this, w, I ).call( this, e ); e.setSelectionRange( c, c ); } ), e.addEventListener( 'keydown', ( c ) => { const { key: n } = c; e.disabled = !/(\d|Backspace|Delete|Home|End|ArrowLeft|ArrowRight|Tab)/.test( n ); const b = n === '(' || n === ')' ? 'parenthesis-key' : n === '!' ? 'factorial-key' : n === '*' ? 'multiply-key' : n === 'Enter' || n === '=' ? 'equal-key' : n === '.' ? 'decimal-point-key' : n === '-' ? 'subtract-key' : n === '+' ? 'add-key' : n === '/' ? 'divide-key' : n === '^' ? 'exponent-key' : n === 'Escape' ? 'reset-key' : null; b && this.root.querySelector( `#${b}` ).click(), n !== 'Tab' && setTimeout( () => { e.disabled = !1, e.focus(); }, 10 ); } );
}, f = new WeakSet(), g = function ( e, s ) {
	const t = e,
		i = t.value.split( '' ); if ( s === 'replaced' ) return; if ( s === '' ) { t.focus(); return; } let a = r( this, w, I ).call( this, t ); i.splice( a, 0, s ), t.value = i.join( '' ), a += a === -1 ? 2 : 1, a += s === '0.' ? 1 : 0, t.setSelectionRange( a, a ), t.focus();
}, w = new WeakSet(), I = function ( e ) { return e ? e.selectionStart || e.value.length - 1 : 0; }, h = new WeakSet(), x = function ( e ) { const s = r( this, w, I ).call( this, e ); return e.value.substring( 0, s ); }, m = new WeakSet(), q = function ( e, s ) {
	const t = e,
		i = r( this, w, I ).call( this, t ),
		a = t.value.split( '' ); return a.splice( i - 1, 1, s ), t.value = a.join( '' ), t.setSelectionRange( i, i ), t.focus(), 'replaced';
}, j = new WeakSet(), _ = function ( e ) {
	return e.replaceAll( 'x', '*' ).replaceAll( '^', '**' ).replaceAll( '.e', 'e' ).replaceAll( ')(', ')*(' )
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
}, S = new WeakSet(), R = function ( e ) {
	r( this, k, u ).call( this ); const s = r( this, E, K ).call( this ); let t = s.value; if ( t === '' ) return; t = r( this, j, _ ).call( this, t ), t += e; let i; try { if ( /^!/.test( t ) ) throw 'Invalid Input'; for ( ;/!/.test( t ); )t = r( this, B, J ).call( this, t ); if ( i = Function( `return ${t}` )(), i === 1 / 0 || i === -1 / 0 ) throw 'Value too large'; if ( i === !0 || i === !1 ) throw 'Invalid Input'; i.toString().length > 14 && ( i > 10 ** 14 ? i = i.toExponential( 8 ) : i > 1 ? i = i.toPrecision( 14 ) : i < 1 && ( i = i.toExponential( 8 ) ) ), i = i.toString().replaceAll( 'e', '.e' ), s.value = i; } catch ( a ) {
		const y = r( this, $, D ).call( this ),
			d = typeof a === 'string' ? a : 'Invalid Input'; s.style.color = 'rgb(255, 87, 21)', y.textContent = d;
	}
}, B = new WeakSet(), J = function ( e ) {
	const s = e.indexOf( '!' ),
		t = e.charAt( s + 1 ); let i = s - 1,
		a = e.charAt( i ),
		y = 0,
		d = []; if ( !/[\d\)]/.test( a ) ) throw 'Invalid Input'; if ( a === ')' ) {
		let v = '',
			A = i,
			L = 0,
			z = 1; for ( ;a !== '(' || L !== z; ) { if ( A === 0 ) throw 'Invalid Input'; v += e.charAt( A-- ), a = e.charAt( A ), a === ')' && z++, a === '(' && L++; } return v += '(', v = v.split( '' ).reverse().join( '' ), v = new Function( `return ${v}` )(), y = r( this, T, N ).call( this, Number( v ) ), d = e.split( '' ), d.splice( A, i - A + 2, y.toString() ), d.join( '' );
	} let M = 0,
		P = 0; for ( ;/\d/.test( a ); )M += parseInt( e.charAt( i ), 10 ) * 10 ** P++, a = e.charAt( --i ); if ( /[\.]/.test( a ) ) throw 'Invalid Input'; return y = r( this, T, N ).call( this, M ), d = e.split( '' ), /[\d\.\(]/.test( t ) && ( y = `${y.toString()}*` ), d.splice( i + 1, P + 1, y.toString() ), d.join( '' );
}, T = new WeakSet(), N = function ( e ) { let s = e; if ( s === 0 ) return 1; if ( s <= 2 ) return s; for ( let t = s - 1; t >= 2; --t ) if ( s *= t, s === 1 / 0 ) throw 'Value too large'; return s; }, E = new WeakSet(), K = function () { return this.root.querySelector( '#output > input' ); }, $ = new WeakSet(), D = function () { return this.root.querySelector( '#error-msg' ); }, k = new WeakSet(), u = function () {
	const e = r( this, E, K ).call( this ),
		s = r( this, $, D ).call( this ),
		t = s.textContent; ( t === 'Invalid Input' || t === 'Value too large' ) && ( e.style.color = 'rgb(235, 235, 235)', s.textContent = '' );
}, F( G, 'observedAttributes', [ 'calc-name', 'calc-input', 'width', 'height', 'margin', 'border-radius' ] ); customElements.define( 'my-calculator', G );
