import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import {TweenMax} from 'gsap';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Timeline from './components/timeline/Timeline';
import Contact from './components/contact/Contact';

class App extends Component {
    render() {
        const onEnter = node => {
            TweenMax.from(
                [node.children[0].firstElementChild, node.children[0].lastElementChild],
                1.1,
                {
                    y: 30,
                    delay: 1.1,
                    opacity: 0,
                    ease: "power3.InOut"
                }
            );
        };

        const onExit = node => {
            TweenMax.to(
                [node.children[0].firstElementChild, node.children[0].lastElementChild],
                0.5,
                {
                    transformOrigin: "center",
                    scaleX: .9, scaleY: .9,
                    ease: "back.InOut",
                    opacity: 1,
                    stagger: {
                        amount: 0.2
                    }
                }
            );
        };

        return (
            <Router>
                <Navbar/>
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            in={true}
                            timeout={1200}
                            classNames='fade'
                            onExit={onExit}
                            onEntering={onEnter}
                            unmountOnExit>
                            <Switch location={location}>
                                <Route exact path={'/'} component={Home}/>
                                <Route exact path={'/about'} component={About}/>
                                <Route exact path={'/projects'} component={Projects}/>
                                <Route exact path={'/timeline'} component={Timeline}/>
                                <Route exact path={'/contact'} component={Contact}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}/>
            </Router>
        );
    }
}

export default App;
