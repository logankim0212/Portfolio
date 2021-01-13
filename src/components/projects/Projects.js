import React, {Component} from 'react'
import '../projects/Projects.scss';
import {TweenMax} from "gsap";
import {ProjectItems} from "./ProjectItems";

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
                        <div className="content">
                            <div className="content--inner">
                                <p className="project-submenu">Links to the each project will be here</p>
                                {
                                    ProjectItems.map((item, index) => {
                                        return (
                                            <div className={'row-full'}>
                                                {item.title}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
