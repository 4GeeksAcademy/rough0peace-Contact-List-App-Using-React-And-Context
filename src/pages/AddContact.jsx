
//onChange with useState
<div className="form">
  <div className="form-title d-flex justify-content-center mt-3">
    <h1>Add New Contact</h1>
  </div>
  <div className="form-body ms-5 me-5">
    <div className="mb-3">
      <label for="name" className="form-label">
        Full Name
      </label>
      <input
        type="name"
        className="form-control"
        id="name"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label for="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label for="phone" className="form-label">
        Phone
      </label>
      <input
        type="phone"
        className="form-control"
        id="phone"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label for="address" className="form-label">
        Address
      </label>
      <input
        type="address"
        className="form-control"
        id="address"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  </div>
  <div className="form-footer d-flex justify-content-center">
    <button onClick={() => PostContact()} className="btn btn-primary">
      save contact
    </button>
  </div>
</div>;
