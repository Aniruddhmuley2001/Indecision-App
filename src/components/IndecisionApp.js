import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    state = {
        optionsArray: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ optionsArray: [] }));
    };

    handleDeleteSingleOption = (optionToRemove) => {
        this.setState((prevState) => ({
            optionsArray: prevState.optionsArray.filter((option) => {
                return (optionToRemove !== option)                      // Returns true or false, since filter method is being used
            })
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.optionsArray.length);
        const option = this.state.optionsArray[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    };

    handleAddOptions = (option) => {
        // Validation of string input for adding item
        if(!option){
            return 'Enter valid value to add item'
        }
        else if(this.state.optionsArray.indexOf(option) > -1){
            return 'This option already exsits'
        }

        this.setState((prevState) => ({ optionsArray: prevState.optionsArray.concat(option) }));
    };

    handleSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    };

    componentDidMount(){
        const json = localStorage.getItem('options');
        if (json) {
            // truthy and exists (i.e. not null or undefined)
            try {
                const options = JSON.parse(json);
                this.setState(() => ({ optionsArray: options }));
            } catch(err) {
                // handle error, likely from bad JSON parsing
            }
        }
    }

    componentDidUpdate(prevProps, prevState){                   // prevProps responsible for inheriting the property
        // Saving Data to local storage
        if((prevState.optionsArray.length) !== (this.state.optionsArray.length)){
            const json = JSON.stringify(this.state.optionsArray);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount(){
        // Used when we get directed to some other page 
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
                
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleSelectedOption={this.handleSelectedOption}
                />
            </div>
        );
    }
}