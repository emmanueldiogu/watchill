# WDDM 115

## How to Create React App

In the terminal, type in `npx create-react-app my-app`
Folder will contain:
- package.json
- /public
- /src
- /build
- /node_modules
To start the program, in the terminal type in `cd my-app`
then, `npm start`

## React components using class
```jsx
class Guess extends React.Component {
    render () {
        var myGuess = Math.floor(Math.random()*100+1);
        return ( 
            <div>
                <h1>Guess</h1>
                <p>My guess: {myGuess}</p>
            </div>
        );
    }
};

class Button extends React.Component {
    myFunc () { alert(“myFunc”); }
    render () {
        return (<button onClick={this.myFunc.bind(this)}>click me</button>);
    }
};

// Child and Parent component
class ChildComponent extends React.Component {
    render () { return <p>hello, world!</p>; }
};

class ParentComponent extends React.Component {
    render () { return <ChildComponent />; }
};

class MyPage extends React.Component {
    render () {
        return ( 
            <div>
                <Header />
                <Navigation />
                <Body />
                <Footer />
            </div>
        );
    }
};

// Passing props

```