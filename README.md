# Online Calculator PWA
Hi there👋 &nbsp;&nbsp;This is a **Standard Calculator** [`Web Component`](https://developer.mozilla.org/en-US/docs/Web/Web_Components) (custom element) developed only using HTML5, CSS3, and Vanilla JS. The custom tag created for this calculator is `<my-calculator></my-calculator>`. This custom tag contains various attributes which can be modified to our liking in `index.html` file.

> Click 👉 [`THIS LINK`](https://abhishek-calc.netlify.app/) to see it in live action🚀 You can also use keyboard (in laptops/desktops) for using this calculator.

## Cool Features 😎
- This is a **PWA** ([`Progressive Web App`](https://medium.com/swlh/converting-existing-react-app-to-pwa-3c7e4e773db3)), which can be installed natively on mobile and desktop devices.
- `TAB` key can be used to navigate forward, and `SHIFT+TAB` key to navigate backward, for focusing input display/calc keys.
- `SPACE` key can be used to press/click a focused calc key.
- `ENTER` or `=` key can be used (when calc display is in focus) to evaluate the entered expression.
- `ESCAPE` key can be used to reset calc display (when in focus).
- The display ignores input from any other keyboard key apart from numeric and arithmetic keys.
- [`Event Delegation`](https://dmitripavlutin.com/javascript-event-delegation/) has been used for listening to 'click' and 'keydown' events of each calc key.
- A single parenthesis key `()` has been used for conditionally entering `(` or `)` brackets.

## Demo Clips 👇

<table>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/66935206/180427910-8dbb3bb2-43e1-48d4-8018-ea04666b4daf.gif' alt='calc_demo_clip1'></td>
    <td><img src='https://user-images.githubusercontent.com/66935206/180427950-c537469f-96fc-4815-9abc-bed33b64bb78.gif' alt='calc_demo_clip2'></td>
  </tr>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/66935206/180427960-d0842928-cd64-47a0-8596-3692f50b67a0.gif' alt='calc_demo_clip3'></td>
    <td><img src='https://user-images.githubusercontent.com/66935206/180427975-1251c4a8-81ad-47e4-a3ad-7561f02fdbff.gif' alt='calc_demo_clip4'></td>
  </tr>
</table>

## Creating a Web Component
> Javascript syntax for creating a basic custom web component 👇

```javascript
  customElements.define('custom-tag-name', class extends HTMLElement{
    constructor() {
      super();
      this.attachShadow({mode: 'open'}); // Attaches a shadow DOM to the custom element
      
      // ... Create child elements using document.createElement('tag-name')
      
      this.shadowRoot.appendChild(childElement); // Append child elements to the shadow DOM
      
      // ... append more child elements if any
    }
  });
```

## Steps to Run Project Locally 💻
- Clone this repo to your local machine.
- Open repo in [`vscode`](https://code.visualstudio.com/).
```sh
# install dependencies
yarn install
# serve at localhost:3000 with hot reload
yarn dev
# build for production
yarn build
```
 <img src="https://user-images.githubusercontent.com/66935206/161602165-dd6e35d3-8dd2-41f2-a7aa-f42cb3f972cc.gif" width="200" height="200" alt="as_simple_as_that">

