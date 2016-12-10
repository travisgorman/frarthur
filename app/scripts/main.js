import React from 'react';
import ReactDOM from 'react-dom';
let page = document.getElementById('page')

// component - class X extends React.Component
class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Travis',
    };
  }

  render () {
    return (  
      <div className="displayName">
        <h1>Hi, my name is {this.state.name} </h1>
      </div>
    );
  }
};

// component - React.createClass
// const NameClass = React.createClass({
//   getInitialState(){
//     return {
//       name: "Travis!",
//     };
//   },
//   render(){
//     return (  
//       <div>
//         <h1>
//           Hi, my name is {this.state.name}
//         </h1>
//       </div>
//     );
//   },
// });

// dom
ReactDOM.render(  
  <Name />, page
);
