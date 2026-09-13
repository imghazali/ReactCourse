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

// const Title = () => {
//   return <h1>This is title </h1>;
// };

// const heading = React.createElement("h1", { id: "header" }, "React js Course");

//functional component :- a js function that return some code of jsx
// const HeadingComponent = () => {
//     return
//     <div>
//     <Title/>
//     <h1>from Functional based component</h1>
//   </div>;
// };

// lecture 4 episode 1

//Studying About Components and props 

const ResCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="card-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuRLq7RWwxI0eNXrNSeV8Tl9GkTBfbZooyHD9mc2WsQ&s=10"
      />
      <h3>{props.name}</h3>
      <h4>Cuisine</h4>
      <h4>Rating</h4>
    </div>
  );
};

const ResContainer = () => {
  return (
    <div className="res-container">
      <ResCard name="CM Mithaiwala" />
      <ResCard name="Vishnu Khirmohan" />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PIwx23d6j6dg3Iq21f_0VxKWCBgR8iMZ7mR7yeJncw&s=10"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <ResContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
