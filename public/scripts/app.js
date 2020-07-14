'use strict';

console.log("app.js is running...");

//JSX: JavaScript XML
var app = {
    title: 'Indecision Application',
    subtitle: 'Helping you making choices...',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderOptionsArray();
};

var onRemoveAll = function onRemoveAll(e) {
    app.options = [];
    renderOptionsArray();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var optionTaken = app.options[randomNum];
    alert(optionTaken);
};

var appRoot = document.getElementById('app');

var renderOptionsArray = function renderOptionsArray() {
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
            'p',
            null,
            'Length of the array: ',
            app.options.length
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onRemoveAll },
            'Remove all'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            'Help me!'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (opt) {
                return React.createElement(
                    'li',
                    { key: opt },
                    opt
                );
            })
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

    ReactDOM.render(template, appRoot);
};

renderOptionsArray();
