// import React from "react";

// import "./sign-in.styles.scss";
// import FormInput from "../form-input/form-input.component";
// import CustomButton from "../custom-button/custom-button.component";
// import { signInWithGoogle } from "../../firebase/firebase.utils";

// // class SignIn extends React.Component {
// //   constructor() {
// //     super();

// //     this.state = {
// //       email: "",
// //       password: "",
// //     };
// //   }

// //   handleChange = (event) => {
// //     const { name, value } = event.target;
// //     this.setState({ [name]: value });
// //   };

// //   handleSubmit = (event) => {
// //     event.preventDefault();

// //     this.setState({ email: "", password: "" });
// //   };
// //   render() {
// //     return (
// //       <div className="sign-in">
// //         <h2>I already have an account</h2>
// //         <span>Sign In with your email and password</span>

// //         <form onSubmit={this.handleSubmit}>
// //           <FormInput
// //             name="email"
// //             type="email"
// //             handleChange={this.handleChange}
// //             value={this.state.email}
// //             label='Email'
// //             required
// //           />

// //           <FormInput
// //             name="password"
// //             type="password"
// //             handleChange={this.handleChange}
// //             value={this.state.password}
// //             label='Password'
// //             required
// //           />
          
// //           <details className="dropdown">
// //           <summary className="m-1 btn">Role</summary>
// //           <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
// //             <li><a>Fellow</a></li>
// //             <li><a>Fellow manager</a></li>
// //           </ul>
// //         </details>

// //           <div className="buttons">

// //             <CustomButton name="submit" type="submit" >Sign In</CustomButton>
// //             {/* <CustomButton name="sign-in-with-google" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton> */}
          
// //           </div>
// //         </form>
// //       </div>
// //     );
// //   }
// // }

// // export default SignIn;
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
//       this.props.history.push("/fellow-dashboard");
//     } else if (role === "Fellow Manager") {
//       this.props.history.push("/fellow-manager-dashboard");
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

// export default SignIn;

import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import withNavigation from "../../withNavigation";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      role: "Fellow", // default role
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRoleChange = (event) => {
    this.setState({ role: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, role } = this.state;

    // Add your authentication logic here
    // After successful authentication, redirect based on role
    if (role === "Fellow") {
      this.props.navigate("/fellow-dashboard");
    } else if (role === "Fellow Manager") {
      this.props.navigate("/fellow-manager-dashboard");
    }

    this.setState({ email: "", password: "", role: "Fellow" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          
          <div className="dropdown">
            <label htmlFor="role" className="m-1 btn">Role</label>
            <select
              id="role"
              name="role"
              value={this.state.role}
              onChange={this.handleRoleChange}
              className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
            >
              <option value="Fellow">Fellow</option>
              <option value="Fellow Manager">Fellow Manager</option>
            </select>
          </div>

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton> */}
          </div>
        </form>
      </div>
    );
  }
}

export default withNavigation(SignIn);
