#FRARTHUR
Just a simple illustration of passing and rendering data with react props. 

# extending `React.Component`
* declare a constructor, passing in `props`
* call `super`, and pass in `props`
* `this.state = { property: value }`
*  NO Trailing commas

```js
class Name extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Travis',
    };
  }

  render () {
    return (  
      <div>
        <h1>
          Hi, my name is {this.state.name} 
        </h1>
      </div>
    );
  }
};

```

## with `React.createClass`
* `getInitialState()` method returns state object
* everything is a property on an object, so you MUST HAVE trailing commas

```js
const NameClass = React.createClass({

  getInitialState(){
    return {
      name: "Travis!",
    };
  },
  render(){
    return (  
      <div>
        <h1>
          Hi, my name is {this.state.name}
        </h1>
      </div>
    );
  },
});
```
