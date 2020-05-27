import React from 'react';
import { Home, Contact1, About1 } from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import KeyExample from '../KeyExample';
import EventExample from '../EventExample';
import Form from '../FOrm';
import REFExample from '../REFExample';
import { Hook } from '../hooks/hook';

class Nav extends React.Component {
    render() {
        return (
            <Router>
                <div className='Nav'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                        <li>
                            <Link to="/KeyExample">KeyExample</Link>
                        </li>
                        <li>
                            <Link to="/EventExample">EventExample</Link>
                        </li>
                        <li>
                            <Link to="/Form">Form</Link>
                        </li>
                        <li>
                            <Link to="/REFExample">REFExample</Link>
                        </li>
                        <li>
                            <Link to="/Hook">Hook</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Hook} />
                    <Route path="/about" component={About1} />
                    <Route path="/topics" component={Contact1} />
                    <Route path="/KeyExample" component={KeyExample} />
                    <Route path="/EventExample" component={EventExample} />
                    <Route path="/Form" component={Form} />
                    <Route path="/REFExample" component={REFExample} />
                    <Route path="/Home" component={Home} />
                </div>
            </Router>
        );
    }
}
export default Nav;