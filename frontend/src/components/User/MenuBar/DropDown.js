import React, { useState } from "react";
import "./DropDown.css";

export default function DropDown() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="app">
      <div className="text-end">
        <button className="btn btn-primary" onClick={toggleMenu}>
          <small>Menu</small>
        </button>

        {isMenuOpen && (
          <div className="card text-start">
            <div className="card-body px-4 py-4">
              <div id="circle-avatar" className="text-center mx-auto mb-4">
                <span>K</span>
              </div>

              <h5 className="text-center mb-0">John Doe</h5>
              <p className="text-center mb-2">jd@gmail.com</p>

              <hr />

              <p
                className="mb-0"
                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
              >
                ROLES
              </p>
              <p style={{ fontSize: 12 }}>
                {["Submitter", "Project manager", "Change control board"].join(
                  ", "
                )}
              </p>

              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -24px 0" }}
              >
                <button className="list-group-item list-group-item-action px-4">
                  <small>Change Requests</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Pending Requests</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Other Requests</small>
                </button>
              </div>

              <hr style={{ margin: "0 -24px 24px" }} />

              <div className="d-grid">
                <button className="btn btn-secondary" onClick={toggleMenu}>
                  <small>Logout</small>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
