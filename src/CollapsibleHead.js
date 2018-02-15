import React from 'react'
import PropTypes from 'prop-types'

class CollapsibleHead extends React.Component {
    
    constructor() {
        super()
    }
    
    render() {
        return (<button className={'accordion-head ' + this.props.className}>
            {this.props.children}
        </button>)
    }
}

CollapsibleHead.propTypes = {
    className: PropTypes.string,
}

CollapsibleHead.defaultProps = {
    className: '',
}

export default CollapsibleHead