import SignUpForm from "../../sign-up/sign-up-form.component.jsx";

import {
  signInWitGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWitGooglePopup();
    await createUserDocFromAuth(user);
  };
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>SIgn in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
