import React from 'react';
import ReactDOM from 'react-dom';

class StateExample extends React.Component {


    constructor() {
        super();
        this.state = {
            data: []
        }
        this.setStateHandler = this.setStateHandler.bind(this)
        this.randomNumberHandler = this.randomNumberHandler.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    }
    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        var myDivReact = ReactDOM.findDOMNode(myDiv);

        if (myDivReact.style.color == 'red') {
            myDivReact.style.color = 'black';
        } else {
            myDivReact.style.color = 'red';
        }
    }
    setStateHandler() {
        var item = "Item 1"
        var myArray = this.state.data.slice();
        myArray.push(item);
        // console.log(myArray)
        /**
         * setState() method is used to update the state of the component. This method will not replace the state, but only add changes to the original state.
         */
        this.setState({ data: myArray })
    }
    randomNumberHandler() {
        this.forceUpdate();
    };

    render() {
        return (
            <div id="myDiv" onMouseOver={this.findDomNodeHandler}>
                <div > ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
                <button onClick={this.setStateHandler}> SET STATE</button>
                <h4>State Array = {this.state.data}</h4>
                <button onClick={this.randomNumberHandler}> Force STATE</button>
                <h4>Random number: {Math.random()}</h4>
            </div>
        );
    }

}
export default StateExample;