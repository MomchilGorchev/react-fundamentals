let React = require('react');
let ReactDOM = require('react-dom');

let routes = require('./config/routes');


// export default class App extends React.Component {

//     render() {
//         return (
//             <div>
//                 <AvatarName name="Luke Skywalker" />
//                 <AvatarImg imgSrc="http://images.techtimes.com/data/images/full/190780/luke-skywalker.jpg?w=200" />
//             </div>
//         )
//     }
// }

// export default class AvatarImg extends React.Component {

//     render () {

//         return (
//             <div className="avatar-image-holder">
//                 <img src={this.props.imgSrc} alt="Avatar image" />
//             </div>
//         )
//     }
// }

// export default class AvatarName extends React.Component {

//     render () {

//         return (
//             <p className="avatar-name">{this.props.name}</p>
//         )
//     }

// }


ReactDOM.render(
    routes,
    document.getElementById('app')
)