import React from 'react'
import PropTypes from 'prop-types'

class CollapsibleHead extends React.Component {
    
    constructor() {
        super()
    }
    
    render() {
        return (<button className={'accordion-head ' + (this.props.isExpanded ? 'active-accordion ' : '') + this.props.className}>
            {this.props.children}
        </button>)
    }
}

CollapsibleHead.propTypes = {
    className: PropTypes.string,
    isExpanded: PropTypes.bool,
}

CollapsibleHead.defaultProps = {
    className: '',
    isExpanded: false,
}

export default CollapsibleHead