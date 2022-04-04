customElements.define("my-calculator", class extends HTMLElement {

    static get observedAttributes() {
        return ['calc-name', 'calc-input', 'width', 'height', 'margin', 'border-radius'];
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        const myCalcTemplate = document.createElement('template');
        myCalcTemplate.innerHTML = `
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <style>
            .calc-container {
                user-select: none;
                display: inline-block;
                -ms-overflow-style: none;
                /* Hide scrollbar in IE, Edge */
                scrollbar-width: none;
                /* Hide scrollbar in Firefox */
                width: 360px;
                margin: 50px;
                padding: 10px;
                border-radius: 25px;
                border: 15px ridge rgb(165, 165, 165);
                background-image: linear-gradient(0deg, rgb(0, 0, 0), rgb(0, 7, 100));
                box-shadow: 15px 15px 15px 0px rgba(54, 54, 54, 0.6);
            }

            /* Hide scrollbar in Chrome and Safari */
            ::-webkit-scrollbar {
                display: none;
                width: 0px;
            }

            .calc-heading {
                margin-left: 0px;
                margin-right: 0px;
                margin-bottom: -15px;
                margin-top: -25px;
                border-radius: 15px;
                background-image: linear-gradient(45deg, rgba(255, 37, 237, 0.5), rgba(255, 45, 108, 0.5));

            }

            .calc-heading>p {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 10px;
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-size: 25px;
                font-weight: bold;
                color: rgb(214, 214, 214);
            }

            .calc-display {
                color: rgb(235, 235, 235);
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                height: 100px;
                margin: 10px 0px;
                padding: 1px;
                border-radius: 15px;
                background-color: rgb(75, 75, 75);
            }

            #output {
                display: flex;
                justify-content: flex-start;
            }

            #output > input {
                display: inline-block;
                overflow: scroll;
                border: none;
                outline: none;
                line-height: 55px;
                /* To set caret height */
                caret-color: rgb(0, 174, 255);
                margin: 0px 10px;
                font-size: 32px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                background-color: rgb(75, 75, 75);
                color: rgb(235, 235, 235);
            }

            #error-msg {
                margin: 0px 10px;
                overflow: scroll;
                color: rgb(255, 87, 21);
                font-size: 21px;
            }

            .calc-keys {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                align-items: flex-end;
                padding: 0px;
                margin: 10px;
            }

            .calc-keys>div {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 4px 4px;
                width: 70px;
                height: 55px;
                font-size: 25px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                border-radius: 50%;
            }

            .calc-keys>div:hover {
                cursor: pointer;
                box-shadow: 4px 4px 15px rgba(173, 173, 173, 0.6);
            }

            .calc-keys>div:active {
                cursor: pointer;
                border-radius: 15px;
            }

            #equal-key {
                color: rgb(8, 8, 8);
                background-color: rgb(200, 255, 252);
            }

            #equal-key:hover {
                color: rgb(8, 8, 8);
                background-color: rgb(228, 255, 254);
            }

            #reset-key {
                color: rgb(8, 8, 8);
                background-color: rgb(153, 226, 153);
            }

            #reset-key:hover {
                color: rgb(8, 8, 8);
                background-color: rgb(184, 255, 184);
            }

            .blue-keys {
                color: rgb(8, 8, 8);
                background-color: rgb(0, 174, 255);
            }

            .blue-keys:hover {
                color: rgb(8, 8, 8);
                background-color: rgb(124, 213, 255);
            }

            .orange-keys {
                color: rgb(8, 8, 8);
                background-color: rgb(196, 127, 0);
            }

            .orange-keys:hover {
                color: rgb(8, 8, 8);
                background-color: rgb(252, 164, 0);
            }

            .black-keys {
                color: rgb(235, 235, 235);
                background-color: rgb(61, 61, 61);
            }

            .black-keys:hover {
                color: rgb(235, 235, 235);
                background-color: rgb(90, 90, 90);
            }

            .black-keys:active {
                color: rgb(235, 235, 235);
                background-color: rgb(100, 100, 100);
            }
        </style>

        <!---------------------    My Calculator Container   --------------------->
        <div class="calc-container" tabindex="1">

            <!------------------    Heading   ------------------>
            <div class="calc-heading">
                <p>My Calculator</p>
            </div>

            <!------------------    Display   ------------------>
            <div class="calc-display">
                <div id="output">
                    <input type="text" inputmode="none" placeholder="Enter input..." tabindex="1.2">
                </div>
                <div id="error-msg"></div>
            </div>

            <!------------------    Keys   ------------------>
            <div class="calc-keys">
                <!------------------------    Row 1   ------------------------>
                <div id="reset-key" title="All Clear (Reset)" tabindex="2">AC</div>
                <div class="orange-keys" id="inverse-key" title="Inverse (Reciprocal)" tabindex="3">
                    <img src="./resources/images/x-inverse.png" width="35" height="35">
                </div>
                <div class="orange-keys" id="squared-key" title="Squared" tabindex="4">
                    <img src="./resources/images/x-square.png" width="25" height="25">
                </div>
                <div class="orange-keys" id="sqrt-key" title="Square Root" tabindex="5">
                    <img src="./resources/images/sqrt.png" width="40" height="40">
                </div>

                <!------------------------    Row 2   ------------------------>
                <div class="blue-keys" id="parenthesis-key" title="Parenthesis" tabindex="6">
                    <img src="./resources/images/parenthesis.png" width="30" height="30">
                </div>
                <div class="blue-keys" id="factorial-key" title="Factorial ( a! )" tabindex="7">
                    <img src="./resources/images/factorial.png" width="40" height="40">
                </div>
                <div class="blue-keys" id="exponent-key" title="Exponent (x ^ y)" tabindex="8">
                    <img src="./resources/images/x-power-y.png" width="30" height="30">
                </div>
                <div class="blue-keys" id="divide-key" title="Divide (a / b)" tabindex="9">
                    <img src="./resources/images/divide.png" width="30" height="30">
                </div>

                <!------------------------    Row 3   ------------------------>
                <div class="black-keys" id="key-7" tabindex="22">7</div>
                <div class="black-keys" id="key-8" tabindex="23">8</div>
                <div class="black-keys" id="key-9" tabindex="24">9</div>
                <div class="blue-keys" id="multiply-key" title="Multiply (a x b)" tabindex="10">
                    <img src="./resources/images/multiply.png" width="30" height="30">
                </div>

                <!------------------------    Row 4   ------------------------>
                <div class="black-keys" id="key-4" tabindex="19">4</div>
                <div class="black-keys" id="key-5" tabindex="20">5</div>
                <div class="black-keys" id="key-6" tabindex="21">6</div>
                <div class="blue-keys" id="subtract-key" title="Subtract (a - b)" tabindex="11">
                    <img src="./resources/images/subtract.png" width="25" height="25">
                </div>

                <!------------------------    Row 5   ------------------------>
                <div class="black-keys" id="key-1" tabindex="16">1</div>
                <div class="black-keys" id="key-2" tabindex="17">2</div>
                <div class="black-keys" id="key-3" tabindex="18">3</div>
                <div class="blue-keys" id="add-key" title="Add (a + b)" tabindex="12">
                    <img src="./resources/images/add.png" width="25" height="25">
                </div>

                <!------------------------    Row 6   ------------------------>
                <div class="black-keys" id="decimal-point-key" title="Decimal point" tabindex="25">.</div>
                <div class="black-keys" id="key-0" tabindex="15">0</div>
                <div class="black-keys" id="backspace-key" title="Backspace" tabindex="14">
                    <span class="material-icons" style="font-size: 30px;margin-right: 2px">
                        backspace
                    </span>
                </div>
                <div id="equal-key" title="Equals (Calculate)" tabindex="13">
                    <img src="./resources/images/equal.png" width="25" height="25">
                </div>

            </div>
        </div>
        `;

        shadowRoot.appendChild(myCalcTemplate.content.cloneNode(true));
        this.setOnclickForAllKeys(shadowRoot);
        this.getOutputElement(shadowRoot).focus();
    }

    // Whenever <my-calculator> is appended to DOM
    connectedCallback() {
        console.log(`'MyCalculator' custom element added to DOM!`);
    }

    // Whenever <my-calculator> is removed from DOM
    disconnectedCallback() {
        console.log(`'MyCalculator' custom element 'REMOVED' from DOM!`);
    }

    // Whenever <my-calculator> attribute values are changed
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`'${name}' attribute changed from '${oldValue}' to '${newValue}' !`);

        const myCalc = this.shadowRoot.querySelector('.calc-container');
        const property =
            (name === 'width' || name === 'height' || name === 'margin' ||
                name === 'calc-name' || name === 'calc-input') ? name : 'borderRadius';

        if (property === 'calc-name' && newValue.trim() !== '') {
            myCalc.querySelector('.calc-heading > p').textContent = newValue;
        } else if (property === 'calc-input' && /^[\d\.\+\-\x\/\^\!\(\)]+$/.test(newValue)) {
            const inputElem = myCalc.querySelector('#output > input');
            inputElem.value = newValue;
            inputElem.focus();
        } else {
            myCalc.style[property] = newValue;
        }
    }

    setOnclickForAllKeys(shadowRoot) {
        const AC_key = shadowRoot.querySelector('#reset-key');
        const inverse_key = shadowRoot.querySelector('#inverse-key');
        const squared_key = shadowRoot.querySelector('#squared-key');
        const sqrt_key = shadowRoot.querySelector('#sqrt-key');
        const parenthesis_key = shadowRoot.querySelector('#parenthesis-key');
        const exponent_key = shadowRoot.querySelector('#exponent-key');
        const factorial_key = shadowRoot.querySelector('#factorial-key');
        const divide_key = shadowRoot.querySelector('#divide-key');
        const multiply_key = shadowRoot.querySelector('#multiply-key');
        const subtract_key = shadowRoot.querySelector('#subtract-key');
        const add_key = shadowRoot.querySelector('#add-key');
        const backspace_key = shadowRoot.querySelector('#backspace-key');
        const equal_key = shadowRoot.querySelector('#equal-key');
        const decimalPoint_key = shadowRoot.querySelector('#decimal-point-key');
        const outputElem = shadowRoot.querySelector('#output > input');
        const calcKeys = shadowRoot.querySelectorAll('.calc-keys > div');

        let displayText;
        let charToBeInserted;

        outputElem.addEventListener('focus', (event) => {
            const caretPos = this.getCaretPosition(outputElem);
            outputElem.setSelectionRange(caretPos, caretPos);
        });

        calcKeys.forEach(calcKey => {
            calcKey.addEventListener('keydown', event => {
                if (event.key === ' ') {
                    calcKey.click();
                    setTimeout(() => {
                        backspace_key.click();
                        calcKey.focus();
                    }, 1);
                }
            });
        });

        AC_key.addEventListener('click', () => {
            this.resetDisplay(shadowRoot);
            outputElem.value = '';
            outputElem.focus();
        });

        inverse_key.addEventListener('click', () => {
            this.calculateResult(shadowRoot, "**-1");
            outputElem.focus();
        });
        squared_key.addEventListener('click', () => {
            this.calculateResult(shadowRoot, "**2");
            outputElem.focus();
        });
        sqrt_key.addEventListener('click', () => {
            this.calculateResult(shadowRoot, "**0.5");
            outputElem.focus();
        });
        parenthesis_key.addEventListener('click', () => {
            displayText = this.getDisplayTextBeforeCaret(outputElem);
            let openingBracketCount = 0;
            let closingBracketCount = 0;
            const lastChar = displayText.charAt(displayText.length - 1);

            for (const ch of displayText) {
                openingBracketCount += ch === `(` ? 1 : 0;
                closingBracketCount += ch === `)` ? 1 : 0;
            }

            charToBeInserted = (openingBracketCount === closingBracketCount) ? '(' :
                (lastChar === `(` || lastChar === `)`) ? lastChar :
                (/[\d\.\!]/.test(lastChar)) ? ')' : '(';

            this.insertChar(outputElem, charToBeInserted);
        });

        exponent_key.addEventListener('click', () => {
            this.resetDisplay(shadowRoot);
            displayText = this.getDisplayTextBeforeCaret(outputElem);
            charToBeInserted = (displayText === '') ? '' :
                (/[\^\(]$/.test(displayText)) ? '' :
                (/[\-\+\x\/\.]$/.test(displayText)) ? this.replaceOperator(outputElem, '^') : '^';

            this.insertChar(outputElem, charToBeInserted);
        });
        factorial_key.addEventListener('click', () => {
            this.resetDisplay(shadowRoot);
            displayText = this.getDisplayTextBeforeCaret(outputElem);
            charToBeInserted = (displayText === '') ? '' :
                (/[\(]$/.test(displayText)) ? '' :
                (/[\-\+\x\^\/\.]$/.test(displayText)) ? this.replaceOperator(outputElem, '!') : '!';

            this.insertChar(outputElem, charToBeInserted);
        });
        divide_key.addEventListener('click', () => {
            this.resetDisplay(shadowRoot);
            displayText = this.getDisplayTextBeforeCaret(outputElem);
            charToBeInserted = (displayText === '') ? '' :
                (/[\/\(]$/.test(displayText)) ? '' :
                (/[\-\+\x\^]$/.test(displayText)) ? this.replaceOperator(outputElem, '/') : '/';

            this.insertChar(outputElem, charToBeInserted);
        });
        multiply_key.addEventListener('click', () => {
            this.resetDisplay(shadowRoot);
            displayText = this.getDisplayTextBeforeCaret(outputElem);
            charToBeInserted = (displayText === '') ? '' :
                (/[\x\(]$/.test(displayText)) ? '' :
                (/[\-\+\/\^]$/.test(displayText)) ? this.replaceOperator(outputElem, 'x') : 'x';

            this.insertChar(outputElem, charToBeInserted);
        });
        subtract_key.addEventListener('click', () => {
            this.resetDisplay(shadowRoot);
            displayText = this.getDisplayTextBeforeCaret(outputElem);
            charToBeInserted = (/[\-]$/.test(displayText)) ? '' :
                (/[\+\.]$/.test(displayText)) ? this.replaceOperator(outputElem, '-') : '-';

            this.insertChar(outputElem, charToBeInserted);
        });
        add_key.addEventListener('click', () => {
            this.resetDisplay(shadowRoot);
            displayText = this.getDisplayTextBeforeCaret(outputElem);
            charToBeInserted = (displayText === '') ? '' :
                (/[\+\(]$/.test(displayText)) ? '' :
                (/[\-\.\x\/\^]$/.test(displayText)) ? this.replaceOperator(outputElem, '+') : '+';

            this.insertChar(outputElem, charToBeInserted);
        });
        backspace_key.addEventListener('click', () => {
            this.resetDisplay(shadowRoot);
            let caretPos = this.getCaretPosition(outputElem);
            let arr = outputElem.value.split('');
            arr.splice(--caretPos, 1); // Remove the character preceding the caret (caretPos - 1)
            outputElem.value = arr.join('');
            outputElem.setSelectionRange(caretPos, caretPos);
            outputElem.focus();
        });
        decimalPoint_key.addEventListener('click', () => {
            this.resetDisplay(shadowRoot);
            displayText = this.getDisplayTextBeforeCaret(outputElem);
            charToBeInserted = (displayText === '') ? '0.' :
                (/[\.]|(\d+\.\d+)$/.test(displayText)) ? '' : '.';
            this.insertChar(outputElem, charToBeInserted);
        });

        // Setting onclick for numeric keys (0-9)
        for (let i = 0; i < 10; ++i) {
            const key = shadowRoot.querySelector(`#key-${i}`);
            key.addEventListener('click', () => {
                this.resetDisplay(shadowRoot);
                this.insertChar(outputElem, i);
                outputElem.focus();
            });
        }

        equal_key.addEventListener('click', () => {
            this.calculateResult(shadowRoot, "");
            this.getOutputElement(shadowRoot).focus();
        });

        outputElem.addEventListener('keydown', event => {
            const key = event.key;

            // If any of the below conditions are true, allow the key character to be entered in input
            outputElem.disabled = !/(\d|Backspace|Delete|Home|End|ArrowLeft|ArrowRight|Tab)/.test(key);

            const keyToBeClicked =
                (key === '(' || key === ')') ? parenthesis_key :
                (key === '!') ? factorial_key :
                (key === '*') ? multiply_key :
                (key === 'Enter') ? equal_key :
                (key === '=') ? equal_key :
                (key === '.') ? decimalPoint_key :
                (key === '-') ? subtract_key :
                (key === '+') ? add_key :
                (key === '/') ? divide_key :
                (key === '^') ? exponent_key :
                (key === 'Escape') ? AC_key : null;

            if (keyToBeClicked) keyToBeClicked.click();

            // Maintain the 'enabled' and 'focus' state of the input 
            // upon the above restriction after 10 ms
            if (key !== 'Tab') {
                setTimeout(() => {
                    outputElem.disabled = false;
                    outputElem.focus();
                }, 10);
            }

        });
    }

    insertChar(outputElem, char) {
        if (char === 'replaced') return;

        if (char === '') {
            outputElem.focus();
            return;
        }
        let insertionIndex = this.getCaretPosition(outputElem);
        let arr = outputElem.value.split("");
        arr.splice(insertionIndex, 0, char);
        outputElem.value = arr.join("");
        // Set the caret position at 'insertionIndex + 1' (if it's not -1) or else at
        // 'insertionIndex + 2' (if it's -1)
        insertionIndex += (insertionIndex === -1) ? 2 : 1;
        insertionIndex += (char === '0.') ? 1 : 0;
        outputElem.setSelectionRange(insertionIndex, insertionIndex);
        outputElem.focus();
    }

    getCaretPosition(outputElem) {
        if (!outputElem) return;
        return outputElem.selectionStart || outputElem.value.length - 1;
    }

    getDisplayTextBeforeCaret(outputElem) {
        const caretPos = this.getCaretPosition(outputElem);
        return outputElem.value.substring(0, caretPos);
    }

    replaceOperator(outputElem, operator) {
        const caretPos = this.getCaretPosition(outputElem);
        const arr = outputElem.value.split("");
        arr.splice(caretPos - 1, 1, operator);
        outputElem.value = arr.join("");
        outputElem.setSelectionRange(caretPos, caretPos);
        outputElem.focus();
        return 'replaced';
    }

    parseExpression(expression) {
        // Replace '.' with '*('        .(     =>   *(
        // Just after 0-9 add '*'       9(     =>   9*(
        // Just after '!' add '*'       !(     =>   !*(
        // Replace '.' with ')*'        ).     =>   )*
        // Just before 0-9 add '*'      )9     =>   )*9
        // Replace ')(' with ')*('      )(     =>   )*(
        return expression.replaceAll('x', '*').replaceAll('^', '**').replaceAll('.e', 'e')
            .replaceAll(')(', ')*(').replaceAll('0(', '0*(').replaceAll('1(', '1*(')
            .replaceAll('2(', '2*(').replaceAll('3(', '3*(').replaceAll('4(', '4*(')
            .replaceAll('5(', '5*(').replaceAll('6(', '6*(').replaceAll('7(', '7*(')
            .replaceAll('8(', '8*(').replaceAll('9(', '9*(').replaceAll('.(', '*(')
            .replaceAll('!(', '!*(').replaceAll(').', ')*').replaceAll(')0', ')*0')
            .replaceAll(')1', ')*1').replaceAll(')2', ')*2').replaceAll(')3', ')*3')
            .replaceAll(')4', ')*4').replaceAll(')5', ')*5').replaceAll(')6', ')*6')
            .replaceAll(')7', ')*7').replaceAll(')8', ')*8').replaceAll(')9', ')*9');
    }

    calculateResult(shadowRoot, appendOperation) {
        this.resetDisplay(shadowRoot);
        let outputElem = this.getOutputElement(shadowRoot);
        let displayText = outputElem.value;
        if (displayText === "") {
            return;
        }

        displayText = this.parseExpression(displayText);
        displayText += appendOperation;

        let result;
        try {
            if (/^!/.test(displayText)) { // If there's nothing before '!'
                throw "Invalid Input";
            }
            while (/!/.test(displayText)) { // As long as '!' is present
                displayText = this.parseFactorialInput(displayText);
            }
            result = Function('return ' + displayText)();
            if (result === Infinity || result === -Infinity) {
                throw "Value too large";
            } else if (result === true || result === false) {
                // Eg: !0 or !1 or !3 etc. are boolean, but invalid since here '!' is 
                // a 'factorial' operator, not a 'NOT' operator
                throw "Invalid Input";
            } else {
                if (result.toString().length > 14) {
                    if (result > (10 ** 14)) {
                        result = result.toExponential(8);
                    } else if (result > 1) {
                        result = result.toPrecision(14);
                    } else if (result < 1) {
                        result = result.toExponential(8);
                    }
                }
                result = result.toString().replaceAll('e', '.e');
                outputElem.value = result;
            }

        } catch (err) {
            const errMsgElem = this.getErrorMsgElement(shadowRoot);
            const errMsg = (typeof err === 'string') ? err : "Invalid Input";
            outputElem.style.color = 'rgb(255, 87, 21)';
            errMsgElem.textContent = errMsg;
        }
    }

    parseFactorialInput(text) {
        const factorialIndex = text.indexOf('!');
        const nextChar = text.charAt(factorialIndex + 1);
        let prevCharIndex = factorialIndex - 1;
        let prevChar = text.charAt(prevCharIndex);
        let factorialResult = 0;
        let parsedArr = [];

        if (!/[\d\)]/.test(prevChar)) { // If previous character is neither a digit nor ')'
            throw "Invalid Input"; // Eg: (-! or +! or x! or /! or ^! or .!) is invalid
        }

        if (prevChar === ')') { // (8-(4+1))! = 3!
            let innerExpression = ''; // [  ),1,+,4,(,-,8  ]
            let index = prevCharIndex;
            let openingBracketCount = 0;
            let closingBracketCount = 1;

            while (prevChar !== '(' || openingBracketCount !== closingBracketCount) {
                if (index === 0) throw 'Invalid Input';
                innerExpression += text.charAt(index--);
                prevChar = text.charAt(index);
                if (prevChar === ')') closingBracketCount++;
                if (prevChar === '(') openingBracketCount++;
            }
            innerExpression += '(';
            innerExpression = innerExpression.split('').reverse().join('');
            innerExpression = Function('return ' + innerExpression)();
            factorialResult = this.getFactorialOf(innerExpression);
            parsedArr = text.split('');
            parsedArr.splice(index, prevCharIndex - index + 2, factorialResult);
            return parsedArr.join('');
        }

        let number = 0;
        let power = 0;
        while (/\d/.test(prevChar)) { // As long as previous character is a digit
            number += parseInt(text.charAt(prevCharIndex), 10) * (10 ** power++);
            prevChar = text.charAt(--prevCharIndex);
        }
        if (/[\.]/.test(prevChar)) { // Factorial of fractions are invalid
            throw "Invalid Input"; // Eg: (5.03! or .03!) is invalid
        }
        factorialResult = this.getFactorialOf(number);
        parsedArr = text.split("");

        // If char next to '!' is a digit or fraction, multiply it with the factorial
        // (Append * operator to the factorial result)
        if (/[\d\.\(]/.test(nextChar)) {
            factorialResult += '*';
        }

        parsedArr.splice(prevCharIndex + 1, power + 1, factorialResult);
        return parsedArr.join("");
    }

    getFactorialOf(number) {
        if (number === 0) {
            return 1;
        }
        if (number <= 2) {
            return number;
        }
        for (let i = number - 1; i >= 2; --i) {
            number *= i;
            if (number === Infinity) {
                throw "Value too large";
            }
        }
        return number;
    }

    getOutputElement(shadowRoot) {
        return shadowRoot.querySelector('#output > input');
    }

    getErrorMsgElement(shadowRoot) {
        return shadowRoot.querySelector('#error-msg');
    }

    resetDisplay(shadowRoot) {
        const outputElem = this.getOutputElement(shadowRoot);
        const errMsgElem = this.getErrorMsgElement(shadowRoot);
        const errMsg = errMsgElem.textContent;
        if (errMsg === 'Invalid Input' || errMsg === 'Value too large') {
            outputElem.style.color = 'rgb(235, 235, 235)';
            errMsgElem.textContent = '';
        }
    }
});