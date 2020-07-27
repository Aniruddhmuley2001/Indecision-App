import React from "react";
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {(props.options.length === 0) && <p>Your list seems to be empty. Add your tasks here</p>}
        {
            (props.options.map((opt) => (
                <Option 
                    key={opt} 
                    optionText={opt} 
                    handleDeleteSingleOption={props.handleDeleteSingleOption}
                />
            )))
        }
    </div>
);

export default Options;