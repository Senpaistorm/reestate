import React, { Component, createRef } from 'react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class SellPosting extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            country: '', 
            region: '',
            address: '',
            city: '',
            bd: 0,
            ba: 0,

        };

        this.addressChange.bind(this);
    }

    selectCountry (val) {
        this.setState({ country: val });
    }
     
    selectRegion (val) {
        this.setState({ region: val });
    }
    
    addressChange = (e) =>{
        this.setState({address: e.target.value});
    }

    validateForm = () =>{

    }

    submitForm = () => {
        console.log("submitting form");
    }

    resetForm = () => {
        console.log("resetting form");
    }

    render() {
        const fields = [
            {
                label:"Address",
                type: "text",
                value: this.state.address,
                onChange: this.addressChange
            },
            {
                label: "City",
                type: "text",
            },
            {
                label: "Number of Bedrooms",
                type: "number",
            },
            {
                label: "Number of Bathrooms",
                type: "number",
            }

        ]
        const formFields = fields.map((data) =>{
            return (<div className="col-12">
                <label>{data.label}</label>
                <input value={data.value} onChange={data.onChange} type={data.type}/>
            </div>)
        })

        return (
            <div class="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Post a home for sale</h2>
                    </div>
                    <div className="col-12">
                        <label>Country</label>
                        <CountryDropdown
                        value={this.state.country}
                        onChange={(val) => this.selectCountry(val)} />
                    </div>
                    <div className="col-12" ref={this.selectRegionRef}>
                        <label>Region</label>
                        <RegionDropdown
                        country={this.state.country}
                        value={this.state.region}
                        onChange={(val) => this.selectRegion(val)} />
                    </div>
                    

                    {formFields}

                    <div className="col-6">
                        <button onClick={this.submitForm} className="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-6">
                        <button onClick={this.resetForm} className="btn btn-primary">Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SellPosting