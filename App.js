// const heading = React.createElement(
//     "h1",
//     { id:"heading", xyz:"abc" },
//     "my new react 2023"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1",{},"this is first code under react"), React.createElement("h2",{},"this is first code under react two")]
    )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);