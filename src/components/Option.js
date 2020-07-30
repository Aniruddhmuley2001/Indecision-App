import React from 'react';

const Option = (props) => (
    <div>
        <div className="widget__add">
            <p className="widget--optionText">{props.optionText}</p>
            <button 
                className="button button--link"
                onClick={() => {                   // Here we did not use the reference method since it did not pass optionText property, but the object.
                    props.handleDeleteSingleOption(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    </div>
);

export default Option;