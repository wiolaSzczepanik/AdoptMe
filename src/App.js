const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.bread),
    ])
};

const App = () => {
    return React.createElement(
        "div",
        {id: "something-important"},
        [React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {name: "Luna", animal: "Dog", bread:"Havanese"}),
        React.createElement(Pet, {name: "Kacper", animal: "Cat", bread:"Mixed"}),
        React.createElement(Pet, {name: "Pepper", animal: "Bird", bread:"Cockatiel"})
    ]
    ); 
  };

 ReactDOM.render(React.createElement(App), document.getElementById("root"));