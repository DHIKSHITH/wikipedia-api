import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import DropDown from "./components/DropDown";

// const item = [
//   {
//     title: "what is react",
//     content:
//       "React makes it painless to create interactive UIs. Design simple views for each state"
//   },
//   {
//     title: "why use react",
//     content: "React makes Design simple views for each state"
//   },
//   {
//     title: "how do you use react",
//     content: "React can be used by creating components"
//   }
// ];

const options = [
  {
    label: "the color of red",
    value: "red"
  },
  {
    label: "the color of green",
    value: "green"
  },
  {
    label: "the color of blue",
    value: "blue"
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle button</button>
      {toggle ? (
        <DropDown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};
