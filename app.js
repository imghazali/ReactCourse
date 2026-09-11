import React from "react";
import ReactDOM from "react-dom/client";

// /*
// <div id="parent">
// <div id="child">
// <h1>Hello from h1</h1>
// <div/>
// </div>


// */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hello from h1"),
//     React.createElement("h2", {}, "Hello from h2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hello from h1"),
//     React.createElement("h2", {}, "Hello from h2"),
//   ]),
// ]);

// // const heading = React.createElement(
// //   "h1",
// //   { id: "header", className: "r-header" },
// //   "Hello from reactjs with app.js file",
// // );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



// const heading = React.createElement("h1", { id: "header" }, "React js Course");

//functional component :- a js function that return some code of jsx
const HeadingComponent = () => {
    return <h1>from Functional based component</h1>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);