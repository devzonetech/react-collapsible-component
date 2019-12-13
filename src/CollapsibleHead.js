import React from 'react'

export class CollapsibleHead extends React.Component {
    
    render() {

        const { className } = this.props;
        let addClassName = className ? className : '';

        return (<button data-show-content-above-button={this.props.showContentAboveButton}
        className={'accordion-head ' + (this.props.isExpanded ? 'active-accordion ' : '') + addClassName}>
            {this.props.children}
        </button>)
    }
}