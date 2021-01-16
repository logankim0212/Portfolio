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
import NotFound from './components/404/NotFound'

class App extends Component {
    render() {
        console.log('Welcome to Logan\'s portfolio!')
        console.log('My path in software engineering began in 2017. I majored in software engineering, graduated ' +
            'with high honours, and gained professional experience in both the private and public sectors to ' +
            'broaden my horizons. I am currently a senior software engineer at an applied research centre of ' +
            'Centennial College.')
        console.log('This portfolio is build with React along with Gsap for animations.')
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

        return (
            <Router basename="/Portfolio">
                <Navbar/>
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            in={true}
                            timeout={1200}
                            classNames='fade'
                            onEntering={onEnter}
                            unmountOnExit>
                            <Switch location={location}>
                                <Route exact path={'/'} component={Home}/>
                                <Route exact path={'/about'} component={About}/>
                                <Route exact path={'/projects'} component={Projects}/>
                                <Route exact path={'/timeline'} component={Timeline}/>
                                <Route exact path={'/contact'} component={Contact}/>
                                <Route exact path='*' component={NotFound}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}/>
            </Router>
        );
    }
}

export default App;
