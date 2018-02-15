ReactJS Collapsible component
=========

ReactJs collapsible accordion component. Light, simple and functional. Allows expand and collapse html content. Ready for use in your ReactJs application.

## Demo
[https://www.devzonetech.com/demo/react-collapsible-component/](https://www.devzonetech.com/demo/react-collapsible-component/)

## Installation

  `npm install react-collapsible-component --save`

## Usage
Howto use ReactJs collapsible accordion component.

```jsx
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'

export default class MyComponent extends React.Component {
    
    constructor() {
        super();
    }
    
    render() {
        return (
        <div>
            ...
            <CollapsibleComponent>
                <CollapsibleHead className="additionalClassForHead">Head title 1</CollapsibleHead>
                <CollapsibleContent className="additionalClassForContent">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex </p>
                </CollapsibleContent>

                <CollapsibleHead isExpanded={true}>Head title 2</CollapsibleHead>
                <CollapsibleContent isExpanded={true}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </CollapsibleContent>

                <CollapsibleHead>Head title 3</CollapsibleHead>
                <CollapsibleContent>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. </p>
                </CollapsibleContent>
            </CollapsibleComponent>
        </div>
        )
    }
}
```

## Component Props 

| *Prop*          | *Default* | *Values*                                   | Description                            |
|-----------------|-----------|--------------------------------------------|----------------------------------------|
| className       |           | String                                     | custom defined css class               |
| isExpanded      | false     | Boolean: true or false                     | Show or hide collapsible content.      |
 

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[DEVZONE TECH Ltd.](https://www.devzonetech.com/)