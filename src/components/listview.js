import React from 'react'
import Footer from './Footer'
import '../css/footer.css'

class Listview extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        }
    }


    render() {
        return (
            <div id="list_display_c" className="container">
                <p>list view</p>
                <div className="row">
                    {this.state.data.map((n) => {
                        return <div className="col-6">
                            Box {n}
                        </div>
                    })}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Listview