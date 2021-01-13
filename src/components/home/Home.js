import React, {Component} from 'react'
import './Home.scss';
import {Link} from 'react-router-dom';
import {TweenMax} from 'gsap';
import {connect} from 'react-redux'
import {enableLoading} from '../../redux/actions'
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }

        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    onButtonClicked() {
        this.setState({
            loading: true
        })

        this.props.enableLoading();
    }

    componentDidMount() {
        document.title = "Home - Logan's Portfolio";

        let profileImage = document.querySelector(".profile-image");
        let name = document.querySelector(".name");
        let job = document.querySelector(".job");
        let button = document.querySelector(".button");
        let text = document.querySelector(".description");

        TweenMax.from([name, job], 1.3, {
            delay: 1.3,
            ease: "power3.out",
            y: 100,
            stagger: {
                amount: 0.15
            }
        });

        TweenMax.from(
            [text],
            1.5,
            {
                y: 30,
                delay: 1.3,
                opacity: 0,
                ease: "power3.InOut"
            }
        );

        TweenMax.from([profileImage], 1.3, {
            delay: 1.7,
            ease: "power3.out",
            x: 150,
            opacity: 0,
            stagger: {
                amount: 0.15
            }
        });

        TweenMax.from([button], 1.3, {
            delay: 1.9,
            ease: "back.out",
            transformOrigin: "center",
            scaleX: .2, scaleY: .2,
            opacity: 0,
            stagger: {
                amount: 0.15
            }
        });
    }

    render() {
        return (
            <div className={'page'}>
                <section id="colorlib-hero" className="js-fullheight home" data-section="home">
                    <div className="flexslider js-fullheight main flex">
                        <div className={'section vertical-middle a'}>
                            <div className={'line-wrap'}>
                                <h1 className={'name color'}>Logan J. Kim</h1>
                            </div>
                            <div className={'line-wrap'}>
                                <p className={'title color job'}>
                                    <em>Software Engineer</em>
                                </p>
                            </div>
                            <p className={'description'}>
                                Hi there, I'm Logan. My path in software engineering began in 2017. Since then, I've
                                completed my advanced technology diploma in software engineering with high honours
                                and gained professional experience in both private and public sectors to broaden my
                                horizons. I am currently a senior software engineer at an applied research centre of
                                Centennial College.</p>
                            <Link to={'/Portfolio/projects'} onClick={this.onButtonClicked}>
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
                        <div className={'section vertical-bottom b'}>
                            <img className={'profile-image'}
                                 src={'/Portfolio/images/profile.png'}
                                 alt={'Logan Kim\'s portrait'}/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

Home.propTypes = {
    enableLoading: PropTypes.func.isRequired,
    storage: PropTypes.object
};

export default connect(null, {enableLoading})(Home)
