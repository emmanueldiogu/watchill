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
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  // ...
}

```

## Function Based Component

```jsx

function Navbar({title}) {

    return(
        <h1>Navbar component `${title}`</h1>
    );
}

export default Navbar;
```

## Conditional rendering

```jsx
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);

// without the else if statement
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

## Rendering List

```jsx
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

## Responding to events

```jsx
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

## Updating state

```jsx
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```
