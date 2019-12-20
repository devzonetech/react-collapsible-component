# ReactJS Collapsible component
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

ReactJs collapsible accordion component. Light, simple and functional. Allows expand and collapse html content. Ready for use in your ReactJs application. Works with React 16.x.x versions.

## Demo

[https://www.devzonetech.com/demo/react-collapsible-component/](https://www.devzonetech.com/demo/react-collapsible-component/)

## Installation

`npm install react-collapsible-component --save`

## Usage

Howto use ReactJs collapsible accordion component.

# 1. Regular usage

```jsx
import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent
} from "react-collapsible-component";

export default class MyComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                ...
                <CollapsibleComponent>
                    <CollapsibleHead className="additionalClassForHead">
                        Head title 1
                    </CollapsibleHead>
                    <CollapsibleContent className="additionalClassForContent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex{" "}
                        </p>
                    </CollapsibleContent>

                    <CollapsibleHead isExpanded={true}>
                        Head title 2
                    </CollapsibleHead>
                    <CollapsibleContent isExpanded={true}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </CollapsibleContent>

                    <CollapsibleHead>Head title 3</CollapsibleHead>
                    <CollapsibleContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{" "}
                        </p>
                    </CollapsibleContent>
                </CollapsibleComponent>
            </div>
        );
    }
}
```

# 2. Use with collapsed content positioned above some of Head titles

```jsx
import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent
} from "react-collapsible-component";

export default class MyComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                ...
                <CollapsibleComponent name="second">
                    <CollapsibleHead>Head title 1</CollapsibleHead>
                    <CollapsibleContent>
                        <p>
                            11111 Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </CollapsibleContent>

                    <CollapsibleContent isExpanded={true}>
                        <p>
                            22222 Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in
                        </p>
                    </CollapsibleContent>
                    <CollapsibleHead
                        showContentAboveButton={true}
                        isExpanded={true}
                    >
                        Head title 2
                    </CollapsibleHead>

                    <CollapsibleContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </CollapsibleContent>
                    <CollapsibleHead>Head title 3</CollapsibleHead>

                    <CollapsibleHead>Head title 4</CollapsibleHead>
                    <CollapsibleContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </CollapsibleContent>

                    <CollapsibleHead>Head title 5</CollapsibleHead>
                    <CollapsibleContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </CollapsibleContent>
                </CollapsibleComponent>
            </div>
        );
    }
}
```

## Component Props

| _Prop_     | _Default_ | _Required_                                     | _Values_               | Description                       |
| ---------- | --------- | ---------------------------------------------- | ---------------------- | --------------------------------- |
| className  |           | no                                             | String                 | Custom defined css class          |
| name       |           | if more than one conponent on one page is used | String                 | Qunique name identifier           |
| isExpanded | false     | no                                             | Boolean: true or false | Show or hide collapsible content. |
| showContentAboveButton | false     | no                                             | Boolean: true or false | Show collapsible content above Head title. |


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[DEVZONE TECH Ltd.](https://www.devzonetech.com/)

[npm-url]: https://npmjs.org/package/react-collapsible-component
[downloads-image]: http://img.shields.io/npm/dm/react-collapsible-component.svg
[npm-image]: https://badge.fury.io/js/react-collapsible-component.svg
