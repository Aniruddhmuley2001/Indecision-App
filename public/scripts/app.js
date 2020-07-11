'use strict';

console.log("app.js is running...");

//JSX: JavaScript XML
var app = {
    title: 'Indecision Application',
    subtitle: 'Helping you take the right decision',
    options: ['One', 'Two']
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
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    console.log('addOne', count, count);
};
var minusOne = function minusOne() {
    count--;
};
var reset = function reset() {
    count = 0;
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    ' \u2003',
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    ' \u2003',
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    ),
    ' \u2003'
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
// ReactDOM.render(templateTwo, appRoot);
