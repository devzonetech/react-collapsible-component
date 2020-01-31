import React from 'react'
import '!style-loader!css-loader!./css/styles.css'

export class CollapsibleComponent extends React.Component {
    
    componentDidMount() {

        const { name } = this.props;
        let selector = name ? '#rcc' + name + ' '  : '';
        let acc = document.querySelectorAll(selector + '.accordion-head');
        let i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function(e) {
               e.preventDefault();

                /* Highlight the button - add/remove "active-accordion" class */
                this.classList.toggle('active-accordion')

                /* Hide/show the active panel */
                let panel;

                if (this.dataset.showContentAboveButton === 'true' &&
                    this.previousElementSibling !== null &&
                    this.previousElementSibling.classList.contains('panel-accordion')) {
                        panel = this.previousElementSibling;
                } else if (this.nextElementSibling !== null &&
                    this.previousElementSibling !== null &&
                    this.nextElementSibling.classList.contains('panel-accordion') &&
                    this.previousElementSibling.classList.contains('panel-accordion')) {
                    panel = this.nextElementSibling;
                } else if (this.nextElementSibling !== null &&
                    this.previousElementSibling !== null &&
                    !this.nextElementSibling.classList.contains('panel-accordion') &&
                    this.previousElementSibling.classList.contains('panel-accordion')) {
                    panel = this.previousElementSibling;
                } else if (this.nextElementSibling !== null &&
                    this.nextElementSibling.classList.contains('panel-accordion')) {
                    panel = this.nextElementSibling;
                } else {
                    return false;
                }

                if (panel.style.display === 'block') {
                    panel.style.display = 'none'
                } else {
                    panel.style.display = 'block'
                }
            })
        }
    }
    
    render() {
        return (<div id={'rcc'+this.props.name}>
            {this.props.children}
        </div>
        )
    }
}
