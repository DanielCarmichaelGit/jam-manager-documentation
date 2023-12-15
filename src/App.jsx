import React from "react";
import Header from "./components/header";
import "./App.css";
import GettingStarted from "./components/gettingStarted";
import Endpoint from "./components/endpoint";
import DataHierarchy from "./components/DATAHIERARCHY.JSX";
import endpoints from "./data/endpoints";

function App() {

  return (
    <div className="container">
      <Header />
      <DataHierarchy />
      <GettingStarted />
      <h1 style={{color: "#333", textAlign:"left", margin:"30px 0px 0px 0px"}}>Endpoints</h1>
      {endpoints.map((endpoint, index) => {
        return (
          <Endpoint
            method={endpoint.method}
            hook={endpoint.hook}
            input_json={endpoint.input}
            output_json={endpoint.output}
            params={endpoint.params}
            description={endpoint.description}
            key={index}
          />
        )
      })}
    </div>
  );
}

export default App;
