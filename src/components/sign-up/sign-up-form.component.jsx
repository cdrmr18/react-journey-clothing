import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../utils/firebase/firebase.utils.js";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Email is already in use.");
      } else {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Display Name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          required
          onChange={handleChange}
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        <button type="sumbit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
