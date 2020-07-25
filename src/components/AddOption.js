import React from 'react';

export default class AddOption extends React.Component {
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