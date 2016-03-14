var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function(){
        return (
            <div className="app-body">
                Hello
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
