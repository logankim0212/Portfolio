import React, {Component} from 'react'
import './Navbar.scss';
import {MenuItems} from "./MenuItems";
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    state = { clicked: false }

    render() {
        return (
            <div className={'navbar main'}>
                <div className={'logo color'}>
                    <NavLink className={'logo-link color'} exact activeClassName='active' to={'/'}>
                        Logan J. Kim
                    </NavLink>
                </div>
                <div className={'menu'}>
                    <ul>
                        {
                            MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink className={item.cName} activeClassName='active' to={item.url}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
