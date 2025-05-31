import React from "react";

export const AddContact = () => {
  return (
    <div className="form">
      <div className="form-title d-flex justify-content-center mt-3">
        <h1>Add New Contact</h1>
      </div>
      <div className="form-body ms-5 me-5">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Full Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="Enter Phone"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Address
          </label>
          <input
            type="address"
            className="form-control"
            id="exampleFormControlInput4"
            placeholder="Enter Address"
          />
        </div>
      </div>
      <div className="form-footer d-flex justify-content-center">
        <button>save contact</button>
      </div>
    </div>
  );
};
