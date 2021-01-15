import React, {Component} from 'react'
import '../about/About.scss';
import {TweenMax, TimelineMax} from "gsap";
import {Languages, FrameworksAndLibraries, DbmsAndServers, DesignAndManagements} from "./AboutItems";

export default class About extends Component {
    componentDidMount() {
        document.title = "About - Logan's Portfolio";

        let aboutHeader = document.querySelector(".header");
        let caption = document.querySelector(".caption");
        let picture = document.querySelector(".content__img");
        let divider = document.querySelector(".divider");
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
    }

    render() {
        return (
            <div className={'page'}>
                <section id="colorlib-hero" className="js-fullheight about" data-section="about">
                    <div className="view main content">
                        <div className={'header-section'}>
                            <div className={'line-wrap'}>
                                <h1 className={'header color'}>I am who I am and I have the need to be</h1>
                            </div>
                            <div className={'line-wrap'}>
                                <div className={'caption'}>
                                    <em>- The Little Prince -</em>
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
                                <h2 className={'about-title'}>I am an creative software engineer in Toronto.</h2>
                                <p className={'about-text'}>I'm also a good friend, a passionate reader, a part-time foodie,
                                    a travel enthusiast, a movie fanatic, and an ex lead guitarist of a Korean rock band THE'Z.</p>
                                <br/>
                                <br/>
                                <h2 className={'about-title'}>What makes me different?</h2>
                                <p className={'about-text'}>I approach from a different perspectives and deliver
                                    efficient and effective solution
                                    incorporating my creative mindset. This is what keeps me up at night and I will not
                                    stop sharing my creativity and passion.</p>
                            </div>
                            <div className={'about-skills'}>
                                <h2 className={'about-title'}>What can I offer?</h2>
                                <div className={'about-tech'}>
                                    <img className={'about-tech-image l'} src={'./images/about/roma-exterior.jpg'}
                                         alt={'Engine room of Ferrari Roma'}/>
                                    <div className={'about-tech-panel r'}>
                                        <h3 className={'about-tech-title'}>Languages</h3>
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
                                        <h3 className={'about-tech-title'}>Frameworks & Libraries</h3>
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
                                        <h3 className={'about-tech-title'}>DBMS & Servers</h3>
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
                                        <h3 className={'about-tech-title'}>Managements & Design</h3>
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
