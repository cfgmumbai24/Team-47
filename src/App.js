import "./App.css";
// import HomePage from "./pages/homepage/homepage.component";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FellowDashboard from './components/fellow-dashboard/fellow-dashboard.component';
import FellowManagerDashboard from './components/fellow-manager-dashboard/fellow-manager-dashboard.component';
// // import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import StudentCard from "./components/card-status/StudentCard";
import { auth } from "./firebase/firebase.utils";
// import studentData from "./components/card-status/student-data";
import Profile from "./components/fellow-profile/Profile";
class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user}) ;
      console.log(user);     

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {

  
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Routes>
          {/* <Route path="/" element={<HomePage />}></Route> */}
          {/* dkasa */}
          
          <Route path="/signin" element={<SignInAndSignUp />}></Route>
          <Route path="/fellowProfile" element={<Profile />}></Route>
          <Route path="/fellow-dashboard" element={<FellowDashboard />} />
          <Route path="/fellow-manager-dashboard" element={<FellowManagerDashboard />} />
           <Route path="/Profile" element={<Profile />}></Route>
         </Routes>
       </div>
    );
  }
}

export default App;
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import SignIn from './components/sign-in/sign-in.component';
// import FellowDashboard from './components/fellow-dashboard/fellow-dashboard.component';
// import FellowManagerDashboard from './components/fellow-manager-dashboard/fellow-manager-dashboard.component';
// import './App.css';

// const App = () => {
//   return (
//     <div className="container mx-auto mt-10">
      
//       <Header currentUser = {this.state.currentUser}/>
//     <Routes>
      
        
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/fellow-dashboard" element={<FellowDashboard />} />
//           <Route path="/fellow-manager-dashboard" element={<FellowManagerDashboard />} />
       
     
//     </Routes>
//     </div>
//   );
// };

// export default App;
