import React from 'react';
import '../css/Endpoint.css';
import JsonDisplay from './jsonDisplay';
import EndpointTable from './endpointTable';


function Endpoint({method, hook, input_json, output_json, params, description}) {
    return (
        <div className="documentation">
            <div className="endpoint-container">
                <div className="endpoint">
                    <h2>{`${method} ${hook}`}</h2>
                    <p>{description}</p>
                    <EndpointTable data={[...params]}/>
                </div>
                <div className="code-windows">
                    <div className="window">
                        <p>Input</p>
                        <JsonDisplay className="right" data={input_json}/>
                    </div>
                    <div className="window">
                        <p>Output</p>
                        <JsonDisplay className="right" data={output_json}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Endpoint;