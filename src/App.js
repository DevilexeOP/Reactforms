import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div class="form-container" onSubmit={handleSubmit}>
      <form class="register-form">
        {submitted ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}
        <input
          onChange={handleFirstNameChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}
        <input
          onChange={handleLastNameChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}
        <input
          onChange={handleEmailChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
