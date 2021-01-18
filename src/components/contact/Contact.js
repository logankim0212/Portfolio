import React, {Component} from 'react'
import '../contact/Contact.scss';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {TweenMax} from "gsap";

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        document.title = "Contact - Logan's Portfolio";

        let header = document.querySelector(".header");
        let caption = document.querySelector(".caption");
        let divider = document.querySelector(".divider");
        let fromLeft = document.querySelectorAll(".from-left");
        let fromRight = document.querySelectorAll(".from-right");
        let contactForm = document.querySelectorAll(".contact-form");

        TweenMax.from([header, caption], 1.3, {
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

        TweenMax.from([fromLeft], 1.3, {
            delay: 1.3,
            ease: "power3.out",
            x: -100,
            opacity: 0,
            stagger: {
                amount: 0.15
            }
        });

        TweenMax.from([fromRight], 1.3, {
            delay: 1.3,
            ease: "power3.out",
            x: 100,
            opacity: 0,
            stagger: {
                amount: 0.15
            }
        });

        TweenMax.from([contactForm], 1.3, {
            delay: 1.3,
            ease: "back.out",
            transformOrigin: "center",
            scaleX: .7, scaleY: .7,
            opacity: 0,
            stagger: {
                amount: 0.15
            }
        });
    }

    submitForm(ev) {
        ev.preventDefault();

        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        const formMessageStyle = document.querySelector(".form-message").style;
        const formButtonStyle = document.querySelector(".form-button").style;
        const formMessageErrorStyle = document.querySelector(".form-message-error").style;

        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) {
                return;
            }

            if (xhr.status === 200) {
                form.reset();
                formMessageStyle.display = 'block';
                formButtonStyle.display = 'none';
            } else {
                formMessageErrorStyle.display = 'block';
            }
        };

        xhr.send(data);
    }

    render() {
        return (
            <div className={'page'}>
                <section id="colorlib-hero" className="js-fullheight contact" data-section="contact">
                    <div className="view main content">
                        <div className="wrap">
                            <div className="left vertical-middle">
                                <div className={'line-wrap'}>
                                    <h1 className={'header color'}>Invisible threads are the strongest ties</h1>
                                </div>
                                <div className={'line-wrap'}>
                                    <div className={'caption center'}>
                                        <em>- Fredrich Nietzsche -</em>
                                    </div>
                                </div>
                                <hr className={'divider center'}/>
                                <div className={'outer-section from-left'}>
                                    <div className={'icon-section'}>
                                        <MailOutlineIcon style={{fontSize: 60, color: '#696969'}}/>
                                    </div>
                                    <div className={'content-section'}>
                                        <a href="mailto:Logan.Kim0212@gmail.com">Logan.Kim0212@gmail.com</a>
                                    </div>
                                </div>
                                <div className={'outer-section from-right'}>
                                    <div className={'icon-section'}>
                                        <LinkedInIcon color="disabled" style={{fontSize: 60, color: '#696969'}}/>
                                    </div>
                                    <div className={'content-section'}>
                                        <a href="https://www.linkedin.com/in/logan-junhwi-kim/" target="_blank"
                                           rel="noreferrer">linkedin.com/in/Logan-Junhwi-Kim</a>
                                    </div>
                                </div>
                                <div className={'outer-section from-left'}>
                                    <div className={'icon-section'}>
                                        <GitHubIcon style={{fontSize: 60, color: '#696969'}}/>
                                    </div>
                                    <div className={'content-section'}>
                                        <a href="https://github.com/logankim0212" target="_blank"
                                           rel="noreferrer">github.com/LoganKim0212</a>
                                    </div>
                                </div>
                                <div className={'outer-section from-right'}>
                                    <div className={'icon-section'}>
                                        <LocationOnOutlinedIcon style={{fontSize: 60, color: '#696969'}}/>
                                    </div>
                                    <div className={'content-section'}>
                                        Richmond Hill, Ontario
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form right vertical-middle">
                            <h2 className={'sub-header'}>Let's Talk</h2>
                            <form
                                onSubmit={this.submitForm}
                                action="https://formspree.io/f/xaylarqb"
                                method="POST">
                                <input type="text" name="_gotcha" style={{display: "none"}}/>
                                <input className={'contact-form-input'}
                                       typeof={'email'}
                                       name="email"
                                       placeholder="Email"/>
                                <input className={'contact-form-input'}
                                       typeof={'name'}
                                       name="name"
                                       placeholder="Name"/>
                                <textarea className={'contact-form-input message'}
                                          typeof={'text'}
                                          name="message"
                                          placeholder="Message"/>
                                <br/>
                                <p className={'form-message'}>Thanks, talk soon!</p>
                                <button className={'form-button'}>Send</button>
                                <p className={'form-message-error'}>Ooops! There was an error.</p>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
