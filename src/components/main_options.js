import React, { PureComponent } from 'react'
import {Col, Row} from 'react-bootstrap'

import '../css/main_options.css';

class Main_options extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div id="main_ops_container">
                <div id="row_main_btn">
                    <div className="main_options_btn">Buy a home</div>
                    <div className="main_options_btn">Sell a home</div>
                    <div className="main_options_btn">Rent a home</div>
                </div>
            </div>
        )
    }
}

export default Main_options