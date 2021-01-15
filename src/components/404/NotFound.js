import React, {Component} from 'react'
import './NotFound.scss';

export default class NotFound extends Component {
    render() {
        return (
            <div className={'page'}>
                <section id="colorlib-hero" className="js-fullheight not-found" data-section="not-found">
                    <div className="view main content">
                        <div className="error">404</div>
                        <br/><br/>
                        <span className="info">Page not found</span>
                    </div>
                </section>
            </div>
        )
    }
}
