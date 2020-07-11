console.log("app.js is running...");

//JSX: JavaScript XML
const app = {
    title: 'Indecision Application',
    subtitle: 'Helping you take the right decision',
    options: ['One', 'Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    console.log('addOne', count, count);
}
const minusOne = () => {
    count--;
}
const reset = () => {
    count = 0;
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button> &emsp;
        <button onClick={minusOne}>-1</button> &emsp;
        <button onClick={reset}>Reset</button> &emsp;
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
// ReactDOM.render(templateTwo, appRoot);