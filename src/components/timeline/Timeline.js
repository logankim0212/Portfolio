import React, {Component} from 'react'
import '../timeline/Timeline.scss';
import {gsap, TweenMax} from "gsap";
import {TimelineItems} from "./TimelineItems";

import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default class Timeline extends Component {
    componentDidMount() {
        document.title = "Timeline - Logan's Portfolio";

        let timeLineheader = document.querySelector(".header");
        let caption = document.querySelector(".caption");
        let divider = document.querySelector(".divider");

        TweenMax.from([timeLineheader, caption], 1.3, {
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

        TweenMax.from('.timeline-body', 1.3, {
            delay: 1.3,
            ease: "power3.out",
            opacity: 0,
            y: 100,
            stagger: {
                amount: 0.15
            }
        });

        for (let i = 1; i <= 4; i++) {
            let timelineIcon = document.querySelector(".timeline-event-icon" + i);
            let timelineThumbnail = document.querySelector(".timeline-event-thumbnail" + i);
            let timelineTitle = document.querySelector(".timeline-title" + i);
            let timelineCompany = document.querySelector(".timeline-company" + i);
            let timelineDuties = document.querySelector(".timeline-duties" + i);
            let timelineTechStack = document.querySelector(".timeline-tech-stack" + i);

            gsap.from([timelineIcon, timelineThumbnail], {
                delay: 1,
                ease: "back.out",
                transformOrigin: "center",
                scaleX: .1,
                scaleY: .1,
                opacity: 0,
                scrollTrigger: {
                    trigger: [timelineIcon, timelineThumbnail],
                    start: 'top 100%',
                    end: 'bottom 10%',
                    toggleActions: 'restart reverse restart reverse'
                },
            });

            gsap.from([timelineTitle, timelineCompany], {
                delay: 0.5,
                duration: 0.5,
                ease: "ease.out",
                y: 200,
                opacity: 0,
                stagger: {
                    amount: 0.15
                },
                scrollTrigger: {
                    trigger: [timelineIcon, timelineThumbnail],
                    start: 'top 100%',
                    end: 'bottom 10%',
                    toggleActions: 'restart reverse restart reverse'
                },
            });

            gsap.from([timelineDuties], {
                duration: 1,
                x: 50,
                opacity: 0,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: [timelineDuties],
                    start: 'top 100%',/**/
                    end: 'bottom 10%',
                    toggleActions: 'restart reverse restart reverse'
                },
            });

            gsap.from([timelineTechStack], {
                delay: 1,
                ease: "back.out",
                transformOrigin: "center",
                scaleX: .8,
                scaleY: .8,
                opacity: 0,
                scrollTrigger: {
                    trigger: [timelineTechStack],
                    start: 'top 100%',
                    end: 'bottom 10%',
                    toggleActions: 'restart reverse restart reverse'
                },
            });
        }
    }

    render() {
        return (
            <div className={'page'}>
                <section id="colorlib-hero" className="js-fullheight timeline" data-section="timeline">
                    <div className="view main container">
                        <div className={'line-wrap'}>
                            <h1 className={'header center color'}>Strive not to be a success, but rather to be of
                                value</h1>
                        </div>
                        <div className={'line-wrap'}>
                            <div className={'caption center'}>
                                <em>- Albert Einstein -</em>
                            </div>
                        </div>
                        <hr className={'divider center'}/>
                        <div>
                            <ul className="timeline-body">
                                {
                                    TimelineItems.map((item, index) => {
                                        return (
                                            <li key={index} className={'timeline-event timeline-event' + (index + 1)}>
                                                <div className={'timeline-event-icon' + (index + 1)}>
                                                    <label className={'timeline-event-icon'}/>
                                                </div>
                                                <div className="timeline-event-copy">
                                                    <p className={'timeline-event-thumbnail timeline-event-thumbnail' + (index + 1)}>{item.dateRange}</p>
                                                    <div className={'line-wrap'}>
                                                        <h3 className={'color timeline-title' + (index + 1)}>{item.title}</h3>
                                                    </div>
                                                    <div className={'line-wrap'}>
                                                        <h4 className={'color timeline-company' + (index + 1)}>{item.company}</h4>
                                                    </div>
                                                    <ul className={'timeline-duties' + (index + 1)}>
                                                        {
                                                            item.duties.map((item, index) => {
                                                                return (
                                                                    <li key={index}>{item}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    <div className={'timeline-tech-stack timeline-tech-stack' + (index + 1)}>
                                                        {
                                                            item.techStacks.map((item, index) => {
                                                                return (
                                                                    <div key={index} className={'tech-stack-wrapper'}>
                                                                        <img className={'tech-stack-image'}
                                                                             src={item.link}
                                                                             title={item.altTxt}
                                                                             alt={'Logo of ' + item.altTxt}/>
                                                                        <div className="middle-wrapper translate middle">
                                                                            <span>{item.altTxt}</span>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <br/>
                    </div>
                </section>
            </div>
        )
    }
}
