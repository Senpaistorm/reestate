import React from 'react'
import {Link} from 'react-router-dom'

import '../css/main_options.css';

function MainOptions(){

    const buttons= [
                {
                    id: "b1",
                    label: "Buy a home",
                    link: "/homes",
                    description: `Find your place with an immersive photo 
                    experience and the most listings, including things you won't find anywhere else.`
                },
                {
                    id: "b2",
                    label: "Sell a home",
                    link: "/homes",
                    description: `We will help you navigate the path to a successful sale.`
                },
                {
                    id: "b3",
                    label: "Rent a home",
                    link: "/homes",
                    description: `We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.`
                }
            ];
    const buttonsList = buttons.map((btn) =>{
        return <Link id={btn.id} key={btn.id} to={btn.link} className="col main_options_btn">
                    <h2>{btn.label}</h2>
                    <div>{btn.description}</div>
                </Link>
    });
    
    return (
        <div id="main_ops_container">
            <div className="row" id="row_main_btn">
                {buttonsList}
            </div>
        </div>
    )
    
}

export default MainOptions