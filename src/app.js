class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision App';
        const subtitle = 'Assisting you to take your decisions';
        const optionsArray = ['Task 1', 'Task 2', 'Task 4'];

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={optionsArray}/>
                <AddOption />  
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handleClick(){
        alert('You must go for Option ');
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll(){
        alert('You have clicked the button for removing all options')
    }
    render(){
        return(
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
                <p>The length of the optionsArray = {this.props.options.length}</p>
                <p>The list of the components of the array are: </p>
                {
                    this.props.options.map((opt) => <Option key={opt} optionText={opt} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddButton(e){
        e.preventDefault();

        const option = e.target.option.value.trim();

        if(option){
            alert(option);
            e.target.option.value = '';
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleAddButton}>
                    <input type="text" name="option" />
                    <button>Add Option</button>                
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));