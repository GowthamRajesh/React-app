import React from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function api(event) {
  let email = document.querySelector(".email").value;
  let pwd = document.querySelector(".pwd").value;
  let confirmPwd = document.querySelector(".confirmPwd").value;
  console.log("email", pwd, confirmPwd, email);
  event.preventDefault();

  // if(!email || pwd || confirmPwd)
  // {
  //   notify();
  // }

  const res = await axios({
    method: "POST",
    url: "/api",
    data: {
      email: email,
      password: pwd,
      confirmPassword: confirmPwd,
    },
  });
  console.log("res", res);
}

const notify = () => 
{
  toast.error('🦄 Enter your Credentials!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
};

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  return (
    <form action="" className="signup-form">
      <div className="form-header">
        <h1>Create Account in Zee5</h1>
      </div>
      <div className="form-body">
        <div className="row">
          <div className="input-group">
            <label for="">Email/Phone Number</label>
            <input className="email" type="text" />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label for="">Password</label>
            <input className="pwd" type="password" />
          </div>

          <div className="input-group">
            <label for="">Confirm Password</label>
            <input className="confirmPwd" type="password" />
          </div>
        </div>
      </div>
      <div className="form-footer">
        {/* <button className="btn" onClick={api} >
          Create Account
        </button> */}
        <button className="btn" onClick={(event) => {
                  api(event);
                  notify();
                }} >
          Create Account
        </button>

        <ToastContainer
           position="top-right"
           autoClose={5000}
           hideProgressBar={true}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="colored"/>
<ToastContainer />
      </div>
    </form>
  );
}

export default App;
