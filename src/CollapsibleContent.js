import React from 'react'

export class CollapsibleContent extends React.Component {
    
    render() {

        const { className } = this.props;
        let addClassName = className ? className : '';

        return (
            <div className={' panel-accordion ' + addClassName}
                style={this.props.isExpanded ? {display: 'block'} : null}>
                {this.props.children}
            </div>)
    }
}