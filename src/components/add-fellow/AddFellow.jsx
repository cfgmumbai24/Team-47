// // src/components/AddFellow.js
// import React, { useState } from "react";
// import "./AddFellow.css";

// const AddFellow = ({ addFellow }) => {
//   const [fellow, setfellow] = useState({
//     name: "",
//     profilePic: "",
//     fellowClass: "",
//     marks: {
//       literacy: "",
//       numeracy: "",
//       socialEmotional: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setfellow((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleMarksChange = (e) => {
//     const { name, value } = e.target;
//     setfellow((prevState) => ({
//       ...prevState,
//       marks: {
//         ...prevState.marks,
//         [name]: value,
//       },
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addFellow(fellow);
//     setfellow({
//       name: "",
//       profilePic: "",
//       fellowClass: "",
//       marks: {
//         literacy: "",
//         numeracy: "",
//         socialEmotional: "",
//       },
//     });
//   };

//   return (
//     <form className="add-fellow-form" onSubmit={handleSubmit}>
//       <h2>Add fellow</h2>
//       <input
//         type="text"
//         name="name"
//         value={fellow.name}
//         onChange={handleChange}
//         placeholder="Name"
//         required
//       />
//       <input
//         type="email"
//         name="fellow_email"
//         value={fellow.fellow_email}
//         onChange={handleChange}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         name="fellow_password"
//         value={fellow.fellow_password}
//         onChange={handleChange}
//         placeholder="Password"
//         required
//       />
//       <input
//         type="text"
//         name="profilePic"
//         value={fellow.profilePic}
//         onChange={handleChange}
//         placeholder="Profile Picture URL"
//       />
//       <div className="btn">
//         <button type="submit">Add fellow</button>
//       </div>
//     </form>
//   );
// };

// export default AddFellow;
import React, { useState } from "react";
import "./AddFellow.css";
import { useNavigate } from "react-router-dom";

const AddFellow = ({ addFellow }) => {
  const [fellow, setfellow] = useState({
    name: "",
    profilePic: "",
    fellowClass: "",
    marks: {
      literacy: "",
      numeracy: "",
      socialEmotional: "",
    },
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setfellow((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleMarksChange = (e) => {
    const { name, value } = e.target;
    setfellow((prevState) => ({
      ...prevState,
      marks: {
        ...prevState.marks,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFellow(fellow);
    setfellow({
      name: "",
      profilePic: "",
      fellowClass: "",
      marks: {
        literacy: "",
        numeracy: "",
        socialEmotional: "",
      },
    });
  };

  return (
    

    <div className="add-fellow-container"> {/* Added container for centering */}
      <form className="add-fellow-form" onSubmit={handleSubmit}>
        <h2>Add fellow</h2>
        <input
          type="text"
          name="name"
          value={fellow.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="fellow_email"
          value={fellow.fellow_email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="fellow_password"
          value={fellow.fellow_password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="text"
          name="profilePic"
          value={fellow.profilePic}
          onChange={handleChange}
          placeholder="Profile Picture URL"
        />
        <div className="btn">
          <button type="submit">Add fellow</button>
        </div>
      </form>
    </div>
    
  );
};

export default AddFellow;