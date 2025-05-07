import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Register/Register.scss";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  clearError,
  clearMessage,
  forgotUserPassword,
} from "../../redux/user/userSlice";

function ForgotPassword() {
  const [email, setEmail] = React.useState("");

  const { error, message } = useSelector((state) => ({ ...state.user }));

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotUserPassword({ email }));
    setEmail("");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

  return (
    <div className="common_container">
      <div className="form-container">
        <form action="/" onSubmit={handleSubmit}>
          <div className="heading">
            <h2>Forgot your Password? No worries.</h2>
          </div>

          <input
            type="text"
            placeholder="Type your email"
            className="box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex-div">
            <button type="submit">Submit</button>
            <Link to="/login" className="link">
              Return to Login page
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
