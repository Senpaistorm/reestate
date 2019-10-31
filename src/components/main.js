import React from 'react'
import Search from './Search';
import MainOptions from './MainOptions';
import Footer from './Footer';
import HomesMain from './HomesMain';
import {Switch, Route} from 'react-router-dom';
import Profile from './Profile';
import PrivateRoute from "./PrivateRoute";
import SellPosting from "./SellPosting";
import RentPosting from "./RentPosting";

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
                    <HomesMain />
                </Route>
                <PrivateRoute path="/sell" component={SellPosting}  />
                <PrivateRoute path="/list_rental" component={RentPosting}  />
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/">
                    <Search />
                    <MainOptions />
                    <Footer />
                </Route>
            </Switch>
        )
    }
}

export default Main