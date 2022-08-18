import { useState } from "react";
import {
  signInWitGooglePopup,
  createUserDocFromAuth,
  signInUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.components.jsx";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWitGooglePopup();
    await createUserDocFromAuth(user);
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

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
