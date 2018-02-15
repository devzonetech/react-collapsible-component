import React from 'react'
import '!style-loader!css-loader!../css/styles.css'

class CollapsibleComponent extends React.Component {
    
    constructor() {
        super()
    }

    componentDidMount() {
        var acc = document.getElementsByClassName('accordion-head')
        var i

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function() {
                /* Highlight the button - add/remove "active-accordion" class */
                this.classList.toggle('active-accordion')

                /* Hide/show the active panel */
                var panel = this.nextElementSibling
                if (panel.style.display === 'block') {
                    panel.style.display = 'none'
                } else {
                    panel.style.display = 'block'
                }
            })
        }
    }
    
    render() {
        return (<div>
            {this.props.children}
        </div>
        )
    }
}

CollapsibleComponent.propTypes = {
}

CollapsibleComponent.defaultProps = {
}

export default CollapsibleComponent