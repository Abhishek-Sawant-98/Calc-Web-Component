(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=t(l);fetch(l.href,s)}})();var X=Object.defineProperty,Y=(e,a,t)=>a in e?X(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,Z=(e,a,t)=>(Y(e,a+"",t),t),_=(e,a,t)=>{if(!a.has(e))throw TypeError("Cannot "+t)},u=(e,a,t)=>{if(a.has(e))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(e):a.set(e,t)},r=(e,a,t)=>(_(e,a,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(i){if(i.ep)return;i.ep=!0;const l=a(i);fetch(i.href,l)}})();const ee=e=>{const a=new CSSStyleSheet;return a.replaceSync(e),[a]},te=e=>{const a=document.createElement("template");return a.innerHTML=e,a.content.cloneNode(!0)};function ie(e,a,t={}){this.root=this.attachShadow({mode:"open",...t}),this.root.appendChild(te(e)),this.root.adoptedStyleSheets=ee(a)}const le=`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">\r
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
</div>`,ae=".calc-container{-webkit-user-select:none;user-select:none;display:inline-block;-ms-overflow-style:none;scrollbar-width:none;width:360px;margin:50px;padding:10px;border-radius:25px;border:15px ridge rgb(165,165,165);background-image:linear-gradient(0deg,#000,#000764);box-shadow:15px 15px 15px #36363699}::-webkit-scrollbar{display:none;width:0px}.calc-heading{margin:-25px 0 -15px;border-radius:15px;background-image:linear-gradient(45deg,#ff25ed80,#ff2d6c80)}.calc-heading>p{display:flex;justify-content:center;align-items:center;text-align:center;padding:10px;font-family:Georgia,Times New Roman,Times,serif;font-size:25px;font-weight:700;color:#d6d6d6}.calc-display{color:#ebebeb;font-family:Verdana,Geneva,Tahoma,sans-serif;height:100px;margin:10px 0;padding:1px;border-radius:15px;background-color:#4b4b4b}#output{display:flex;justify-content:flex-start}#output>input{display:inline-block;overflow:scroll;border:none;outline:none;line-height:55px;caret-color:#00aeff;margin:0 10px;font-size:32px;font-family:Verdana,Geneva,Tahoma,sans-serif;background-color:#4b4b4b;color:#ebebeb}#error-msg{margin:0 10px;overflow:scroll;color:#ff5715;font-size:21px}.calc-keys{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-end;padding:0;margin:10px}.calc-key{display:flex;justify-content:center;align-items:center;margin:4px;width:70px;height:55px;font-size:25px;font-family:Verdana,Geneva,Tahoma,sans-serif;border-radius:50%}.calc-key:hover{cursor:pointer;box-shadow:4px 4px 15px #adadad99}.calc-key:active{cursor:pointer;border-radius:15px}#equal-key{color:#080808;background-color:#c8fffc}#equal-key:hover{color:#080808;background-color:#e4fffe}#reset-key{color:#080808;background-color:#99e299}#reset-key:hover{color:#080808;background-color:#b8ffb8}#parenthesis-key{font-family:monospace;font-weight:700}#factorial-key{font-family:Georgia,Times New Roman,Times,serif;font-size:35px}.blue-keys{color:#080808;background-color:#00aeff}.blue-keys:hover{color:#080808;background-color:#7cd5ff}.orange-keys{color:#080808;background-color:#c47f00}.orange-keys:hover{color:#080808;background-color:#fca400}.black-keys{color:#ebebeb;background-color:#3d3d3d}.black-keys:hover{color:#ebebeb;background-color:#5a5a5a}.black-keys:active{color:#ebebeb;background-color:#646464}";var O,D,k,p,A,q,f,v,m,S,P,V,E,$,M,G,W,j,I,L,z,N,d,y;class F extends HTMLElement{constructor(){super(),u(this,O),u(this,k),u(this,A),u(this,f),u(this,m),u(this,P),u(this,E),u(this,M),u(this,W),u(this,I),u(this,z),u(this,d),ie.call(this,le,ae),r(this,O,D).call(this),r(this,I,L).call(this).focus()}attributeChangedCallback(a,t,i){const l=this.root.querySelector(".calc-container"),s=a==="width"||a==="height"||a==="margin"||a==="calc-name"||a==="calc-input"?a:"borderRadius",o=l==null?void 0:l.querySelector(".calc-heading > p");if(s==="calc-name"&&(i==null?void 0:i.trim())!==""&&o!=null&&o.textContent)o.textContent=i;else if(s==="calc-input"&&/^[\d\.\+\-\x\/\^\!\(\)]+$/.test(i)){const b=l==null?void 0:l.querySelector("#output > input");if(!(b!=null&&b.value))return;b.value=i,b.focus()}else l!=null&&l.style&&(l.style[s]=i)}}O=new WeakSet,D=function(){const e=this.root.querySelector("#output > input"),a=this.root.querySelectorAll(".calc-keys")[0];let t,i;const l=n=>{r(this,d,y).call(this),r(this,k,p).call(this,e,n),e.focus()},s=()=>{r(this,d,y).call(this),e.value="",e.focus()},o=()=>{r(this,E,$).call(this,"**-1"),e.focus()},b=()=>{r(this,E,$).call(this,"**2"),e.focus()},R=()=>{r(this,E,$).call(this,"**0.5"),e.focus()},g=()=>{t=r(this,f,v).call(this,e);let n=0,c=0;const h=t.charAt(t.length-1);t.forEach(w=>{n+=w==="("?1:0,c+=w===")"?1:0}),i=n===c?"(":h==="("||h===")"?h:/[\d\.\!]/.test(h)?")":"(",r(this,k,p).call(this,e,i)},x=()=>{r(this,d,y).call(this),t=r(this,f,v).call(this,e),i=t===""||/[\^\(]$/.test(t)?"":/[\-\+\x\/\.]$/.test(t)?r(this,m,S).call(this,e,"^"):"^",r(this,k,p).call(this,e,i)},C=()=>{r(this,d,y).call(this),t=r(this,f,v).call(this,e),i=t===""||/[\(]$/.test(t)?"":/[\-\+\x\^\/\.]$/.test(t)?r(this,m,S).call(this,e,"!"):"!",r(this,k,p).call(this,e,i)},T=()=>{r(this,d,y).call(this),t=r(this,f,v).call(this,e),i=t===""||/[\/\(]$/.test(t)?"":/[\-\+\x\^]$/.test(t)?r(this,m,S).call(this,e,"/"):"/",r(this,k,p).call(this,e,i)},H=()=>{r(this,d,y).call(this),t=r(this,f,v).call(this,e),i=t===""||/[\x\(]$/.test(t)?"":/[\-\+\/\^]$/.test(t)?r(this,m,S).call(this,e,"x"):"x",r(this,k,p).call(this,e,i)},K=()=>{r(this,d,y).call(this),t=r(this,f,v).call(this,e),i=/[\-]$/.test(t)?"":/[\+\.]$/.test(t)?r(this,m,S).call(this,e,"-"):"-",r(this,k,p).call(this,e,i)},B=()=>{r(this,d,y).call(this),t=r(this,f,v).call(this,e),i=t===""||/[\+\(]$/.test(t)?"":/[\-\.\x\/\^]$/.test(t)?r(this,m,S).call(this,e,"+"):"+",r(this,k,p).call(this,e,i)},J=()=>{r(this,d,y).call(this);let n=r(this,A,q).call(this,e);const c=e.value.split("");c.splice(--n,1),e.value=c.join(""),e.setSelectionRange(n,n),e.focus()},Q=()=>{r(this,E,$).call(this,""),r(this,I,L).call(this).focus()},U=()=>{r(this,d,y).call(this),t=r(this,f,v).call(this,e),i=t===""?"0.":/[\.]$/.test(t)?"":".",r(this,k,p).call(this,e,i)};a.addEventListener("click",n=>{var c;switch((c=n==null?void 0:n.target)==null?void 0:c.id){case"reset-key":s();break;case"inverse-key":case"img-inverse-key":o();break;case"squared-key":case"img-squared-key":b();break;case"sqrt-key":case"img-sqrt-key":R();break;case"parenthesis-key":g();break;case"exponent-key":case"img-exponent-key":x();break;case"factorial-key":C();break;case"divide-key":T();break;case"multiply-key":case"img-multiply-key":H();break;case"subtract-key":case"img-subtract-key":K();break;case"add-key":case"img-add-key":B();break;case"backspace-key":case"img-backspace-key":J();break;case"equal-key":Q();break;case"decimal-point-key":U();break;case"key-0":l("0");break;case"key-1":l("1");break;case"key-2":l("2");break;case"key-3":l("3");break;case"key-4":l("4");break;case"key-5":l("5");break;case"key-6":l("6");break;case"key-7":l("7");break;case"key-8":l("8");break;case"key-9":l("9");break}}),a.addEventListener("keydown",n=>{var c,h;if((h=(c=n==null?void 0:n.target)==null?void 0:c.className)!=null&&h.includes("calc-key")){const w=n.target;(n==null?void 0:n.key)===" "&&(w.click(),setTimeout(()=>{w.id!=="squared-key"&&w.id!=="img-squared-key"&&this.root.querySelector("#backspace-key").click(),w.focus()},1))}}),e.addEventListener("focus",()=>{const n=r(this,A,q).call(this,e);e.setSelectionRange(n,n)}),e.addEventListener("keydown",n=>{const{key:c}=n;e.disabled=!/(\d|Backspace|Delete|Home|End|ArrowLeft|ArrowRight|Tab)/.test(c);const h=c==="("||c===")"?"parenthesis-key":c==="!"?"factorial-key":c==="*"?"multiply-key":c==="Enter"||c==="="?"equal-key":c==="."?"decimal-point-key":c==="-"?"subtract-key":c==="+"?"add-key":c==="/"?"divide-key":c==="^"?"exponent-key":c==="Escape"?"reset-key":null;h&&this.root.querySelector(`#${h}`).click(),c!=="Tab"&&setTimeout(()=>{e.disabled=!1,e.focus()},10)})},k=new WeakSet,p=function(e,a){const t=e,i=t.value.split("");if(a==="replaced")return;if(a===""){t.focus();return}let l=r(this,A,q).call(this,t);i.splice(l,0,a),t.value=i.join(""),l+=l===-1?2:1,l+=a==="0."?1:0,t.setSelectionRange(l,l),t.focus()},A=new WeakSet,q=function(e){return e?e.selectionStart||e.value.length-1:0},f=new WeakSet,v=function(e){const a=r(this,A,q).call(this,e);return e.value.substring(0,a)},m=new WeakSet,S=function(e,a){const t=e,i=r(this,A,q).call(this,t),l=t.value.split("");return l.splice(i-1,1,a),t.value=l.join(""),t.setSelectionRange(i,i),t.focus(),"replaced"},P=new WeakSet,V=function(e){return e.replaceAll("x","*").replaceAll("^","**").replaceAll(".e","e").replaceAll(")(",")*(").replaceAll("0(","0*(").replaceAll("1(","1*(").replaceAll("2(","2*(").replaceAll("3(","3*(").replaceAll("4(","4*(").replaceAll("5(","5*(").replaceAll("6(","6*(").replaceAll("7(","7*(").replaceAll("8(","8*(").replaceAll("9(","9*(").replaceAll(".(","*(").replaceAll("!(","!*(").replaceAll(").",")*").replaceAll(")0",")*0").replaceAll(")1",")*1").replaceAll(")2",")*2").replaceAll(")3",")*3").replaceAll(")4",")*4").replaceAll(")5",")*5").replaceAll(")6",")*6").replaceAll(")7",")*7").replaceAll(")8",")*8").replaceAll(")9",")*9")},E=new WeakSet,$=function(e){r(this,d,y).call(this);const a=r(this,I,L).call(this);let t=a.value;if(t==="")return;t=r(this,P,V).call(this,t),t+=e;let i;try{if(/^!/.test(t))throw"Invalid Input";for(;/!/.test(t);)t=r(this,M,G).call(this,t);if(i=Function(`return ${t}`)(),i===1/0||i===-1/0)throw"Value too large";if(i===!0||i===!1)throw"Invalid Input";i.toString().length>14&&(i>10**14?i=i.toExponential(8):i>1?i=i.toPrecision(14):i<1&&(i=i.toExponential(8))),i=i.toString().replaceAll("e",".e"),a.value=i}catch(l){const s=r(this,z,N).call(this),o=typeof l=="string"?l:"Invalid Input";a.style.color="rgb(255, 87, 21)",s.textContent=o}},M=new WeakSet,G=function(e){const a=e.indexOf("!"),t=e.charAt(a+1);let i=a-1,l=e.charAt(i),s=0,o=[];if(!/[\d\)]/.test(l))throw"Invalid Input";if(l===")"){let g="",x=i,C=0,T=1;for(;l!=="("||C!==T;){if(x===0)throw"Invalid Input";g+=e.charAt(x--),l=e.charAt(x),l===")"&&T++,l==="("&&C++}return g+="(",g=g.split("").reverse().join(""),g=new Function(`return ${g}`)(),s=r(this,W,j).call(this,Number(g)),o=e.split(""),o.splice(x,i-x+2,s.toString()),o.join("")}let b=0,R=0;for(;/\d/.test(l);)b+=parseInt(e.charAt(i),10)*10**R++,l=e.charAt(--i);if(/[\.]/.test(l))throw"Invalid Input";return s=r(this,W,j).call(this,b),o=e.split(""),/[\d\.\(]/.test(t)&&(s=`${s.toString()}*`),o.splice(i+1,R+1,s.toString()),o.join("")},W=new WeakSet,j=function(e){let a=e;if(a===0)return 1;if(a<=2)return a;for(let t=a-1;t>=2;--t)if(a*=t,a===1/0)throw"Value too large";return a},I=new WeakSet,L=function(){return this.root.querySelector("#output > input")},z=new WeakSet,N=function(){return this.root.querySelector("#error-msg")},d=new WeakSet,y=function(){const e=r(this,I,L).call(this),a=r(this,z,N).call(this),t=a.textContent;(t==="Invalid Input"||t==="Value too large")&&(e.style.color="rgb(235, 235, 235)",a.textContent="")},Z(F,"observedAttributes",["calc-name","calc-input","width","height","margin","border-radius"]);customElements.define("my-calculator",F);
