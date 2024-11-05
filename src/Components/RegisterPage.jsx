import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import jsonData from "../resources/userid.json";

import "../Style/form.css";

function RegisterPage() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
    const passwordPattern = "[a-zA-Z0-9]{4,8}$";
    const newErrors = { email: "", password: "", confirmpassword: "" };

    var isValidForm = true;

    if (!userDetails.email.match(emailPattern)) {
      isValidForm = false;
      newErrors.email = "Email pattern is not correct.";
    }
    if (!userDetails.password.match(passwordPattern)) {
      isValidForm = false;
      newErrors.password = "Password pattern is not correct.";
    }
    if (!userDetails.confirmpassword.match(passwordPattern)) {
      isValidForm = false;
      newErrors.confirmpassword = "Confirm Password pattern is not correct.";
    }
    if (userDetails.password !== userDetails.confirmpassword) {
      isValidForm = false;
      newErrors.confirmpasswordpassword =
        "Password and Confrim Password are not same.";
    }

    if (isValidForm) {
      let isEmailPresent = false;
      for (const obj1 of jsonData) {
        // console.log("Obj: ", obj1);
        console.log(obj1.userId, obj1.pwd);
        if (obj1.userId === userDetails.email) {
          newErrors.email = "Email id is already present in Database.";
          setErrors(newErrors);
          isEmailPresent = true;
          break;
        }
      }
      if (!isEmailPresent) {
        console.log("Registering user");
        jsonData[userDetails.email] = userDetails.password;
        console.log("new data ", jsonData);
        navigate("/login");
       
      }
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br></br>
        <br></br>
        <br></br>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
          }
        />
        <br></br>
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
          }
        />
        <br></br>
        <br></br>
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="text"
          name="confirmpassword"
          value={userDetails.confirmpassword}
          onChange={(e) =>
            setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
          }
        />
        <br></br>
        <br></br>
        <button>Submit</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h1 className="error"> {errors.email && <p>{errors.email}</p>} </h1>
        <h1 className="error">
          {" "}
          {errors.password && <p>{errors.password}</p>}{" "}
        </h1>
        <h1 className="error">
          {" "}
          {errors.confirmpassword && <p>{errors.confirmpassword}</p>}{" "}
        </h1>
        {/* <h1 className="error" {errors.password && <p>{errors.password}</p>} </h1> */}
      </form>
    </div>
  );
}

export default RegisterPage;
