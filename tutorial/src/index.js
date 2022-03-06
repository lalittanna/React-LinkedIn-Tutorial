import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App({ login }) {
  const [data, setData] = useState(null);
  const [checked, toggle] = useReducer((checked) => !checked, false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  });

  if (data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100} />

        <br />

        <input type="checkbox" value={checked} onClick={toggle} />
        {checked ? "checked" : "not checked"}
      </div>
    );
  }

  return null;
}

ReactDOM.render(<App login="lalittanna" />, document.getElementById("root"));
