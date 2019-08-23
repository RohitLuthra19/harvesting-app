import React from "react";
import ReactDOM from "react-dom";
import MaterialIcon from "material-icons-react";
import FirstScreen from "./containers/FirstScreen";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>
        Hello CodeSandbox <MaterialIcon icon="accessible_forward" />
      </h1>

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FirstScreen />, rootElement);
