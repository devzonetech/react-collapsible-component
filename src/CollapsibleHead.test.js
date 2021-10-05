import React from "react";
import { CollapsibleHead } from "./index";
import renderer from "react-test-renderer";

test("CollapsibleHead render test", () => {
    const component = renderer.create(
        <CollapsibleHead className="additionalClassForHead">
            Head title 1
        </CollapsibleHead>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
