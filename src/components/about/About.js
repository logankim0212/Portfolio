import React, {Component} from 'react'
import '../about/About.scss';
import {TweenMax, TimelineMax, gsap} from "gsap";
import {Languages, FrameworksAndLibraries, DbmsAndServers, DesignAndManagements} from "./AboutItems";

export default class About extends Component {
    componentDidMount() {
        document.title = "About - Logan's Portfolio";

        let aboutHeader = document.querySelector(".header");
        let caption = document.querySelector(".caption");
        let picture = document.querySelector(".content__img");
        let divider = document.querySelector(".divider");
        let aboutTitles = document.querySelectorAll(".about-title");
        let aboutTexts = document.querySelectorAll(".about-text");
        let aboutTechTitles = document.querySelectorAll(".about-tech-title");
        let aboutTechImages = document.querySelectorAll(".about-tech-image");
        let aboutTechAreas = document.querySelectorAll(".about-tech-area");
        let tm = new TimelineMax();

        TweenMax.from([aboutHeader, caption], 1.3, {
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

        TweenMax.from([picture], 1.3, {
            delay: 1.3,
            ease: "back.out",
            transformOrigin: "center",
            scaleX: .5, scaleY: .5,
            opacity: 0,
            stagger: {
                amount: 0.15
            }
        });

        setTimeout(() => {
            tm
                .to([picture], 0.7, {
                    rotation: 7
                })
                .to([picture], 2, {
                    rotation: 0,
                    ease: "elastic.out(0.9, 0.3)"
                });
        }, 800)

        for (let i = 0; i < aboutTitles.length; i++) {
            gsap.from([aboutTitles[i]], {
                delay: 0.5,
                duration: 0.8,
                ease: "ease.out",
                y: 200,
                opacity: 0,
                stagger: {
                    amount: 0.15
                },
                scrollTrigger: {
                    trigger: [aboutTitles[i]],
                    start: 'top 95%',
                    end: 'bottom 5%',
                    toggleActions: 'restart reverse restart reverse'
                },
            });
        }

        for (let i = 0; i < aboutTexts.length; i++) {
            gsap.from([aboutTexts[i]], {
                delay: 0.5,
                duration: 0.8,
                y: 100,
                opacity: 0,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: [aboutTexts[i]],
                    start: 'top 95%',/**/
                    end: 'bottom 10%',
                    toggleActions: 'restart reverse restart reverse'
                },
            });
        }

        for (let i = 0; i < aboutTechTitles.length; i++) {
            gsap.from([aboutTechTitles[i]], {
                delay: 0.5,
                duration: 0.8,
                ease: "ease.out",
                y: 200,
                opacity: 0,
                stagger: {
                    amount: 0.15
                },
                scrollTrigger: {
                    trigger: [aboutTechTitles[i]],
                    start: 'top 95%',
                    end: 'bottom 5%',
                    toggleActions: 'restart reverse restart reverse'
                },
            });
        }

        for (let i = 0; i < aboutTechImages.length; i++) {
            let xVal = 0;

            if (i % 2 === 0) {
                xVal = -100;
            } else {
                xVal = 100;
            }

            gsap.from([aboutTechImages[i]], {
                delay: 0.5,
                duration: 0.8,
                ease: "ease.out",
                x: xVal,
                opacity: 0,
                stagger: {
                    amount: 0.15
                },
                scrollTrigger: {
                    trigger: [aboutTechImages[i]],
                    start: 'top 95%',
                    end: 'bottom 5%',
                    toggleActions: 'restart reverse restart reverse'
                },
            });
        }

        for (let i = 0; i < aboutTechAreas.length; i++) {
            gsap.from([aboutTechAreas[i]], {
                delay: 0.5,
                duration: 0.8,
                ease: "back.out",
                transformOrigin: "center",
                scaleX: .3,
                scaleY: .3,
                opacity: 0,
                scrollTrigger: {
                    trigger: [aboutTechAreas[i]],
                    start: 'top 95%',
                    end: 'bottom 10%',
                    toggleActions: 'restart reverse restart reverse'
                },
            });
        }
    }

    render() {
        const pageHeader = 'I am who I am and I have the need to be';
        const pageCaption = '- The Little Prince -';

        return (
            <div className={'page'}>
                <section id="colorlib-hero" className="js-fullheight about" data-section="about">
                    <div className="view main content">
                        <div className={'header-section'}>
                            <div className={'line-wrap'}>
                                <h1 className={'header color'}>{pageHeader}</h1>
                            </div>
                            <div className={'line-wrap'}>
                                <div className={'caption'}>
                                    <em>{pageCaption}</em>
                                </div>
                            </div>
                            <hr className={'divider center'}/>
                        </div>
                        <div className={'about-content'}>
                            <img className="content__img" src={'./images/about.jpg'}
                                 alt={'Logan playing an acoustic guitar around a campfire'}/>
                            <div className="content__txt">
                                <p className={'about-text'}>Hey there! I'm Logan Kim. Feel free to call me Logan.</p>
                                <br/>
                                <div className={'line-wrap'}>
                                    <h2 className={'about-title'}>I am a creative software engineer in Toronto.</h2>
                                </div>
                                <p className={'about-text'}>I'm also a good friend, a passionate reader, a part-time
                                    foodie,
                                    a travel enthusiast, a movie fanatic, and an ex lead guitarist of a Korean rock band
                                    THE'Z.</p>
                                <br/>
                                <br/>
                                <div className={'line-wrap'}>
                                    <h2 className={'about-title'}>What makes me different?</h2>
                                </div>
                                <p className={'about-text'}>I approach from a different perspectives and deliver
                                    efficient and effective solution
                                    incorporating my creative mindset. This is what keeps me up at night and I will not
                                    stop sharing my creativity and passion.</p>
                            </div>
                            <div className={'about-skills'}>
                                <div className={'line-wrap'}>
                                    <h2 className={'about-title'}>What can I offer?</h2>
                                </div>
                                <div className={'about-tech'}>
                                    <img className={'about-tech-image l'} src={'./images/about/roma-exterior.jpg'}
                                         alt={'Engine room of Ferrari Roma'}/>
                                    <div className={'about-tech-panel r'}>
                                        <div className={'line-wrap'}>
                                            <h3 className={'about-tech-title color'}>Languages</h3>
                                        </div>
                                        <div className={'about-tech-area'}>
                                            {
                                                Languages.map((item, index) => {
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
                                </div>
                                <div className={'about-tech flex'}>
                                    <div className={'about-tech-panel l a'}>
                                        <div className={'line-wrap'}>
                                            <h3 className={'about-tech-title color'}>Frameworks & Libraries</h3>
                                        </div>
                                        <div className={'about-tech-area'}>
                                            {
                                                FrameworksAndLibraries.map((item, index) => {
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
                                    <img className={'about-tech-image r b'} src={'./images/about/ferrari-frame.jpg'}
                                         alt={'Frame of Ferrari car'}/>
                                </div>
                                <div className={'about-tech'}>
                                    <img className={'about-tech-image l'} src={'./images/about/roma-engine.jpeg'}
                                         alt={'Car sketch from Fisker Automotive'}/>
                                    <div className={'about-tech-panel r'}>
                                        <div className={'line-wrap'}>
                                            <h3 className={'about-tech-title color'}>DBMS & Servers</h3>
                                        </div>
                                        <div className={'about-tech-area'}>
                                            {
                                                DbmsAndServers.map((item, index) => {
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
                                </div>
                                <div className={'about-tech flex'}>
                                    <div className={'about-tech-panel l a'}>
                                        <div className={'line-wrap'}>
                                            <h3 className={'about-tech-title color'}>Managements & Design</h3>
                                        </div>
                                        <div className={'about-tech-area'}>
                                            {
                                                DesignAndManagements.map((item, index) => {
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
                                    <img className={'about-tech-image r b'} src={'./images/about/car-sketch.jpg'}
                                         alt={'Exterior of Ferrari Roma'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
