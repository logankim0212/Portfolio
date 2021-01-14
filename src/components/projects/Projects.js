import React, {Component} from 'react'
import '../projects/Projects.scss';
import {gsap, TweenMax} from "gsap";
import {ProjectItems} from "./ProjectItems";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Link} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default class Projects extends Component {
    componentDidMount() {
        document.title = "Projects - Logan's Portfolio";

        let projectHeader = document.querySelector(".header");
        let caption = document.querySelector(".caption");
        let divider = document.querySelector(".divider");

        TweenMax.from([projectHeader, caption], 1.3, {
            delay: 1.3,
            ease: "power3.out",
            y: 100,
            stagger: {
                amount: 0.15
            }
        });

        TweenMax.from([divider], 1.3, {
            delay: 1.3,
            ease: "power3.out",
            transformOrigin: "center",
            scaleX: .7, scaleY: .7,
            opacity: 0,
            stagger: {
                amount: 0.15
            }
        });
    }

    render() {
        return (
            <div className={'page'}>
                <section id="colorlib-hero" className="js-fullheight project" data-section="projects">
                    <div className="view main content">
                        <div className={'first-screen'}>
                            <div className={'line-wrap'}>
                                <h1 className={'header color'}>Remember that wherever your heart is, there you will
                                    find your treasure</h1>
                            </div>
                            <div className={'line-wrap'}>
                                <div className={'caption'}>
                                    <em>- The Alchemist -</em>
                                </div>
                            </div>
                            <hr className={'divider center'}/>
                            <div className={'background-text'}>Projects</div>
                            <div className="scroll-downs">
                                <div className="mouse">
                                    <div className="scroller"/>
                                </div>
                            </div>
                        </div>
                        {
                            ProjectItems.map((item, index) => {
                                return (
                                    <div key={index} className={'panel'}>
                                        <div className={'sub-panel a'}>
                                            <h3 className={'project-title'}>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <a href={item.projectLink} target="_blank">
                                                <div className="button">
                                                    <div className="inner-button-1">
                                                        <div className="inner-button-2">
                                                            <div className="inner-button-3">
                                                                <div className="inner-button-4">
                                                                    <div className="inner-button-content">
                                                                        <span className="button-text">View Project</span>
                                                                        <span className="hover-button-text">View Project</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className={'sub-panel b'}>
                                            <img className={'project-image'} src={item.imageLink} alt={'screenshots of ' + item.title} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        )
    }
}
