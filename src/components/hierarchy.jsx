import React from "react";
import "../css/DataHierarchy.css";

function DataHierarchy() {
  return (
    <div className="hierarchy-container">
      <div className="visual">
        <img src="./Data-Hierarchy.png" alt="Data Hierarchy Visualization" />
      </div>
      <div className="hierarchy-descriptions">
        <div className="hierarchy-description">
          <h2>According to the User Object</h2>
          <p>
            <span>
              The user object contains jam data, jam group data, jam note data,
              and jam task data. It is easy to retrieve a list of jam groups for
              the user by doing a simple get request for the logged in user.
              This get request will return a user object (see endpoint).
              <br />
              <br />
              Alternatively, to eliminate the need for extraneous calls you can
              do a get request for jam groups using the GET
              /jam_group/:jam_group_id. You can choose to supply a jam_group id
              in the query url or if no id is given, all jam groups for the
              current user will be returned.
              <br />
              <br />
              If you want to retrieve all user specific data and cache it you can use the GET /user endpoint and set "expanded" to true in the body of the request. This will return all user associated data. If data exceeds returnable size, please use the specific endpoints to retrieve full data sets.
            </span>
          </p>
        </div>
        <div className="hierarchy-description">
          <h2>According to the Jam Group Object</h2>
          <p>some description</p>
        </div>
      </div>
    </div>
  );
}

export default DataHierarchy;
