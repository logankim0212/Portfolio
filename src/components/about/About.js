import React, {Component} from 'react'
import '../about/About.scss';
import {TweenMax, TimelineMax} from "gsap";

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
                            <img className="content__img" src={'/Portfolio/images/about.jpg'}
                                 alt={'Logan playing an acoustic guitar around a campfire'}/>
                            <div className="content__txt">
                                <p>while(passion) &#123; this.buildNext(idea++); &#125;</p>
                                <p>I always liked playing with LEGO blocks in my childhood. I was fascinated to see so
                                    many different outcomes that I could have with the same number of blocks. I never
                                    got tired of it as I could simply break and build another world of my own once I was
                                    done. A world that I built had its own beauty; however, I was not satisfied with
                                    just one world as I knew my next world would enlighten me with the beauty of its
                                    own. I could get an infinite number of my own beautiful worlds as long as I approach
                                    them with different perspectives and creativity.</p>
                                <p>Software engineering calls to all the passions that I had with LEGO blocks ever
                                    since I was a kid. In a virtual environment, I can build my own world as many and as
                                    big as I want with unlimited resources incorporating my creativity. Codes can be
                                    reused and there is always room for improvement. Shout out to the software community
                                    for sharing many open sources and welcoming beginners. Since I learned about the
                                    world of software engineering, I knew this is the career that I would love to pursue
                                    for the rest of my life.</p>
                                <p>I still vividly recall my first semester as a software engineering major. I built my
                                    first web page in HTML and CSS, as well as a simple calculator in C# that has been
                                    made many people’s lives easy for a long time. I studied as hard as I could as I
                                    felt a thirst for knowledge. I loved to learn new languages and technologies,
                                    implemented them to see better outcomes with an easier way to develop. Then, I
                                    realized that I desire to see people around me benefited from my own works and I
                                    need to gain more experience to learn how to be more practical. This led me to join
                                    a co-op program. More than a year of professional experience not only allowed me to
                                    visualize how to transform my academic knowledge to practical use, it also taught me
                                    how to explore and use various enterprise-level technologies.</p>
                                <p>As a software engineer who graduated in December 2020 with high honours, my
                                    expertise lies in the following:</p>
                                <ul>
                                    <li><strong>Languages:</strong> Java, JavaScript, C# (.NET), Python, HTML, CSS,
                                        TypeScript, SQL, PL/SQL, PHP
                                    </li>
                                    <li><strong>Frameworks/Libraries:</strong> Spring, ASP.NET, Angular, React, React
                                        Native, Node.js, JUnit, Selenium
                                    </li>
                                    <li><strong>DBMS/Server:</strong> Firebase, Azure, AWS, Oracle, MySQL, MSSQL,
                                        DynamoDB, MongoDB, J2EE, Jenkins
                                    </li>
                                </ul>
                                <p>This is what keeps me up at night and I will not stop creating a new beautiful world
                                    with my next creativity and passion. I can’t wait to share them with the world! </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
