import React from 'react'
import renderer from 'react-test-renderer'
import CollapsibleComponent from '../CollapsibleComponent'

describe('CollapsibleComponent', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<CollapsibleComponent />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})