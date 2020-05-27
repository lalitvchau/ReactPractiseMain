import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class REFExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Init Data'
        }
        this.submitData = this.submitData.bind(this)
        this.clearData = this.clearData.bind(this)
    }

    submitData(e) {
        this.setState({ data: e.target.data })
    }
    clearData(e) {
        //ReactDOM.findDOMNode(document.getElementById('msg1')).focus() //it's work
        //document.getElementById('msg1').focus() //it's work
        ReactDOM.findDOMNode(this.refs.msg).focus()
        this.setState({ data: '' })
    }

    render() {
        return (
            <div>
                <input value={this.state.data} onChange={this.submitData} name="text" id="msg1" ref="msg"></input>
                <button onClick={this.clearData} name="submitButton">Submit</button>
            </div>
        );
    }
}

export default REFExample;