import React, {Component} from 'react'
import '../sass/home.scss';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
    }

    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="contact">
                    This is Contact Page!
                </section>
            </div>
        )
    }
}
