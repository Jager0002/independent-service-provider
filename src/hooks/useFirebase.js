import auth from "../firebase/firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const useFirebase = (arg) => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, user1, error1] = useSignInWithGoogle(auth);

  const registerWithEmail = (email, password) => {
    createUserWithEmailAndPassword(email, password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return { registerWithEmail, handleGoogleSignIn };
};

export default useFirebase;
