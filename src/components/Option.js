import React from 'react';

const Option = (props) => (
    <div>
        {props.optionText}
        <button onClick={() => {                   // Here we did not use the reference method since it did not pass optionText property, but the object.
            props.handleDeleteSingleOption(props.optionText)
        }}>
            Remove
        </button>
    </div>
);

export default Option;