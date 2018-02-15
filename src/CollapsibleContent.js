import React from 'react'
import PropTypes from 'prop-types'

class CollapsibleContent extends React.Component {
    
    constructor() {
        super()
    }
    
    render() {
        return (
            <div class={'panel-accordion ' + this.props.className}>
                {this.props.children}
            </div>)
    }
}

CollapsibleContent.propTypes = {
    className: PropTypes.string,
}

CollapsibleContent.defaultProps = {
    className: '',
}

export default CollapsibleContent