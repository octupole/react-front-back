import { useState } from "react";
import { Link } from "react-router-dom";
import { Auth, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail (e.target.value)
  };
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const auth=getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was Sent')

    } catch (error) {
      toast.error('Reset email could not be sent')
    }
  };
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="emailInput"
            id="email"
            value={email}
            onChange={onChange}
          />
          <Link className="forgotPassword" to='/sign-in'>Sign in</Link>
          <div className="signInBar">
            <div className="signinText">Send Reset Link</div>
            <button className="signInButton">
              <ArrowRightIcon fill='#fffffff' width='34px' height='34px'/>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
