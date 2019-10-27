import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese"
  //   }),
  //   React.createElement(Pet, { name: "Kacper", animal: "Cat", breed: "Mixed" }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatiel"
  //   })
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Mixed"/>
      <Pet name="Kacper" animal="Cat" breed="Mixed"/>
      <Pet name="Doink" animal="Bird" breed="Cockatiel"/> */}
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
