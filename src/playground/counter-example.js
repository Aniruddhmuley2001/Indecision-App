// Here, the ES6 version of JS used. To check it out by React Components, check out the pen on https://codepen.io/aniruddh_20/pen/ExPObyM?editors=0010

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button> &emsp;
            <button onClick={minusOne}>-1</button> &emsp;
            <button onClick={reset}>Reset</button> &emsp;
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}
renderCounterApp();