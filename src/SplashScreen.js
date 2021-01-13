import React, {Component} from 'react'
import './SplashScreen.scss';
import App from './App';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from './redux/store'

export default class SplashScreen extends Component {
    render() {
        window.onload = (event) => {
            let landingStyle = document.querySelector(".landing-animation").style;
            let headerStyle = document.querySelector(".index-header").style;

            landingStyle.backgroundColor = "#fafafa";
            setTimeout(function () {
                landingStyle.transition = "1s";
                landingStyle.backgroundColor = "#0e1111";
            }, 1);

            setTimeout(function () {
                headerStyle.opacity = "1";
            }, 1000);
            setTimeout(function () {
                landingStyle.opacity = "0";
                landingStyle.zIndex = "-1";
                document.body.style.overflow = "auto";

                (function (d) {
                    let s = d.createElement("script");
                    s.setAttribute("data-position", 2);
                    s.setAttribute("data-size", "small");
                    s.setAttribute("data-color", "#c5b358");
                    s.setAttribute("data-type", "3");
                    s.setAttribute("data-account", "MAOMam5abd");
                    s.setAttribute("src", "https://cdn.userway.org/widget.js");
                    (d.body || d.head).appendChild(s);
                })(document)
            }, 5000);
            setTimeout(function () {
                ReactDOM.render(
                    <Provider store={store}>
                        <App/>
                    </Provider>,
                    document.getElementById('root')
                );
            }, 4800);
        }

        return (
            <div className="landing-animation">
                <div className="index-header">
                    <span className="smoky-span">L</span><span className="smoky-span">o</span><span
                    className="smoky-span">g</span><span className="smoky-span">a</span><span
                    className="smoky-span">n</span><span className="smoky-span">&nbsp;J.&nbsp;</span><span
                    className="smoky-span">K</span><span className="smoky-span">i</span><span
                    className="smoky-span">m</span>
                </div>
            </div>
        )
    }
}
