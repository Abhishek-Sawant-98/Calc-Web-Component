var E=Object.defineProperty;var S=(o,e,a)=>e in o?E(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a;var b=(o,e,a)=>(S(o,typeof e!="symbol"?e+"":e,a),a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const I=o=>{const e=new CSSStyleSheet;return e.replaceSync(o),[e]},D=o=>{const e=document.createElement("template");return e.innerHTML=o,e.content.cloneNode(!0)};function T(o,e,a={}){this.root=this.attachShadow({mode:"open",...a}),this.root.appendChild(D(o)),this.root.adoptedStyleSheets=I(e)}const R=`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">\r
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
</div>`,O=".calc-container{-webkit-user-select:none;user-select:none;display:inline-block;-ms-overflow-style:none;scrollbar-width:none;width:360px;margin:50px;padding:10px;border-radius:25px;border:15px ridge rgb(165,165,165);background-image:linear-gradient(0deg,#000,#000764);box-shadow:15px 15px 15px #36363699}::-webkit-scrollbar{display:none;width:0px}.calc-heading{margin:-25px 0 -15px;border-radius:15px;background-image:linear-gradient(45deg,#ff25ed80,#ff2d6c80)}.calc-heading>p{display:flex;justify-content:center;align-items:center;text-align:center;padding:10px;font-family:Georgia,Times New Roman,Times,serif;font-size:25px;font-weight:700;color:#d6d6d6}.calc-display{color:#ebebeb;font-family:Verdana,Geneva,Tahoma,sans-serif;height:100px;margin:10px 0;padding:1px;border-radius:15px;background-color:#4b4b4b}#output{display:flex;justify-content:flex-start}#output>input{display:inline-block;overflow:scroll;border:none;outline:none;line-height:55px;caret-color:#00aeff;margin:0 10px;font-size:32px;font-family:Verdana,Geneva,Tahoma,sans-serif;background-color:#4b4b4b;color:#ebebeb}#error-msg{margin:0 10px;overflow:scroll;color:#ff5715;font-size:21px}.calc-keys{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-end;padding:0;margin:10px}.calc-key{display:flex;justify-content:center;align-items:center;margin:4px;width:70px;height:55px;font-size:25px;font-family:Verdana,Geneva,Tahoma,sans-serif;border-radius:50%}.calc-key:hover{cursor:pointer;box-shadow:4px 4px 15px #adadad99}.calc-key:active{cursor:pointer;border-radius:15px}#equal-key{color:#080808;background-color:#c8fffc}#equal-key:hover{color:#080808;background-color:#e4fffe}#reset-key{color:#080808;background-color:#99e299}#reset-key:hover{color:#080808;background-color:#b8ffb8}#parenthesis-key{font-family:monospace;font-weight:700}#factorial-key{font-family:Georgia,Times New Roman,Times,serif;font-size:35px}.blue-keys{color:#080808;background-color:#00aeff}.blue-keys:hover{color:#080808;background-color:#7cd5ff}.orange-keys{color:#080808;background-color:#c47f00}.orange-keys:hover{color:#080808;background-color:#fca400}.black-keys{color:#ebebeb;background-color:#3d3d3d}.black-keys:hover{color:#ebebeb;background-color:#5a5a5a}.black-keys:active{color:#ebebeb;background-color:#646464}";class x extends HTMLElement{constructor(){super(),T.call(this,R,O),this.setOnclickForAllKeys(),this.getOutputElement().focus()}attributeChangedCallback(e,a,r){const t=this.root.querySelector(".calc-container"),i=e==="width"||e==="height"||e==="margin"||e==="calc-name"||e==="calc-input"?e:"borderRadius",n=t==null?void 0:t.querySelector(".calc-heading > p");if(i==="calc-name"&&(r==null?void 0:r.trim())!==""&&(n!=null&&n.textContent))n.textContent=r;else if(i==="calc-input"&&/^[\d\.\+\-\x\/\^\!\(\)]+$/.test(r)){const c=t==null?void 0:t.querySelector("#output > input");if(!(c!=null&&c.value))return;c.value=r,c.focus()}else t!=null&&t.style&&(t.style[i]=r)}setOnclickForAllKeys(){const e=this.root.querySelector("#output > input"),a=this.root.querySelectorAll(".calc-keys")[0];let r,t;const i=l=>{this.resetDisplay(),this.insertChar(e,l),e.focus()},n=()=>{this.resetDisplay(),e.value="",e.focus()},c=()=>{this.calculateResult("**-1"),e.focus()},u=()=>{this.calculateResult("**2"),e.focus()},f=()=>{this.calculateResult("**0.5"),e.focus()},y=()=>{r=this.getDisplayTextBeforeCaret(e);let l=0,s=0;const d=r.charAt(r.length-1);r.forEach(k=>{l+=k==="("?1:0,s+=k===")"?1:0}),t=l===s?"(":d==="("||d===")"?d:/[\d\.\!]/.test(d)?")":"(",this.insertChar(e,t)},p=()=>{this.resetDisplay(),r=this.getDisplayTextBeforeCaret(e),t=r===""||/[\^\(]$/.test(r)?"":/[\-\+\x\/\.]$/.test(r)?this.replaceOperator(e,"^"):"^",this.insertChar(e,t)},h=()=>{this.resetDisplay(),r=this.getDisplayTextBeforeCaret(e),t=r===""||/[\(]$/.test(r)?"":/[\-\+\x\^\/\.]$/.test(r)?this.replaceOperator(e,"!"):"!",this.insertChar(e,t)},g=()=>{this.resetDisplay(),r=this.getDisplayTextBeforeCaret(e),t=r===""||/[\/\(]$/.test(r)?"":/[\-\+\x\^]$/.test(r)?this.replaceOperator(e,"/"):"/",this.insertChar(e,t)},v=()=>{this.resetDisplay(),r=this.getDisplayTextBeforeCaret(e),t=r===""||/[\x\(]$/.test(r)?"":/[\-\+\/\^]$/.test(r)?this.replaceOperator(e,"x"):"x",this.insertChar(e,t)},m=()=>{this.resetDisplay(),r=this.getDisplayTextBeforeCaret(e),t=/[\-]$/.test(r)?"":/[\+\.]$/.test(r)?this.replaceOperator(e,"-"):"-",this.insertChar(e,t)},C=()=>{this.resetDisplay(),r=this.getDisplayTextBeforeCaret(e),t=r===""||/[\+\(]$/.test(r)?"":/[\-\.\x\/\^]$/.test(r)?this.replaceOperator(e,"+"):"+",this.insertChar(e,t)},A=()=>{this.resetDisplay();let l=this.getCaretPosition(e);const s=e.value.split("");s.splice(--l,1),e.value=s.join(""),e.setSelectionRange(l,l),e.focus()},w=()=>{this.calculateResult(""),this.getOutputElement().focus()},q=()=>{this.resetDisplay(),r=this.getDisplayTextBeforeCaret(e),t=r===""?"0.":/[\.]$/.test(r)?"":".",this.insertChar(e,t)};a.addEventListener("click",l=>{var s;switch((s=l==null?void 0:l.target)==null?void 0:s.id){case"reset-key":n();break;case"inverse-key":case"img-inverse-key":c();break;case"squared-key":case"img-squared-key":u();break;case"sqrt-key":case"img-sqrt-key":f();break;case"parenthesis-key":y();break;case"exponent-key":case"img-exponent-key":p();break;case"factorial-key":h();break;case"divide-key":g();break;case"multiply-key":case"img-multiply-key":v();break;case"subtract-key":case"img-subtract-key":m();break;case"add-key":case"img-add-key":C();break;case"backspace-key":case"img-backspace-key":A();break;case"equal-key":w();break;case"decimal-point-key":q();break;case"key-0":i("0");break;case"key-1":i("1");break;case"key-2":i("2");break;case"key-3":i("3");break;case"key-4":i("4");break;case"key-5":i("5");break;case"key-6":i("6");break;case"key-7":i("7");break;case"key-8":i("8");break;case"key-9":i("9");break}}),a.addEventListener("keydown",l=>{var s,d;if((d=(s=l==null?void 0:l.target)==null?void 0:s.className)!=null&&d.includes("calc-key")){const k=l.target;(l==null?void 0:l.key)===" "&&(k.click(),setTimeout(()=>{k.id!=="squared-key"&&k.id!=="img-squared-key"&&this.root.querySelector("#backspace-key").click(),k.focus()},1))}}),e.addEventListener("focus",()=>{const l=this.getCaretPosition(e);e.setSelectionRange(l,l)}),e.addEventListener("keydown",l=>{const{key:s}=l;e.disabled=!/(\d|Backspace|Delete|Home|End|ArrowLeft|ArrowRight|Tab)/.test(s);const d=s==="("||s===")"?"parenthesis-key":s==="!"?"factorial-key":s==="*"?"multiply-key":s==="Enter"||s==="="?"equal-key":s==="."?"decimal-point-key":s==="-"?"subtract-key":s==="+"?"add-key":s==="/"?"divide-key":s==="^"?"exponent-key":s==="Escape"?"reset-key":null;d&&this.root.querySelector(`#${d}`).click(),s!=="Tab"&&setTimeout(()=>{e.disabled=!1,e.focus()},10)})}insertChar(e,a){const r=e,t=r.value.split("");if(a==="replaced")return;if(a===""){r.focus();return}let i=this.getCaretPosition(r);t.splice(i,0,a),r.value=t.join(""),i+=i===-1?2:1,i+=a==="0."?1:0,r.setSelectionRange(i,i),r.focus()}getCaretPosition(e){return e?e.selectionStart||e.value.length-1:0}getDisplayTextBeforeCaret(e){const a=this.getCaretPosition(e);return e.value.substring(0,a)}replaceOperator(e,a){const r=e,t=this.getCaretPosition(r),i=r.value.split("");return i.splice(t-1,1,a),r.value=i.join(""),r.setSelectionRange(t,t),r.focus(),"replaced"}parseExpression(e){return e.replaceAll("x","*").replaceAll("^","**").replaceAll(".e","e").replaceAll(")(",")*(").replaceAll("0(","0*(").replaceAll("1(","1*(").replaceAll("2(","2*(").replaceAll("3(","3*(").replaceAll("4(","4*(").replaceAll("5(","5*(").replaceAll("6(","6*(").replaceAll("7(","7*(").replaceAll("8(","8*(").replaceAll("9(","9*(").replaceAll(".(","*(").replaceAll("!(","!*(").replaceAll(").",")*").replaceAll(")0",")*0").replaceAll(")1",")*1").replaceAll(")2",")*2").replaceAll(")3",")*3").replaceAll(")4",")*4").replaceAll(")5",")*5").replaceAll(")6",")*6").replaceAll(")7",")*7").replaceAll(")8",")*8").replaceAll(")9",")*9")}calculateResult(e){this.resetDisplay();const a=this.getOutputElement();let r=a.value;if(r==="")return;r=this.parseExpression(r),r+=e;let t;try{if(/^!/.test(r))throw"Invalid Input";for(;/!/.test(r);)r=this.parseFactorialInput(r);if(t=Function(`return ${r}`)(),t===1/0||t===-1/0)throw"Value too large";if(t===!0||t===!1)throw"Invalid Input";t.toString().length>14&&(t>10**14?t=t.toExponential(8):t>1?t=t.toPrecision(14):t<1&&(t=t.toExponential(8))),t=t.toString().replaceAll("e",".e"),a.value=t}catch(i){const n=this.getErrorMsgElement(),c=typeof i=="string"?i:"Invalid Input";a.style.color="rgb(255, 87, 21)",n.textContent=c}}parseFactorialInput(e){const a=e.indexOf("!"),r=e.charAt(a+1);let t=a-1,i=e.charAt(t),n=0,c=[];if(!/[\d\)]/.test(i))throw"Invalid Input";if(i===")"){let y="",p=t,h=0,g=1;for(;i!=="("||h!==g;){if(p===0)throw"Invalid Input";y+=e.charAt(p--),i=e.charAt(p),i===")"&&g++,i==="("&&h++}return y+="(",y=y.split("").reverse().join(""),y=new Function(`return ${y}`)(),n=this.getFactorialOf(Number(y)),c=e.split(""),c.splice(p,t-p+2,n.toString()),c.join("")}let u=0,f=0;for(;/\d/.test(i);)u+=parseInt(e.charAt(t),10)*10**f++,i=e.charAt(--t);if(/[\.]/.test(i))throw"Invalid Input";return n=this.getFactorialOf(u),c=e.split(""),/[\d\.\(]/.test(r)&&(n=`${n.toString()}*`),c.splice(t+1,f+1,n.toString()),c.join("")}getFactorialOf(e){let a=e;if(a===0)return 1;if(a<=2)return a;for(let r=a-1;r>=2;--r)if(a*=r,a===1/0)throw"Value too large";return a}getOutputElement(){return this.root.querySelector("#output > input")}getErrorMsgElement(){return this.root.querySelector("#error-msg")}resetDisplay(){const e=this.getOutputElement(),a=this.getErrorMsgElement(),r=a.textContent;(r==="Invalid Input"||r==="Value too large")&&(e.style.color="rgb(235, 235, 235)",a.textContent="")}}b(x,"observedAttributes",["calc-name","calc-input","width","height","margin","border-radius"]);customElements.define("my-calculator",x);
