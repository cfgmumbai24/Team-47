// import React from "react";
// import "./sign-in.styles.scss";
// import FormInput from "../form-input/form-input.component";
// import CustomButton from "../custom-button/custom-button.component";
// import withNavigation from "../../withNavigation";

// class SignIn extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: "",
//       role: "Fellow", // default role
//     };
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleRoleChange = (event) => {
//     this.setState({ role: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const { email, password, role } = this.state;

//     // Add your authentication logic here
//     // After successful authentication, redirect based on role
//     if (role === "Fellow") {
//       this.props.navigate("/fellow-dashboard");
//     } else if (role === "Fellow Manager") {
//       this.props.navigate("/fellow-manager-dashboard");
//     }

//     this.setState({ email: "", password: "", role: "Fellow" });
//   };

//   render() {
//     return (
//       <div className="sign-in">
//         <h2>I already have an account</h2>
//         <span>Sign In with your email and password</span>

//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             name="email"
//             type="email"
//             handleChange={this.handleChange}
//             value={this.state.email}
//             label="Email"
//             required
//           />

//           <FormInput
//             name="password"
//             type="password"
//             handleChange={this.handleChange}
//             value={this.state.password}
//             label="Password"
//             required
//           />
          
//           <div className="dropdown">
//             <label htmlFor="role" className="m-1 btn">Role</label>
//             <select
//               id="role"
//               name="role"
//               value={this.state.role}
//               onChange={this.handleRoleChange}
//               className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
//             >
//               <option value="Fellow">Fellow</option>
//               <option value="Fellow Manager">Fellow Manager</option>
//             </select>
//           </div>

//           <div className="buttons">
//             <CustomButton type="submit">Sign In</CustomButton>
//             {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton> */}
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default withNavigation(SignIn);

import React from "react";
import { useNavigate } from "react-router-dom";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.innerText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here

    // Navigate based on role
    if (role === "Fellow") {
      navigate("/fellow-dashboard");
    } else if (role === "Fellow manager") {
      navigate("/add-fellow");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="Password"
          required
        />

        <details className="dropdown">
          <summary className="m-1 btn">Role</summary>
          <ul
            className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
            onClick={handleRoleChange}
          >
            <li>
              <a>Fellow</a>
            </li>
            <li>
              <a>Fellow manager</a>
            </li>
          </ul>
        </details>

        <div className="buttons">
          <CustomButton name="submit" type="submit">
            Sign In
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
