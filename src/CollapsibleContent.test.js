import React from "react";
import { CollapsibleContent } from "./index";
import renderer from "react-test-renderer";

test("CollapsibleContent render and class property, children type test", () => {
    const component = renderer.create(
        <CollapsibleContent
            className="additionalClassForContent"
            isExpanded={true}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
            </p>
        </CollapsibleContent>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(tree.props.className).toEqual(
        " panel-accordion additionalClassForContent"
    );
    expect(tree.children[0].type).toEqual("p");

    const expandStyle = { display: "block" };
    expect(tree.props.style).toEqual(expandStyle);
});

test("CollapsibleContent expand test", () => {
    const component = renderer.create(
        <CollapsibleContent
            className="additionalClassForContent"
            isExpanded={false}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
            </p>
        </CollapsibleContent>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    console.log(tree.props);

    const expandStyle = null;
    expect(tree.props.style).toEqual(expandStyle);
});
