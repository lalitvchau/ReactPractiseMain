import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            data: 'Initial data...',
            name: 'Please Write Your Name'
        }
        this.updateState = this.updateState.bind(this);
        this.updateName = this.updateName.bind(this);
        this.cityChange = this.cityChange.bind(this);
    };
    updateState(e) {
        this.setState({ data: e.target.value });
    }
    updateName(e) {
        this.setState({ name: e.target.value });
    }
    cityChange(e) {
        this.setState({ city: e.target.value });
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.data}
                    onChange={this.updateState} id="data" />
                <h4>{this.state.data}</h4>
                <input type="text" value={this.state.name}
                    onChange={this.updateName} id="name" />
                <h4>{this.state.name}</h4>
                <Content city={this.state.city} cityHandler={this.cityChange}></Content>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                City = {this.props.city} <br />
                <input value={this.props.city} onChange={this.props.cityHandler} placeholder="Enter City"></input>
            </div>
        );
    }
}
export default Form;