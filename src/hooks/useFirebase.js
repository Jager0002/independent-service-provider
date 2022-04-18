import auth from "../firebase/firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useFirebase = (arg) => {
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithEmailAndPassword, user3, , error3] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const [signInWithGoogle, user1] = useSignInWithGoogle(auth);

  const location = useLocation();

  useEffect(() => {
    if (user1 || user || user3) {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
    if (error3) {
      console.log(error3.message);
      if (error3?.message.includes("wrong-password")) {
        toast.error("Wrong Password");
      }
    }
  }, [user1, user, user3, error3, navigate]);

  const registerWithEmail = (email, password) => {
    createUserWithEmailAndPassword(email, password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const resetHandler = async (email) => {
    await sendPasswordResetEmail(email);
    toast.success("Email Sent");
  };

  const handleEmailSignIn = (email, password) => {
    signInWithEmailAndPassword(email, password);
  };

  return {
    registerWithEmail,
    handleGoogleSignIn,
    resetHandler,
    handleEmailSignIn,
  };
};

export default useFirebase;
