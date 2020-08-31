import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            editing: false,
        };
    }

    handleEdit() {
        this.setState({editing: true})
    }

    handleSave() {
        this.props.edit(this.refs.text.value, this.props.index)
        this.setState({editing: false})
    }

    handleDelete() {
        this.props.delete(this.props.index);
    }

    renderNormal() {
        return (
            <div>
                <div>{this.props.children}</div>
                <button onClick={() => this.handleEdit()}>Edit</button>
                <button onClick={(i) => this.handleDelete()}>Delete</button>    
            </div>
        );
    }

    renderEditing () {
        return (
            <div>
                <textarea ref="text" defaultValue={this.props.children}></textarea>
                <button onClick={() => this.handleSave()}>Save</button>
            </div>
        );
    }
    
    render() {
        if (this.state.editing) {
                return this.renderEditing();
            }
            else {
                return this.renderNormal();
            }
    }
}

class Container extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: '',
            toDos: [],
        }
    }

    deleteItem(i) {
        console.log('removing item ' + i);
        var toDos = this.state.toDos.slice();
        delete toDos[i];
        this.setState({toDos: toDos});
    }

    updateItem(text, i) {
        console.log('updating item ' + i);
        var toDos = this.state.toDos
        toDos[i] = text;
        this.setState({toDos: toDos});
    }

    renderItems(item, i) {
        return (
            <List 
                key={i} index={i} 
                delete={(i) => this.deleteItem(i)} 
                edit={(text, i) => this.updateItem(text, i)}>
                {item}
            </List>
        );
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

    render () {
        const toDos = this.state.toDos.slice()
        return (
            <div>
                <h1>
                    To-do List:
                </h1>
                {toDos.map((item, i) => this.renderItems(item, i))}
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" placeholder="Add a to-do!" value={this.state.value} onChange={(event) => this.handleChange(event)} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);