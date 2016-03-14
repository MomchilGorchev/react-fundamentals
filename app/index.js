var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function(){
        return (
            <div className="app-body">
                <Content />
            </div>
        )
    }
});

var Content = React.createClass({
    render: function(){
        var arr = ["some", "values", "in", "list"];
        return (
            <div>
                <h3>The list</h3>
                <List items={arr} />
            </div>
        )
    }
});

var List = React.createClass({
    render: function(){
        var listItems = this.props.items.map(function(item){
            return <li>{item}</li>
        });

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
