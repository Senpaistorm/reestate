import React from 'react'
import Search from './search';
import Main_options from './main_options';
import Footer from './footer';
import Homes_main from './homes_main';
import {Switch, Route} from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Switch>
                <Route path="/homes">
                    <Homes_main />
                </Route>

                <Route path="/">
                    <Search />
                    <Main_options />
                    <Footer />
                </Route>
            </Switch>
        )
    }
}

export default Main