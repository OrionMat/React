import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            toDos: [],
            editing: false,
        };
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

    handleEdit() {
        alert("Editing")
        this.setState({editing: true})
    }

    handleSave() {
        this.setState({editing: false})
    }

    handleDelete() {
        alert("deleting")
    }
    
    render() {
        return (
            <div>
                <div>
                    {this.state.toDos.map((el) => 
                        <div>
                            <div>{el}</div>
                            <button onClick={() => this.handleEdit()}>Edit</button>
                            <button onClick={() => this.handleDelete()}>Delete</button>    
                        </div>                
                    )}
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" placeholder="Add a to-do!" value={this.state.value} onChange={(event) => this.handleChange(event)} />
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