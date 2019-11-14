import React from 'react'
import renderer from 'react-test-renderer'
import CollapsibleHead from '../CollapsibleHead'

describe('CollapsibleHead', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<CollapsibleHead />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})