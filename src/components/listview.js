import React from 'react'
import Footer from './Footer'
import '../css/footer.css'

class Listview extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <p>list view</p>
                <Footer/>
            </div>
        )
    }
}

export default Listview