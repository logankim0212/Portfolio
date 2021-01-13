import React, {Component} from 'react'
import '../sass/home.scss';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
    }

    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight main">
                        <div className={'section vertical-middle'}>
                            <p className={'name color'}>Logan J. Kim</p>
                            <p className={'title color'}>Software Engineer</p>
                            <p className={'description'}>
                                Hi there, I'm Logan Kim. My path in software engineering began in 2017.
                                Since then, I've completed my advanced technology diploma in software engineering with
                                high honours and gained professional experience in both private and public sectors to
                                broaden my horizons. Until December 2020, I was a senior software engineer at an
                                applied research centre of Centennial College. Now, I'm looking for an opportunity that
                                aligns with where I’d like to take my career.</p>
                            <Link to={'/projects'}>
                                <div className="button">
                                    <div className="inner-button-1">
                                        <div className="inner-button-2">
                                            <div className="inner-button-3">
                                                <div className="inner-button-4">
                                                    <div className="inner-button-content">
                                                        <span className="button-text">Projects</span>
                                                        <span className="hover-button-text">Projects</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={'section vertical-bottom'}>
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img className={'profile-image'} src={'/images/profile.png'} alt={'Logan Kim\'s image'}/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
