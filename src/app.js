console.log("app.js is running...");

//JSX: JavaScript XML
const app = {
    title: 'Indecision Application',
    subtitle: 'Helping you making choices...',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderOptionsArray();
}

const onRemoveAll = (e) => {
    app.options = [];
    renderOptionsArray();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const optionTaken = app.options[randomNum];
    alert(optionTaken);
}

const appRoot = document.getElementById('app');

const renderOptionsArray = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>Length of the array: {app.options.length}</p>
            <button disabled={app.options.length == 0} onClick={onRemoveAll}>Remove all</button>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>Help me!</button>

            <ol>
                {
                    app.options.map((opt) => {
                        return <li key={opt}>{opt}</li>;
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderOptionsArray();