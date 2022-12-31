// import React, { Component } from "react";
// import axios from "axios";

// class Input extends Component {
//   state = {
//     action: "",
//   };

//   addTodo = () => {
//     const task = { action: this.state.action };
//     if (task.action && task.action.length > 0) {
//       axios
//         .post("/api/todos", task)
//         .then((res) => {
//           if (res.data) {
//             this.props.getTodos();
//             this.setState({ action: "" });
//           }
//         })
//         .catch((err) => console.log(err));
//     } else {
//       console.log("input field required");
//     }
//   };

//   handleChange = (e) => {
//     this.setState({
//       action: e.target.value,
//     });
//   };

//   render() {
//     let { action } = this.state;
//     return (
//       <div>
//         <input type="text" onChange={this.handleChange} value={action} />
//         <button onClick={this.addTodo}>add todo</button>
//       </div>
//     );
//   }
// }
// export default Input;

import React, { Component, useState } from "react";
import axios from "axios";

const Input = ({ deleteTodo }) => {
  const [action, setAction] = useState("");

  addTodo = () => {
    const task = { action: action };
    if (task.action && task.action.length > 0) {
      axios
        .post("/api/todos", task)
        .then((res) => {
          if (res.data) {
            getTodos();
            setState({ action: "" });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("input field required");
    }
  };

  handleChange = (e) => {
    setAction(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={action} />
      <button onClick={addTodo}>add todo</button>
    </div>
  );
};
export default Input;
