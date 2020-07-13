'use strict';

console.log("app.js is running...");

//JSX: JavaScript XML
var app = {
    title: 'Indecision Application',
    subtitle: 'Helping you making choices...',
    options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add option'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
