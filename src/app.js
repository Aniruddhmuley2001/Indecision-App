import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// IndecisionApp.defaultProps = {
//     optionsArray: []
// }

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


// class Option extends React.Component {
//     render(){
//         return(
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }



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

// -------------------------------------------------------------------------------------

// Understanding ES6 Class Properties
// class OldSyntax {
//     constructor(){
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting(){
//         return `Hi! My name is ${this.name}`
//     }
// }
// const oldSyntax = new OldSyntax;
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// //--------------------------------

// class NewSyntax {
//     name = 'Nick';
//     getGreeting = () => {
//         return `Hi! My name is ${this.name}`
//     }
// }
// const newSyntax = new NewSyntax;
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());