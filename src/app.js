console.log("app.js is running...");

//JSX: JavaScript XML
const app = {
    title: 'Indecision Application',
    subtitle: 'Helping you making choices...',
    options: ['One', 'Two']
}

const onFormSubmit = (e) => {
    e.preventDefault();
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
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add option</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);