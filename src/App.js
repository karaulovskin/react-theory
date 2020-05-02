import React, {Component} from 'react'
import classes from './App.module.scss'
import {Route} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'

class App extends Component {
    render() {

        return (
            <div>
                <nav className={classes.Nav}>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>

                <hr/>

                <Route path="/" exact render={() => <h1>Home Page</h1>} />

                <About />

                <Cars />
            </div>
        );
    }
}

export default App
