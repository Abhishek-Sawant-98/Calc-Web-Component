# Calc-Web-Component
Hi there&#128075; &nbsp;&nbsp;&nbsp;This is a **Standard Calculator** [`Web Component`](https://developer.mozilla.org/en-US/docs/Web/Web_Components) (custom element) developed only using HTML5, CSS3, and Vanilla JS. The custom tag created for this calculator is `<my-calculator></my-calculator>`. This custom tag contains various attributes which can be modified to our liking in `index.html` file.

> Javascript syntax for creating a basic custom web component &#128071;

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

> Click &#128073; [`THIS LINK`](https://abhishek-calc.netlify.app/) to see it in action &#128578; You can also use keyboard (in laptops/desktops) for using this calculator.

## Demo Clips &#128071;

<table>
  <tr>
    <td><img src='https://github.com/Abhishek-Sawant-98/project-readme-files/blob/main/resources/calc-web-component/recordings/calc-demo-part1.gif' alt='calc_demo_clip1'></td>
    <td><img src='https://github.com/Abhishek-Sawant-98/project-readme-files/blob/main/resources/calc-web-component/recordings/calc-demo-part2.gif' alt='calc_demo_clip2'></td>
  </tr>
  <tr>
    <td><img src='https://github.com/Abhishek-Sawant-98/project-readme-files/blob/main/resources/calc-web-component/recordings/calc-demo-part3.gif' alt='calc_demo_clip3'></td>
    <td><img src='https://github.com/Abhishek-Sawant-98/project-readme-files/blob/main/resources/calc-web-component/recordings/calc-demo-part4.gif' alt='calc_demo_clip4'></td>
  </tr>
</table>

## Steps to Run
- Clone this repo to your local machine.
- Open repo in [`vscode`](https://code.visualstudio.com/).
- Open with [`live server`](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
 <img src="https://user-images.githubusercontent.com/66935206/161602165-dd6e35d3-8dd2-41f2-a7aa-f42cb3f972cc.gif" width="200" height="200" alt="as_simple_as_that">

