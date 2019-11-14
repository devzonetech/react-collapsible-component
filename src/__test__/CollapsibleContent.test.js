import React from 'react'
import renderer from 'react-test-renderer'
import CollapsibleContent from '../CollapsibleContent'

describe('CollapsibleContent', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<CollapsibleContent />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})