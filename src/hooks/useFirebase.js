import auth from "../firebase/firebase.init";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';

const useFirebase = (arg) => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

  const registerWithEmail = (arg) => {}

  const handleGoogleSignIn = () => {
    signInWithGoogle()
  }

  return {registerWithEmail, handleGoogleSignIn}
}

export default useFirebase