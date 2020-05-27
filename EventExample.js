import React, { Component } from 'react'
class EventExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Init Data'
        }
        this.submitData = this.submitData.bind(this)
    }

    submitData(e) {
        this.setState({ data: e.target.data })
        console.log(e.target.id)
    }

    render() {
        return (
            <div>
                <input value={this.state.data} onChange={this.submitData} name="text" id ="msg"></input>
                <button onClick={this.submitData} name="submitButton">Submit</button>
            </div>
        );
    }
}

export default EventExample;