import React, { Component } from 'react'
class KeyExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'Lalit',
                    city:'Bangalore',
                    id: 1
                },
                {
                    name: 'Deepak',
                    city:'Bangalore',
                    id: 2
                },
                {
                    name: 'Chirayu',
                    city:'Bangalore',
                    id: 3
                },
                {
                    name: 'Namratha',
                    city:'Bangalore',
                    id: 4
                },
                {
                    name: 'Samata',
                    city:'Bangalore',
                    id: 5
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((students, i) =>
                        <Content key={i} students={students}></Content>)
                }
            </div>
        );
    }
}
class Content extends Component {
    render() {
        return (
            <div>
                <p>{this.props.students.id}   =    {this.props.students.name}   {this.props.students.city}</p>
            </div>
        );
    }
}

export default KeyExample;