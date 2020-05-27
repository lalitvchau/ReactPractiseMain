import React, { Component } from 'react';
import PropTypes from 'prop-types'
import StateExample from './StateExample';
import Nav from './nav-example/Nav';

class App extends Component {
    render() {

        return (
            <div>
                <Nav/>
                <Header />
                {
                <Content />}
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div>Header of test App</div>
        );
    }
}
class Content extends Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        "id": 1,
                        "name": "Foo",
                        "age": "20"
                    },
                    {
                        "id": 2,
                        "name": "Bar",
                        "age": "30"
                    },
                    {
                        "id": 3,
                        "name": "Baz",
                        "age": "40"
                    }
                ]
        }
    }
    render() {
        var i = 1
        var myStyle = {
            fontSize: 100,
            color: '#456456',
        }
        return (
            <div>
                {i == 1 ? <h1 style={myStyle}><i>
                    {
                        this.state.data.map((person, i) => <TableView key={i} data={person} dataStore={new DataStore().state.name} />)

                    }</i></h1> : 'False'}
                {//THis is commnet ....
                    /**
                     * Multiline or Paragraph comments
                     */
                }

                <div>
                    <h2>Validation Props</h2>
                    <h3>Array: {this.props.propArray}</h3>
                    <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                    <h3>Func: {this.props.propFunc(3)}</h3>
                    <h3>Number: {this.props.propNumber}</h3>
                    <h3>String: {this.props.propString}</h3>
                    <h3>Object: {this.props.propObject.objectName1}</h3>
                    <h3>Object: {this.props.propObject.objectName2}</h3>
                    <h3>Object: {this.props.propObject.objectName3}</h3>
                    <StateExample />
                </div>
            </div>
        );
    }
}

Content.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object
}
Content.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (e) { return e },
    propNumber: 1,
    propString: "String value...",

    propObject: {
        objectName1: "objectValue1",
        objectName2: "objectValue2",
        objectName3: "objectValue3"
    }
}

class DataStore extends Component {
    constructor() {
        super();
        this.state = {
            name: "Lalit"
        }
    }
}

const Country = function () {
    cName = "india"
}

class TableView extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>{this.props.data.id}</td>
                            <td>{this.props.data.name}</td><td>{this.props.data.age}</td>
                            <td>{this.props.dataStore}</td>
                        </tr>
                    </tbody>
                </table>
                <h1>{this.props.auth}</h1>
            </div>
        );
    }
}
TableView.defaultProps = {
    auth: "Lalit v\'Chau"
}
export default App;