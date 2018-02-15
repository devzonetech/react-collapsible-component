import React from 'react'
import PropTypes from 'prop-types'

class CollapsibleContent extends React.Component {
    
    constructor() {
        super()
    }

    render() {
        return (
            <div className={' panel-accordion ' + this.props.className} style={this.props.isExpanded ? {display: 'block'} : null}>
                {this.props.children}
            </div>)
    }
}

CollapsibleContent.propTypes = {
    className: PropTypes.string,
    isExpanded: PropTypes.bool,
}

CollapsibleContent.defaultProps = {
    className: '',
    isExpanded: false,
}

export default CollapsibleContent