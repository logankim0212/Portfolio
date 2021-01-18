import React, {Component} from 'react'
import '../projects/Projects.scss';
import {gsap, TweenMax} from "gsap";
import {ProjectItems} from "./ProjectItems";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Link} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount() {
        document.title = "Projects - Logan's Portfolio";

        let projectHeader = document.querySelector(".header");
        let caption = document.querySelector(".caption");
        let divider = document.querySelector(".divider");

        TweenMax.from([projectHeader, caption], 1.3, {
            delay: 1.3,
            ease: "power3.out",
            y: 100,
            opacity: 0,
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

        let panels = document.querySelectorAll(".panel");

        for (let i = 1; i <= panels.length; i++) {
            let projectTitle = document.querySelector(".project-title" + i);
            let projectDescription = document.querySelector(".project-description" + i);
            let projectButton = document.querySelector(".project-button" + i);
            let projectImage = document.querySelector(".project-image" + i);

            gsap.from([projectTitle], {
                delay: 0.5,
                duration: 0.5,
                ease: "ease.out",
                y: 200,
                opacity: 0,
                stagger: {
                    amount: 0.15
                },
                scrollTrigger: {
                    trigger: [projectTitle],
                    start: 'top 95%',
                    end: 'bottom 10%',
                    toggleActions: 'restart reverse restart reverse'
                },
            });

            gsap.from([projectDescription], {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: [projectDescription],
                    start: 'top 100%',/**/
                    end: 'bottom 5%',
                    toggleActions: 'restart reverse restart reverse'
                },
            });

            gsap.from([projectButton], {
                delay: 1,
                duration: 1,
                ease: "back.out",
                transformOrigin: "center",
                scaleX: .3,
                scaleY: .3,
                opacity: 0,
                scrollTrigger: {
                    trigger: [projectButton],
                    start: 'top 100%',
                    end: 'bottom 5%',
                    toggleActions: 'restart reverse restart reverse'
                },
            });

            if (this.state.width <= 1000) {
                gsap.from([projectImage], {
                    duration: 1,
                    y: 100,
                    opacity: 0,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: [projectImage],
                        start: 'top 100%',/**/
                        end: 'bottom 5%',
                        toggleActions: 'restart reverse restart reverse'
                    },
                });
            } else {
                gsap.from([projectImage], {
                    duration: 1,
                    x: 100,
                    opacity: 0,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: [projectImage],
                        start: 'top 100%',/**/
                        end: 'bottom 5%',
                        toggleActions: 'restart reverse restart reverse'
                    },
                });
            }
        }
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
                                            <div className={'line-wrap'}>
                                                <h3 className={'project-title color project-title' + (index + 1)}>{item.title}</h3>
                                            </div>
                                            <p className={'project-description' + (index + 1)}>{item.description}</p>
                                            <div className={'project-button' + (index + 1)}>
                                                <a href={item.projectLink} target="_blank" rel="noreferrer">
                                                    <div className="button">
                                                        <div className="inner-button-1">
                                                            <div className="inner-button-2">
                                                                <div className="inner-button-3">
                                                                    <div className="inner-button-4">
                                                                        <div className="inner-button-content">
                                                                            <span
                                                                                className="button-text">View Project</span>
                                                                            <span className="hover-button-text">View Project</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className={'sub-panel b'}>
                                            <img className={'project-image project-image' + (index + 1)}
                                                 src={item.imageLink} alt={'screenshots of ' + item.title}/>
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
