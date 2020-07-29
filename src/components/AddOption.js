import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    // constructor(props){                                 // Since we are using 'this' inside handleAddOptions method
    //     super(props);
        // this.handleAddOptions = this.handleAddOptions.bind(this);
        // this.state = {
        //     error: undefined
        // };
    // }
    handleAddOptions = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);

        this.setState(() => ({ error }));

        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p className="widget__message">{this.state.error}</p>}
                <form 
                    onSubmit={this.handleAddOptions}
                    className="widget__add"
                >
                    <input 
                        type="text" 
                        name="option" 
                        className="widget__add--input"
                    />
                    <button className="button">Add Option</button>                
                </form>
            </div>
        );
    }
}