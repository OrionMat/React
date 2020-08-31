import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            toDos: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const toDos = this.state.toDos.slice();
        const addition = this.state.value;
        this.setState({toDos: toDos.concat(addition)})
        this.setState({value: ''})
    }
    
    render() {
        return (
            <div>
                <ol>
                    {this.state.toDos.map((el) => <li>{el}</li>)}
                </ol>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add a to-do!" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <h1>
            To-do List:
        </h1>
        <List/>
    </div>,
    document.getElementById('root')
);