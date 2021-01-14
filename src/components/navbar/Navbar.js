import React, {Component} from 'react'
import './Navbar.scss';
import {MenuItems} from "./MenuItems";
import {NavLink} from 'react-router-dom';
import {RingLoader} from 'react-spinners';
import {connect} from 'react-redux'
import {fetchLoading, enableLoading, disableLoading} from '../../redux/actions'
import PropTypes from 'prop-types';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.toggleMenuIcon = this.toggleMenuIcon.bind(this);
        this.headerClicked = this.headerClicked.bind(this);
        this.linkClicked = this.linkClicked.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

        this.state = {
            active: false,
            updating: false,
            windowWidth: 0,
            windowHeight: 0
        };
    }

    componentDidMount() {
        this.props.fetchLoading();
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentDidUpdate = () => {
        let loaderStyle = document.querySelector(".loader").style;
        let logoStyle = document.querySelector(".logo-link").style;
        let menuListA = document.querySelector(".menu-ul");
        let menuListB = document.querySelectorAll(".menu-li");
        let navLink = document.querySelectorAll(".nav-links");
        let active = document.querySelector(".active");
        let opened = document.querySelector(".opened");

        if (this.state.windowWidth <= 1000) {
            if (this.state.active) {
                logoStyle.zIndex = "1";
                menuListA.style.display = "table";
                for (let i = 0; i < menuListB.length; i++) {
                    menuListB[i].style.zIndex = "10";
                }
            } else {
                logoStyle.zIndex = "-1";
                setTimeout(() => {
                    menuListA.style.display = "none";
                    for (let i = 0; i < menuListB.length; i++) {
                        menuListB[i].style.zIndex = "-10";
                    }
                }, 200)
            }
        } else {
            logoStyle.zIndex = "1";
            menuListA.style.display = "table";
            for (let i = 0; i < menuListB.length; i++) {
                menuListB[i].style.zIndex = "10";
            }
        }

        if (!this.state.updating && this.props.storage.loading) {
            this.setState({
                updating: true
            });

            loaderStyle.display = "block";
            logoStyle.pointerEvents = "none";

            for (let i = 0; i < navLink.length; i++) {
                navLink[i].style.pointerEvents = "none";
            }

            setTimeout(() => {
                loaderStyle.opacity = 1;
                document.body.style.overflowY = "hidden";
                loaderStyle.zIndex = "1";
            }, 1)

            setTimeout(() => {
                loaderStyle.opacity = 0;
            }, 1000)

            setTimeout(() => {
                document.body.style.overflowY = "auto";
                loaderStyle.zIndex = "-1";
                loaderStyle.display = "none";
                logoStyle.pointerEvents = "auto";

                for (let i = 0; i < navLink.length; i++) {
                    navLink[i].style.pointerEvents = "auto";
                }

                if (active !== null) {
                    active.style.pointerEvents = "none";
                }

                if (opened !== null) {
                    opened.style.pointerEvents = "none";
                }

                this.props.disableLoading();

                this.setState({
                    updating: false
                });
            }, 3000)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }

    toggleMenuIcon() {
        const currState = this.state.active;

        this.setState({
            active: !currState
        });
    };

    linkClicked() {
        this.props.enableLoading();

        window.scrollTo(0, 0);
        if (this.state.windowWidth <= 1000) {
            this.toggleMenuIcon();
        }
    }

    headerClicked() {
        this.props.enableLoading();

        this.setState({
            active: false
        });
    }

    render() {
        return (
            <div className={'navbar'}>
                <div className={'loader'}>
                    <div className={'loaderIcon'}>
                        <RingLoader
                            color={'#c5b358'}
                            loading={this.props.loading}/>
                    </div>
                </div>
                <div className={'copyright'}>

                </div>
                <div className={'nav-container'}>
                    <div className={'logo color'}>
                        <NavLink className={'logo-link color'} exact activeClassName='active' to={'/'}
                                 onClick={this.headerClicked}>
                            Logan J. Kim
                        </NavLink>
                    </div>
                    <div className={this.state.active ? 'menu-icon opened' : 'menu-icon'}
                         onClick={this.toggleMenuIcon}>
                        <div className="bar bar-1"/>
                        <div className="bar bar-2"/>
                        <div className="bar bar-3"/>
                    </div>
                    <div className={this.state.active ? 'menu opened' : 'menu'}>
                        <ul className="menu-ul">
                            {
                                MenuItems.map((item, index) => {
                                    return (
                                        <li key={index} className="menu-li">
                                            <NavLink className={item.cName} activeClassName='active active-menu'
                                                     to={item.url} onClick={this.linkClicked}>
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

Navbar.propTypes = {
    fetchLoading: PropTypes.func.isRequired,
    enableLoading: PropTypes.func.isRequired,
    disableLoading: PropTypes.func.isRequired,
    storage: PropTypes.object
};

const mapStateToProps = state => ({
    storage: state.storage
});

export default connect(mapStateToProps, {fetchLoading, enableLoading, disableLoading})(Navbar)
