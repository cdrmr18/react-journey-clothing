import { useState } from "react";
import {
  signInWitGooglePopup,
  signInUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.components.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";
import { SignIncontainer, Buttons } from "./sign-in-form.styles.jsx";

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
    await signInWitGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (e) {
      switch (e.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("incorrect email");
          break;
        default:
          console.log(e);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <SignIncontainer>
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
        <Buttons>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign in
          </Button>
        </Buttons>
      </form>
    </SignIncontainer>
  );
};

export default SignInForm;
