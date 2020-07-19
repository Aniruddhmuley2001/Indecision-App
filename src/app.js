class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            optionsArray: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                optionsArray: []
            }
        })
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.optionsArray.length);
        const option = this.state.optionsArray[randomNum];
        alert(option);
    }

    handleAddOptions(option){
        // Validation of string input for adding item
        if(!option){
            return 'Enter valid value to add item'
        }
        else if(this.state.optionsArray.indexOf(option) > -1){
            return 'This option already exsits'
        }

        this.setState((prevState) => {
            return {
                optionsArray: prevState.optionsArray.concat(option)
            }
        })
    }

    render(){
        const title = 'Indecision App';
        const subtitle = 'Assisting you to take your decisions';

        return(
            <div>
                <Header 
                    title={title} 
                    subtitle={subtitle}
                />

                <Action 
                    hasOptions={this.state.optionsArray.length > 0} 
                    handlePick={this.handlePick}
                />

                <Options 
                    options={this.state.optionsArray} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                />

                <AddOption  
                    options={this.state.optionsArray} 
                    handleAddOptions={this.handleAddOptions}
                />  
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
    render(){
        return(
            <div>
                <button onClick={this.props.handlePick} disabled={!(this.props.hasOptions)}>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
    constructor(props){                                 // Since we are using 'this' inside handleAddOptions method
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOptions(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);

        // if(option){
        //     this.props.handleAddOptions(option);
        //     e.target.option.value = '';
        // }

        this.setState(() => {
            return {
                error
            };
        });
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option" />
                    <button>Add Option</button>                
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));