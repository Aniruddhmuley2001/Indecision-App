'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            optionsArray: props.optionsArray
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOptions = _this.handleAddOptions.bind(_this);
        _this.handleDeleteSingleOption = _this.handleDeleteSingleOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { optionsArray: [] };
            });
        }
    }, {
        key: 'handleDeleteSingleOption',
        value: function handleDeleteSingleOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    optionsArray: prevState.optionsArray.filter(function (option) {
                        return optionToRemove !== option; // Returns true or false, since filter method is being used
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.optionsArray.length);
            var option = this.state.optionsArray[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOptions',
        value: function handleAddOptions(option) {
            // Validation of string input for adding item
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.optionsArray.indexOf(option) > -1) {
                return 'This option already exsits';
            }

            this.setState(function (prevState) {
                return { optionsArray: prevState.optionsArray.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Assisting you to take your decisions';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.optionsArray.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.optionsArray,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteSingleOption: this.handleDeleteSingleOption
                }),
                React.createElement(AddOption, {
                    options: this.state.optionsArray,
                    handleAddOptions: this.handleAddOptions
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    optionsArray: []

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

};var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'

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

};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlePick, disabled: !props.hasOptions },
            'What should I do?'
        )
    );
};

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

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.map(function (opt) {
            return React.createElement(Option, {
                key: opt,
                optionText: opt,
                handleDeleteSingleOption: props.handleDeleteSingleOption
            });
        })
    );
};

// class Option extends React.Component {
//     render(){
//         return(
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    // Here we did not use the reference method since it did not pass optionText property, but the object.
                    props.handleDeleteSingleOption(props.optionText);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props)); // Since we are using 'this' inside handleAddOptions method


        _this2.handleAddOptions = _this2.handleAddOptions.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOptions',
        value: function handleAddOptions(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOptions(option);

            // if(option){
            //     this.props.handleAddOptions(option);
            //     e.target.option.value = '';
            // }

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOptions },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

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


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
