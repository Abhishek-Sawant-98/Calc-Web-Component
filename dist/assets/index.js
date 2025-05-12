var G=Object.defineProperty;var K=d=>{throw TypeError(d)};var H=(d,n,e)=>n in d?G(d,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[n]=e;var T=(d,n,e)=>H(d,typeof n!="symbol"?n+"":n,e),_=(d,n,e)=>n.has(d)||K("Cannot "+e);var $=(d,n,e)=>n.has(d)?K("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(d):n.set(d,e);var a=(d,n,e)=>(_(d,n,"access private method"),e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const J=d=>{const n=new CSSStyleSheet;return n.replaceSync(d),[n]},Q=d=>{const n=document.createElement("template");return n.innerHTML=d,n.content.cloneNode(!0)};function U(d,n,e={}){this.root=this.attachShadow({mode:"open",...e}),this.root.appendChild(Q(d)),this.root.adoptedStyleSheets=J(n)}const W=`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">\r
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
</div>`,X=".calc-container{-webkit-user-select:none;user-select:none;display:inline-block;-ms-overflow-style:none;scrollbar-width:none;width:360px;margin:50px;padding:10px;border-radius:25px;border:15px ridge rgb(165,165,165);background-image:linear-gradient(0deg,#000,#000764);box-shadow:15px 15px 15px #36363699}::-webkit-scrollbar{display:none;width:0px}.calc-heading{margin:-25px 0 -15px;border-radius:15px;background-image:linear-gradient(45deg,#ff25ed80,#ff2d6c80)}.calc-heading>p{display:flex;justify-content:center;align-items:center;text-align:center;padding:10px;font-family:Georgia,Times New Roman,Times,serif;font-size:25px;font-weight:700;color:#d6d6d6}.calc-display{color:#ebebeb;font-family:Verdana,Geneva,Tahoma,sans-serif;height:100px;margin:10px 0;padding:1px;border-radius:15px;background-color:#4b4b4b}#output{display:flex;justify-content:flex-start}#output>input{background-color:#4b4b4b;border:none;caret-color:#00aeff;color:#fff;display:inline-block;font-family:Verdana,Geneva,Tahoma,sans-serif;font-size:32px;line-height:55px;margin:0 10px;outline:none;overflow:scroll;width:100%}#error-msg{margin:0 10px;overflow:scroll;color:#ff5715;font-size:21px}.calc-keys{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-end;padding:0;margin:10px}.calc-key{display:flex;justify-content:center;align-items:center;margin:4px;width:70px;height:55px;font-size:25px;font-family:Verdana,Geneva,Tahoma,sans-serif;border-radius:50%}.calc-key:hover{cursor:pointer;box-shadow:4px 4px 15px #adadad99}.calc-key:active{cursor:pointer;border-radius:15px}#equal-key{color:#080808;background-color:#c8fffc}#equal-key:hover{color:#080808;background-color:#e4fffe}#reset-key{color:#080808;background-color:#99e299}#reset-key:hover{color:#080808;background-color:#b8ffb8}#parenthesis-key{font-family:monospace;font-weight:700}#factorial-key{font-family:Georgia,Times New Roman,Times,serif;font-size:35px}.blue-keys{color:#080808;background-color:#00aeff}.blue-keys:hover{color:#080808;background-color:#7cd5ff}.orange-keys{color:#080808;background-color:#c47f00}.orange-keys:hover{color:#080808;background-color:#fca400}.black-keys{color:#ebebeb;background-color:#3d3d3d}.black-keys:hover{color:#ebebeb;background-color:#5a5a5a}.black-keys:active{color:#ebebeb;background-color:#646464}";var r,P,f,m,b,x,L,w,z,I,A,R,p;class M extends HTMLElement{constructor(){super();$(this,r);U.call(this,W,X),a(this,r,P).call(this),a(this,r,A).call(this).focus()}attributeChangedCallback(e,l,t){const i=this.root.querySelector(".calc-container"),s=e==="width"||e==="height"||e==="margin"||e==="calc-name"||e==="calc-input"?e:"borderRadius",k=i==null?void 0:i.querySelector(".calc-heading > p");if(s==="calc-name"&&(t==null?void 0:t.trim())!==""&&(k!=null&&k.textContent))k.textContent=t;else if(s==="calc-input"&&/^[\d\.\+\-\x\/\^\!\(\)]+$/.test(t)){const y=i==null?void 0:i.querySelector("#output > input");if(!(y!=null&&y.value))return;y.value=t,y.focus()}else i!=null&&i.style&&(i.style[s]=t)}}r=new WeakSet,P=function(){const e=this.root.querySelector("#output > input"),l=this.root.querySelectorAll(".calc-keys")[0];let t,i;const s=o=>{a(this,r,p).call(this),a(this,r,f).call(this,e,o),e.focus()},k=()=>{a(this,r,p).call(this),e.value="",e.focus()},y=()=>{a(this,r,w).call(this,"**-1"),e.focus()},C=()=>{a(this,r,w).call(this,"**2"),e.focus()},q=()=>{a(this,r,w).call(this,"**0.5"),e.focus()},h=()=>{t=a(this,r,b).call(this,e);let o=0,c=0;const u=t.charAt(t.length-1);[...t].forEach(v=>{o+=v==="("?1:0,c+=v===")"?1:0}),i=o===c?"(":u==="("||u===")"?u:/[\d\.\!]/.test(u)?")":"(",a(this,r,f).call(this,e,i)},g=()=>{a(this,r,p).call(this),t=a(this,r,b).call(this,e),i=t===""||/[\^\(]$/.test(t)?"":/[\-\+\x\/\.]$/.test(t)?a(this,r,x).call(this,e,"^"):"^",a(this,r,f).call(this,e,i)},S=()=>{a(this,r,p).call(this),t=a(this,r,b).call(this,e),i=t===""||/[\(]$/.test(t)?"":/[\-\+\x\^\/\.]$/.test(t)?a(this,r,x).call(this,e,"!"):"!",a(this,r,f).call(this,e,i)},E=()=>{a(this,r,p).call(this),t=a(this,r,b).call(this,e),i=t===""||/[\/\(]$/.test(t)?"":/[\-\+\x\^]$/.test(t)?a(this,r,x).call(this,e,"/"):"/",a(this,r,f).call(this,e,i)},O=()=>{a(this,r,p).call(this),t=a(this,r,b).call(this,e),i=t===""||/[\x\(]$/.test(t)?"":/[\-\+\/\^]$/.test(t)?a(this,r,x).call(this,e,"x"):"x",a(this,r,f).call(this,e,i)},j=()=>{a(this,r,p).call(this),t=a(this,r,b).call(this,e),i=/[\-]$/.test(t)?"":/[\+\.]$/.test(t)?a(this,r,x).call(this,e,"-"):"-",a(this,r,f).call(this,e,i)},B=()=>{a(this,r,p).call(this),t=a(this,r,b).call(this,e),i=t===""||/[\+\(]$/.test(t)?"":/[\-\.\x\/\^]$/.test(t)?a(this,r,x).call(this,e,"+"):"+",a(this,r,f).call(this,e,i)},N=()=>{a(this,r,p).call(this);let o=a(this,r,m).call(this,e);const c=e.value.split("");c.splice(--o,1),e.value=c.join(""),e.setSelectionRange(o,o),e.focus()},D=()=>{a(this,r,w).call(this,""),a(this,r,A).call(this).focus()},F=()=>{a(this,r,p).call(this),t=a(this,r,b).call(this,e),i=t===""?"0.":/[\.]$/.test(t)?"":".",a(this,r,f).call(this,e,i)};l.addEventListener("click",o=>{var c;switch((c=o==null?void 0:o.target)==null?void 0:c.id){case"reset-key":k();break;case"inverse-key":case"img-inverse-key":y();break;case"squared-key":case"img-squared-key":C();break;case"sqrt-key":case"img-sqrt-key":q();break;case"parenthesis-key":h();break;case"exponent-key":case"img-exponent-key":g();break;case"factorial-key":S();break;case"divide-key":E();break;case"multiply-key":case"img-multiply-key":O();break;case"subtract-key":case"img-subtract-key":j();break;case"add-key":case"img-add-key":B();break;case"backspace-key":case"img-backspace-key":N();break;case"equal-key":D();break;case"decimal-point-key":F();break;case"key-0":s("0");break;case"key-1":s("1");break;case"key-2":s("2");break;case"key-3":s("3");break;case"key-4":s("4");break;case"key-5":s("5");break;case"key-6":s("6");break;case"key-7":s("7");break;case"key-8":s("8");break;case"key-9":s("9");break}}),l.addEventListener("keydown",o=>{var c,u;if((u=(c=o==null?void 0:o.target)==null?void 0:c.className)!=null&&u.includes("calc-key")){const v=o.target;(o==null?void 0:o.key)===" "&&(v.click(),setTimeout(()=>{v.id!=="squared-key"&&v.id!=="img-squared-key"&&this.root.querySelector("#backspace-key").click(),v.focus()},1))}}),e.addEventListener("focus",()=>{const o=a(this,r,m).call(this,e);e.setSelectionRange(o,o)}),e.addEventListener("keydown",o=>{const{key:c}=o;e.disabled=!/(\d|Backspace|Delete|Home|End|ArrowLeft|ArrowRight|Tab)/.test(c);const u=c==="("||c===")"?"parenthesis-key":c==="!"?"factorial-key":c==="*"?"multiply-key":c==="Enter"||c==="="?"equal-key":c==="."?"decimal-point-key":c==="-"?"subtract-key":c==="+"?"add-key":c==="/"?"divide-key":c==="^"?"exponent-key":c==="Escape"?"reset-key":null;u&&this.root.querySelector(`#${u}`).click(),c!=="Tab"&&setTimeout(()=>{e.disabled=!1,e.focus()},10)})},f=function(e,l){const t=e,i=t.value.split("");if(l==="replaced")return;if(l===""){t.focus();return}let s=a(this,r,m).call(this,t);i.splice(s,0,l),t.value=i.join(""),s+=s===-1?2:1,s+=l==="0."?1:0,t.setSelectionRange(s,s),t.focus()},m=function(e){return e?e.selectionStart||e.value.length-1:0},b=function(e){const l=a(this,r,m).call(this,e);return e.value.substring(0,l)},x=function(e,l){const t=e,i=a(this,r,m).call(this,t),s=t.value.split("");return s.splice(i-1,1,l),t.value=s.join(""),t.setSelectionRange(i,i),t.focus(),"replaced"},L=function(e){return e.replaceAll("x","*").replaceAll("^","**").replaceAll(".e","e").replaceAll(")(",")*(").replaceAll("0(","0*(").replaceAll("1(","1*(").replaceAll("2(","2*(").replaceAll("3(","3*(").replaceAll("4(","4*(").replaceAll("5(","5*(").replaceAll("6(","6*(").replaceAll("7(","7*(").replaceAll("8(","8*(").replaceAll("9(","9*(").replaceAll(".(","*(").replaceAll("!(","!*(").replaceAll(").",")*").replaceAll(")0",")*0").replaceAll(")1",")*1").replaceAll(")2",")*2").replaceAll(")3",")*3").replaceAll(")4",")*4").replaceAll(")5",")*5").replaceAll(")6",")*6").replaceAll(")7",")*7").replaceAll(")8",")*8").replaceAll(")9",")*9")},w=function(e){a(this,r,p).call(this);const l=a(this,r,A).call(this);let t=l.value;if(t==="")return;t=a(this,r,L).call(this,t),t+=e;let i;try{if(/^!/.test(t))throw"Invalid Input";for(;/!/.test(t);)t=a(this,r,z).call(this,t);if(i=Function(`return ${t}`)(),i===1/0||i===-1/0)throw"Value too large";if(i===!0||i===!1)throw"Invalid Input";i.toString().length>14&&(i>10**14?i=i.toExponential(8):i>1?i=i.toPrecision(14):i<1&&(i=i.toExponential(8))),i=i.toString().replaceAll("e",".e"),l.value=i}catch(s){const k=a(this,r,R).call(this),y=typeof s=="string"?s:"Invalid Input";l.style.color="rgb(255, 87, 21)",k.textContent=y}},z=function(e){const l=e.indexOf("!"),t=e.charAt(l+1);let i=l-1,s=e.charAt(i),k=0,y=[];if(!/[\d\)]/.test(s))throw"Invalid Input";if(s===")"){let h="",g=i,S=0,E=1;for(;s!=="("||S!==E;){if(g===0)throw"Invalid Input";h+=e.charAt(g--),s=e.charAt(g),s===")"&&E++,s==="("&&S++}return h+="(",h=h.split("").reverse().join(""),h=new Function(`return ${h}`)(),k=a(this,r,I).call(this,Number(h)),y=e.split(""),y.splice(g,i-g+2,k.toString()),y.join("")}let C=0,q=0;for(;/\d/.test(s);)C+=parseInt(e.charAt(i),10)*10**q++,s=e.charAt(--i);if(/[\.]/.test(s))throw"Invalid Input";return k=a(this,r,I).call(this,C),y=e.split(""),/[\d\.\(]/.test(t)&&(k=`${k.toString()}*`),y.splice(i+1,q+1,k.toString()),y.join("")},I=function(e){let l=e;if(l===0)return 1;if(l<=2)return l;for(let t=l-1;t>=2;--t)if(l*=t,l===1/0)throw"Value too large";return l},A=function(){return this.root.querySelector("#output > input")},R=function(){return this.root.querySelector("#error-msg")},p=function(){const e=a(this,r,A).call(this),l=a(this,r,R).call(this),t=l.textContent;(t==="Invalid Input"||t==="Value too large")&&(e.style.color="rgb(235, 235, 235)",l.textContent="")},T(M,"observedAttributes",["calc-name","calc-input","width","height","margin","border-radius"]);customElements.define("my-calculator",M);
