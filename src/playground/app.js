// Author: Aniruddh Muley

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            // optionsArray: props.optionsArray
            optionsArray: []
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
        
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            this.setState(() => ({ optionsArray: options }));
        }
        catch(e) {
            // Do nothing
        }
        
    }

    componentDidUpdate(prevProps, prevState){                   // prevProps responsible for inheriting the property
        // Saving Data to local storage
        if(prevState.optionsArray.length !== this.state.optionsArray.length){
            const json = JSON.stringify(this.state.optionsArray);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount(){
        // Used when we get directed to some other page 
    }

    handleDeleteOptions(){
        this.setState(() => ({ optionsArray: [] }));
    }

    handleDeleteSingleOption(optionToRemove){
        this.setState((prevState) => ({
            optionsArray: prevState.optionsArray.filter((option) => {
                return (optionToRemove !== option)                      // Returns true or false, since filter method is being used
            })
        }));
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

        this.setState((prevState) => ({ optionsArray: prevState.optionsArray.concat(option) }));
    }

    render(){
        const subtitle = 'Assisting you to take your decisions';

        return(
            <div>
                <Header subtitle={subtitle} />

                <Action 
                    hasOptions={this.state.optionsArray.length > 0} 
                    handlePick={this.handlePick}
                />

                <Options 
                    options={this.state.optionsArray} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteSingleOption={this.handleDeleteSingleOption}
                />

                <AddOption  
                    options={this.state.optionsArray} 
                    handleAddOptions={this.handleAddOptions}
                />  
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     optionsArray: []
// }

// class Header extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

// class Action extends React.Component {
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!(this.props.hasOptions)}>
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return(
        <div>
            <button onClick={props.handlePick} disabled={!(props.hasOptions)}>
                What should I do?
            </button>
        </div>
    );
}

// class Options extends React.Component {
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <p>The list of the components of the array are: </p>
//                 {
//                     this.props.options.map((opt) => <Option key={opt} optionText={opt} />)
//                 }
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Your list seems to be empty. Add your tasks here</p>}
            {
                props.options.map((opt) => (
                    <Option 
                        key={opt} 
                        optionText={opt} 
                        handleDeleteSingleOption={props.handleDeleteSingleOption}
                    />
                ))
            }
        </div>
    );
}

// class Option extends React.Component {
//     render(){
//         return(
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button onClick={() => {                   // Here we did not use the reference method since it did not pass optionText property, but the object.
                props.handleDeleteSingleOption(props.optionText)
            }}>
                Remove
            </button>
        </div>
    );
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

        this.setState(() => ({ error }));

        if(!error){
            e.target.elements.option.value = '';
        }
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

// Stateless Functional Component Pattern
// const User = (props) => {
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }

// ReactDOM.render(<User name="Aniruddh" age={18} />, document.getElementById('app'));
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));