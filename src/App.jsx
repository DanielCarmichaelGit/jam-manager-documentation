import React from "react";
import Header from "./components/header";
import "./App.css";
import GettingStarted from "./components/gettingStarted";
import Endpoint from "./components/endpoint";
import DataHierarchy from "./components/DATAHIERARCHY.JSX";
import endpoints from "./data/endpoints";

function App() {
  const jsonData = {
    key1: "value1",
    key2: "value2",
    key3: {
      nestedKey1: "nestedValue1",
      nestedKey2: "nestedValue2",
    },
  };

  return (
    <div className="container">
      <Header />
      <DataHierarchy />
      <GettingStarted />
      <h1 style={{color: "#333", textAlign:"left", margin:"30px 0px 0px 0px"}}>Endpoints</h1>
      {endpoints.map((endpoint) => {
        return (
          <Endpoint
            method={endpoint.method}
            hook={endpoint.hook}
            input_json={endpoint.input}
            output_json={endpoint.output}
            params={endpoint.params}
            description={endpoint.description}
          />
        );
      })}
    </div>
  );
}

export default App;
