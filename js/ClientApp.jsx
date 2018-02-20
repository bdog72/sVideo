const ce = React.createElement;

const MyTitle = function(props) {
    return ce(
        'div',
        null,
        ce('h1', { style: { color: props.color } }, props.title)
    );
};

const MyFirstComponent = function() {
    return ce(
        'div',
        { id: 'my-first-component' },
        ce(MyTitle, { title: 'Game of throns', color: 'Yellow' }),
        ce(MyTitle, { title: 'Stranger Things', color: 'Green' }),
        ce(MyTitle, { title: 'Rick and Morty', color: 'Brown' }),
        ce(MyTitle, { title: 'Silicon valley', color: 'red' })
    );
};
ReactDOM.render(
    React.createElement(MyFirstComponent),
    document.getElementById('app')
);
