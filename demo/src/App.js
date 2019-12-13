import React from "react";
import "./App.css";
import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent
} from "react-collapsible-component";

function App() {
    return (
        <div className="App">
            <div id="wrapper">
                <h1>Demo CollapsibleComponent ReactJs component</h1>
                <div>
                    <p>
                        ReactJs collapsible accordion component. Light, simple
                        and functional. Allows expand and collapse html content.
                        Ready for use in your ReactJs application.
                    </p>
                </div>

                <div>
                    <h2>Demo with content bellow Head titles</h2>

                    <CollapsibleComponent name="first">
                        <CollapsibleHead className="additionalClassForHead">
                            Head title 1
                        </CollapsibleHead>
                        <CollapsibleContent className="additionalClassForContent">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex{" "}
                            </p>
                        </CollapsibleContent>

                        <CollapsibleHead isExpanded={true}>
                            Head title 2
                        </CollapsibleHead>
                        <CollapsibleContent isExpanded={true}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </CollapsibleContent>

                        <CollapsibleHead>Head title 3</CollapsibleHead>
                        <CollapsibleContent>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.{" "}
                            </p>
                        </CollapsibleContent>
                    </CollapsibleComponent>
                </div>

                <div style={{marginTop: '100px'}}>
                    <h2>Demo - content positioned above some of Head titles</h2>
                    <CollapsibleComponent name="second">
                        <CollapsibleHead>Head title 1</CollapsibleHead>
                        <CollapsibleContent>
                            <p>
                                11111 Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </CollapsibleContent>

                        <CollapsibleContent isExpanded={true}>
                            <p>
                                22222 Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
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
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </CollapsibleContent>
                        <CollapsibleHead>Head title 3</CollapsibleHead>

                        <CollapsibleHead>Head title 4</CollapsibleHead>
                        <CollapsibleContent>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </CollapsibleContent>

                        <CollapsibleHead>Head title 5</CollapsibleHead>
                        <CollapsibleContent>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </CollapsibleContent>
                    </CollapsibleComponent>
                </div>
            </div>
        </div>
    );
}

export default App;
