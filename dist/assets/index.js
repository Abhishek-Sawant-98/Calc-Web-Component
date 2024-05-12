(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();var q=Object.defineProperty,S=(o,e,a)=>e in o?q(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,E=(o,e,a)=>(S(o,e+"",a),a);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const O=o=>{const e=new CSSStyleSheet;return e.replaceSync(o),[e]},D=o=>{const e=document.createElement("template");return e.innerHTML=o,e.content.cloneNode(!0)};function R(o,e,a={}){this.root=this.attachShadow({mode:"open",...a}),this.root.appendChild(D(o)),this.root.adoptedStyleSheets=O(e)}const T=`<!---------------------    My Calculator Container   --------------------->\r
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
</div>`,I='@import"https://fonts.googleapis.com/icon?family=Material+Icons";.calc-container{-webkit-user-select:none;user-select:none;display:inline-block;-ms-overflow-style:none;scrollbar-width:none;width:360px;margin:50px;padding:10px;border-radius:25px;border:15px ridge rgb(165,165,165);background-image:linear-gradient(0deg,#000,#000764);box-shadow:15px 15px 15px #36363699}::-webkit-scrollbar{display:none;width:0px}.calc-heading{margin:-25px 0 -15px;border-radius:15px;background-image:linear-gradient(45deg,#ff25ed80,#ff2d6c80)}.calc-heading>p{display:flex;justify-content:center;align-items:center;text-align:center;padding:10px;font-family:Georgia,Times New Roman,Times,serif;font-size:25px;font-weight:700;color:#d6d6d6}.calc-display{color:#ebebeb;font-family:Verdana,Geneva,Tahoma,sans-serif;height:100px;margin:10px 0;padding:1px;border-radius:15px;background-color:#4b4b4b}#output{display:flex;justify-content:flex-start}#output>input{display:inline-block;overflow:scroll;border:none;outline:none;line-height:55px;caret-color:#00aeff;margin:0 10px;font-size:32px;font-family:Verdana,Geneva,Tahoma,sans-serif;background-color:#4b4b4b;color:#ebebeb}#error-msg{margin:0 10px;overflow:scroll;color:#ff5715;font-size:21px}.calc-keys{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-end;padding:0;margin:10px}.calc-key{display:flex;justify-content:center;align-items:center;margin:4px;width:70px;height:55px;font-size:25px;font-family:Verdana,Geneva,Tahoma,sans-serif;border-radius:50%}.calc-key:hover{cursor:pointer;box-shadow:4px 4px 15px #adadad99}.calc-key:active{cursor:pointer;border-radius:15px}#equal-key{color:#080808;background-color:#c8fffc}#equal-key:hover{color:#080808;background-color:#e4fffe}#reset-key{color:#080808;background-color:#99e299}#reset-key:hover{color:#080808;background-color:#b8ffb8}#parenthesis-key{font-family:monospace;font-weight:700}#factorial-key{font-family:Georgia,Times New Roman,Times,serif;font-size:35px}.blue-keys{color:#080808;background-color:#00aeff}.blue-keys:hover{color:#080808;background-color:#7cd5ff}.orange-keys{color:#080808;background-color:#c47f00}.orange-keys:hover{color:#080808;background-color:#fca400}.black-keys{color:#ebebeb;background-color:#3d3d3d}.black-keys:hover{color:#ebebeb;background-color:#5a5a5a}.black-keys:active{color:#ebebeb;background-color:#646464}';class h extends HTMLElement{constructor(){super(),R.call(this,T,I),this.setOnclickForAllKeys(),this.getOutputElement().focus()}attributeChangedCallback(e,a,t){const r=this.root.querySelector(".calc-container"),i=e==="width"||e==="height"||e==="margin"||e==="calc-name"||e==="calc-input"?e:"borderRadius",c=r==null?void 0:r.querySelector(".calc-heading > p");if(i==="calc-name"&&(t==null?void 0:t.trim())!==""&&c!=null&&c.textContent)c.textContent=t;else if(i==="calc-input"&&/^[\d\.\+\-\x\/\^\!\(\)]+$/.test(t)){const n=r==null?void 0:r.querySelector("#output > input");if(!(n!=null&&n.value))return;n.value=t,n.focus()}else r!=null&&r.style&&(r.style[i]=t)}setOnclickForAllKeys(){const e=this.root.querySelector("#output > input"),a=this.root.querySelectorAll(".calc-keys")[0];let t,r;const i=l=>{this.resetDisplay(),this.insertChar(e,l),e.focus()},c=()=>{this.resetDisplay(),e.value="",e.focus()},n=()=>{this.calculateResult("**-1"),e.focus()},k=()=>{this.calculateResult("**2"),e.focus()},f=()=>{this.calculateResult("**0.5"),e.focus()},u=()=>{t=this.getDisplayTextBeforeCaret(e);let l=0,s=0;const d=t.charAt(t.length-1);t.forEach(y=>{l+=y==="("?1:0,s+=y===")"?1:0}),r=l===s?"(":d==="("||d===")"?d:/[\d\.\!]/.test(d)?")":"(",this.insertChar(e,r)},p=()=>{this.resetDisplay(),t=this.getDisplayTextBeforeCaret(e),r=t===""||/[\^\(]$/.test(t)?"":/[\-\+\x\/\.]$/.test(t)?this.replaceOperator(e,"^"):"^",this.insertChar(e,r)},b=()=>{this.resetDisplay(),t=this.getDisplayTextBeforeCaret(e),r=t===""||/[\(]$/.test(t)?"":/[\-\+\x\^\/\.]$/.test(t)?this.replaceOperator(e,"!"):"!",this.insertChar(e,r)},g=()=>{this.resetDisplay(),t=this.getDisplayTextBeforeCaret(e),r=t===""||/[\/\(]$/.test(t)?"":/[\-\+\x\^]$/.test(t)?this.replaceOperator(e,"/"):"/",this.insertChar(e,r)},m=()=>{this.resetDisplay(),t=this.getDisplayTextBeforeCaret(e),r=t===""||/[\x\(]$/.test(t)?"":/[\-\+\/\^]$/.test(t)?this.replaceOperator(e,"x"):"x",this.insertChar(e,r)},v=()=>{this.resetDisplay(),t=this.getDisplayTextBeforeCaret(e),r=/[\-]$/.test(t)?"":/[\+\.]$/.test(t)?this.replaceOperator(e,"-"):"-",this.insertChar(e,r)},x=()=>{this.resetDisplay(),t=this.getDisplayTextBeforeCaret(e),r=t===""||/[\+\(]$/.test(t)?"":/[\-\.\x\/\^]$/.test(t)?this.replaceOperator(e,"+"):"+",this.insertChar(e,r)},w=()=>{this.resetDisplay();let l=this.getCaretPosition(e);const s=e.value.split("");s.splice(--l,1),e.value=s.join(""),e.setSelectionRange(l,l),e.focus()},A=()=>{this.calculateResult(""),this.getOutputElement().focus()},C=()=>{this.resetDisplay(),t=this.getDisplayTextBeforeCaret(e),r=t===""?"0.":/[\.]$/.test(t)?"":".",this.insertChar(e,r)};a.addEventListener("click",l=>{var s;switch((s=l==null?void 0:l.target)==null?void 0:s.id){case"reset-key":c();break;case"inverse-key":case"img-inverse-key":n();break;case"squared-key":case"img-squared-key":k();break;case"sqrt-key":case"img-sqrt-key":f();break;case"parenthesis-key":u();break;case"exponent-key":case"img-exponent-key":p();break;case"factorial-key":b();break;case"divide-key":g();break;case"multiply-key":case"img-multiply-key":m();break;case"subtract-key":case"img-subtract-key":v();break;case"add-key":case"img-add-key":x();break;case"backspace-key":case"img-backspace-key":w();break;case"equal-key":A();break;case"decimal-point-key":C();break;case"key-0":i("0");break;case"key-1":i("1");break;case"key-2":i("2");break;case"key-3":i("3");break;case"key-4":i("4");break;case"key-5":i("5");break;case"key-6":i("6");break;case"key-7":i("7");break;case"key-8":i("8");break;case"key-9":i("9");break}}),a.addEventListener("keydown",l=>{var s,d;if((d=(s=l==null?void 0:l.target)==null?void 0:s.className)!=null&&d.includes("calc-key")){const y=l.target;(l==null?void 0:l.key)===" "&&(y.click(),setTimeout(()=>{y.id!=="squared-key"&&y.id!=="img-squared-key"&&this.root.querySelector("#backspace-key").click(),y.focus()},1))}}),e.addEventListener("focus",()=>{const l=this.getCaretPosition(e);e.setSelectionRange(l,l)}),e.addEventListener("keydown",l=>{const{key:s}=l;e.disabled=!/(\d|Backspace|Delete|Home|End|ArrowLeft|ArrowRight|Tab)/.test(s);const d=s==="("||s===")"?"parenthesis-key":s==="!"?"factorial-key":s==="*"?"multiply-key":s==="Enter"||s==="="?"equal-key":s==="."?"decimal-point-key":s==="-"?"subtract-key":s==="+"?"add-key":s==="/"?"divide-key":s==="^"?"exponent-key":s==="Escape"?"reset-key":null;d&&this.root.querySelector(`#${d}`).click(),s!=="Tab"&&setTimeout(()=>{e.disabled=!1,e.focus()},10)})}insertChar(e,a){const t=e,r=t.value.split("");if(a==="replaced")return;if(a===""){t.focus();return}let i=this.getCaretPosition(t);r.splice(i,0,a),t.value=r.join(""),i+=i===-1?2:1,i+=a==="0."?1:0,t.setSelectionRange(i,i),t.focus()}getCaretPosition(e){return e?e.selectionStart||e.value.length-1:0}getDisplayTextBeforeCaret(e){const a=this.getCaretPosition(e);return e.value.substring(0,a)}replaceOperator(e,a){const t=e,r=this.getCaretPosition(t),i=t.value.split("");return i.splice(r-1,1,a),t.value=i.join(""),t.setSelectionRange(r,r),t.focus(),"replaced"}parseExpression(e){return e.replaceAll("x","*").replaceAll("^","**").replaceAll(".e","e").replaceAll(")(",")*(").replaceAll("0(","0*(").replaceAll("1(","1*(").replaceAll("2(","2*(").replaceAll("3(","3*(").replaceAll("4(","4*(").replaceAll("5(","5*(").replaceAll("6(","6*(").replaceAll("7(","7*(").replaceAll("8(","8*(").replaceAll("9(","9*(").replaceAll(".(","*(").replaceAll("!(","!*(").replaceAll(").",")*").replaceAll(")0",")*0").replaceAll(")1",")*1").replaceAll(")2",")*2").replaceAll(")3",")*3").replaceAll(")4",")*4").replaceAll(")5",")*5").replaceAll(")6",")*6").replaceAll(")7",")*7").replaceAll(")8",")*8").replaceAll(")9",")*9")}calculateResult(e){this.resetDisplay();const a=this.getOutputElement();let t=a.value;if(t==="")return;t=this.parseExpression(t),t+=e;let r;try{if(/^!/.test(t))throw"Invalid Input";for(;/!/.test(t);)t=this.parseFactorialInput(t);if(r=Function(`return ${t}`)(),r===1/0||r===-1/0)throw"Value too large";if(r===!0||r===!1)throw"Invalid Input";r.toString().length>14&&(r>10**14?r=r.toExponential(8):r>1?r=r.toPrecision(14):r<1&&(r=r.toExponential(8))),r=r.toString().replaceAll("e",".e"),a.value=r}catch(i){const c=this.getErrorMsgElement(),n=typeof i=="string"?i:"Invalid Input";a.style.color="rgb(255, 87, 21)",c.textContent=n}}parseFactorialInput(e){const a=e.indexOf("!"),t=e.charAt(a+1);let r=a-1,i=e.charAt(r),c=0,n=[];if(!/[\d\)]/.test(i))throw"Invalid Input";if(i===")"){let u="",p=r,b=0,g=1;for(;i!=="("||b!==g;){if(p===0)throw"Invalid Input";u+=e.charAt(p--),i=e.charAt(p),i===")"&&g++,i==="("&&b++}return u+="(",u=u.split("").reverse().join(""),u=new Function(`return ${u}`)(),c=this.getFactorialOf(Number(u)),n=e.split(""),n.splice(p,r-p+2,c.toString()),n.join("")}let k=0,f=0;for(;/\d/.test(i);)k+=parseInt(e.charAt(r),10)*10**f++,i=e.charAt(--r);if(/[\.]/.test(i))throw"Invalid Input";return c=this.getFactorialOf(k),n=e.split(""),/[\d\.\(]/.test(t)&&(c=`${c.toString()}*`),n.splice(r+1,f+1,c.toString()),n.join("")}getFactorialOf(e){let a=e;if(a===0)return 1;if(a<=2)return a;for(let t=a-1;t>=2;--t)if(a*=t,a===1/0)throw"Value too large";return a}getOutputElement(){return this.root.querySelector("#output > input")}getErrorMsgElement(){return this.root.querySelector("#error-msg")}resetDisplay(){const e=this.getOutputElement(),a=this.getErrorMsgElement(),t=a.textContent;(t==="Invalid Input"||t==="Value too large")&&(e.style.color="rgb(235, 235, 235)",a.textContent="")}}E(h,"observedAttributes",["calc-name","calc-input","width","height","margin","border-radius"]);customElements.define("my-calculator",h);
