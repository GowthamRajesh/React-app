import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import axios from "axios";
// import $ from 'jquery';
// import oauth from 'axios-oauth-client'
// var request = require('request');
// import { request } from "request";

import { ToastContainer, toast } from "react-toastify";
import WithSubscription from "./components/withSubscription";
import WithoutSubscription from "./components/WithoutSubscriptionFreePlan";
import WithoutSubscriptionAlternativeEmail from "./components/WithoutSubscriptionAlternativeEmail";
import "react-toastify/dist/ReactToastify.css";
// const express = require('express');
// const cors = require('cors');

// const app = express();


// var myHeaders = new Headers();

let value;
let email;
let pwd;
// let confirmPwd;
let flag ;

async function api() {
  email = document.querySelector(".email").value;
  pwd = document.querySelector(".pwd").value;
  console.log("email", pwd, email);

  // myHeaders.append("Cookie", "AWSALB=VEgXuuo9ICEtgZ1B4yQ/qNcW3xOpJEn3+NLTYhDBMoZ8kTm3Zr/mZ5PDs1RQYHvP2XDIcwIgGU3YU005CRJRIviGwueo6KTWEaZ/gXGJUgjQ7V9YIyznG7qRQF8X; AWSALBCORS=VEgXuuo9ICEtgZ1B4yQ/qNcW3xOpJEn3+NLTYhDBMoZ8kTm3Zr/mZ5PDs1RQYHvP2XDIcwIgGU3YU005CRJRIviGwueo6KTWEaZ/gXGJUgjQ7V9YIyznG7qRQF8X; JSESSIONID=94583C46B23A403983E5A3F178A27052");
  
  // const response = await fetch('https://uat.auth.starhub.com/oauth/authorize?response_type=code&client_id=Zee5Bjd6ZKtE31KwDxM3jqssErOWG8EMXujMa24eZBu&redirect_uri=https://evto7vgeak.execute-api.us-east-1.amazonaws.com/auth/callback', {
  //   method: 'GET',
  //   mode: 'no-cors',
  //   headers: {
      // "Access-Control-Allow-Origin": "*",
      // "Vary": "Origin",
      // accept: '*/*',
  //   },
  // });
  // console.log(response,'response');

  // const url = 'https://uat.auth.starhub.com/oauth/authorize?response_type=code&client_id=Zee5Bjd6ZKtE31KwDxM3jqssErOWG8EMXujMa24eZBu&redirect_uri=https://evto7vgeak.execute-api.us-east-1.amazonaws.com/auth/callback';
  // const headers = {
  //   "Access-Control-Allow-Origin": "*",
  //   "Vary": "Origin",
  //   accept: '*/*',
  // };
  // console.log(url, headers)
  // const data = client.request.get(url, { headers });
  // console.log(data,"daatta")



  // app.use(cors({
  //   origin: 'https://uat.auth.starhub.com/oauth/authorize?response_type=code&client_id=Zee5Bjd6ZKtE31KwDxM3jqssErOWG8EMXujMa24eZBu&redirect_uri=https://evto7vgeak.execute-api.us-east-1.amazonaws.com/auth/callback', // replace with the origin URL of your client-side app
  //   optionsSuccessStatus: 200
  // }));

  

// var requestOptions = {
//   method: 'GET',
//   // headers: myHeaders,
//   redirect: 'follow'
// };

// await fetch("https://uat.auth.starhub.com/oauth/authorize?response_type=code&client_id=Zee5Bjd6ZKtE31KwDxM3jqssErOWG8EMXujMa24eZBu&redirect_uri=https://evto7vgeak.execute-api.us-east-1.amazonaws.com/auth/callback", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

  // const getAuthorizationCode = oauth.authorizationCode(
  //   axios.create(),
  //   'https://uat.auth.starhub.com/oauth/authorize', // OAuth 2.0 token endpoint
  //   'Zee5Bjd6ZKtE31KwDxM3jqssErOWG8EMXujMa24eZBu', //client_id
  //   '3ZXg9QAmUHuoaBo9mYTr4gqH4v1hHVl3ic18DFyi2OU', //client_secret
  //   'https://evto7vgeak.execute-api.us-east-1.amazonaws.com/auth/callback' // Redirect URL for your app
  // )
  // try{
  //   const auth = await getAuthorizationCode('AUTHORIZATION_CODE', 'OPTIONAL_SCOPES')
  //   console.log(auth,"response")
  // }catch(error){
  //   console.log(error,"error")
  // }

  // var url = "https://gowtham1.free.beeceptor.com/datta";
  // var url = "https://uat.auth.starhub.com/oauth/authorize?response_type=code&client_id=Zee5Bjd6ZKtE31KwDxM3jqssErOWG8EMXujMa24eZBu&redirect_uri=https://evto7vgeak.execute-api.us-east-1.amazonaws.com/auth/callback"
// var url="https://evto7vgeak.execute-api.us-east-1.amazonaws.com/auth/callback"
  // var config = {
  //   method: 'GET',
  //   url: url,
  //   data:{},
  //   headers:{
  //     "Access-Control-Allow-Origin":"*"
      // "Access-Control-Allow-Origin": "*",
      // "access-control-allow-headers":"Origin",
      // "Host": "uat.auth.starhub.com",
      // "Access-Control-Expose-Headers": "*",
      // "Vary": "Origin",
      // accept: '*/*',
      // withCredentials: true,
      // "Content-Type": "application/json"

    // }
  // };
  // axios(config)
  // .then(function (response) {
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch(function (error) {
  //   console.log(error);
  //   // Redirect("https://uat.auth.starhub.com/oauth/authorize?response_type=code&client_id=Zee5Bjd6ZKtE31KwDxM3jqssErOWG8EMXujMa24eZBu&redirect_uri=https://evto7vgeak.execute-api.us-east-1.amazonaws.com/auth/callback")
  // });

  // var settings = {
  //   url: url,
  //   method: "GET",
  //   timeout: 0,
  //   headers: {
  //     // Accept: "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // };
  // return $.ajax(settings).done(function (response) {
  //   console.log(response,"as")
  //   // return response;
  // });

  // var options = {
  //   'method': 'GET',
  //   'url': 'https://uat.auth.starhub.com/oauth/authorize?response_type=code&client_id=Zee5Bjd6ZKtE31KwDxM3jqssErOWG8EMXujMa24eZBu&redirect_uri=https://evto7vgeak.execute-api.us-east-1.amazonaws.com/auth/callback',
  //   'headers': {
  //     "Access-Control-Allow-Origin": "*",
  //     "Vary": "Origin",
  //     accept: '*/*',
  //   }
  // };
  // request(options, await function (error, response) {
  //   if (error) throw new Error(error,"error");
  //   console.log(response.body);
  // });


}


const notify = (value) => {
  toast.error(value, {
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

const notifySuccess = (value) => {
  toast.success(value, {
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


let handleOnChange = (event) => {
  
  event.preventDefault();
  let email = document.querySelector(".email").value;
  // let confirmPwd = document.querySelector(".confirmPwd").value;
  let pwd = document.querySelector(".pwd").value;

  // let flag;

  // let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let mailFormat =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;

  if (email == "") {
    value = "Please enter your Email or Phone Number!";
    notify(value);
    flag = false;
    console.log("email field empty--", flag);

  }
  else if (mailFormat.test(email)) {

    value = "Email Address / Phone number is valid !";
    console.log("email field valid---", flag);
    notifySuccess(value);
    if(pwd != '' ){
       flag = true;
    }
    else if(pwd == ""){
      flag = false;
      value = "Please enter your password !"; 
      notify(value);

    }
    
  } else if (!mailFormat.test(email)) {
    value =
      "Email Address / Phone number is not valid, Please provide a valid Email or phone number";
    notify(value);
    flag = false;
    console.log("email field not valid---", flag);
    
  } 
  // else if(pwd != "" )
  // {
  //    value = "Please enter your password !";
  //   //  notify(value);
  //    console.log("pwd empty");
  //    flag = false;
  //   //  return flag;
  // } 
  
  // if (pwd != "" && confirmPwd != "" && pwd == confirmPwd && flag == true) {
  //   value = "Account Created *";
  //   notify(value);
  //   api();
  // }
  
  
};

function renderData(event) {
  event.preventDefault();
  console.log("onclick------");

  let resObj = {
    // value: "withSubscription",
     value : "WithoutSubscriptionFreePlan",
    //  value : "WithoutSubscriptionAternativeEmail"
  };


  if(resObj.value == "withSubscription")
  {
    ReactDOM.render(<WithSubscription />, document.getElementById("root"));
  }
  
  else if(resObj.value == "WithoutSubscriptionFreePlan")
  {
    ReactDOM.render(<WithoutSubscription />, document.getElementById("root"));
  }
  else if(resObj.value == "WithoutSubscriptionAternativeEmail")
  {
    ReactDOM.render(<WithoutSubscriptionAlternativeEmail/>, document.getElementById("root"));
  }
}


function App() {
  return (
    <div className="body">
      <div className="logo">
        <img src="./images/ZEE5_logo.png" className="img-logo" alt="" />
      </div>
      <div className="starhub-logo">
        <img src="./images/starhub-logo.png" className="str-logo" alt="" />
      </div>

      <div className="overlay"></div>
      <div className="login">
        <form action="" className="signup-form">
          <div className="form-header">
            <h1>Login into Zee5 using StarHub</h1>
          </div>

          <div className="form-body">
            <div className="text">
              <p>
                Login to continue enjoying uninterrupted video and personalised
                experience.
              </p>
            </div>
            <div className="row">
              <div className="input-group">
                <label htmlFor="">Email / Phone Number</label>
                <input className="email" type="text" required />
              </div>
            </div>
            <div className="row">
              <div className="input-group">
                <label htmlFor="">Password</label>
                <input className="pwd" type="password" required />
              </div>
            </div>
          </div>
          <div className="form-footer">
            <input
              type = "button"
              className="btn"
              value="Login"
              onClick={(event) => {
                handleOnChange(event);
                // api(event);
                //  renderData(event);
                console.log("flag---",flag);
                // notify();
              if( flag == true)
                {
                window.location.href="https://uat.auth.starhub.com/oauth/authorize?response_type=code&client_id=Zee5Bjd6ZKtE31KwDxM3jqssErOWG8EMXujMa24eZBu&redirect_uri=https://evto7vgeak.execute-api.us-east-1.amazonaws.com/auth/callback"
                  console.log(" trueclick");
                  // setTimeout(renderData(event), 100000); 
                  // renderData(event);
                }
              }
            }
            />
          </div>

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
          theme="colored"
        />
        <ToastContainer />
        
        </form>
      </div>

      <div className="main">
        <div className="header">
          <div className="images">
            <div className="image">
              <img src="images/Valimai.jpg" className="img" alt="" />
            </div>
            <div className="image">
              <img src="images/nerkonda.jpg" className="img" alt="" />
            </div>
            <div className="image">
              <img src="images/lona.jpg" className="img" alt="" />
            </div>
            <div className="image">
              <img src="images/mersal1.jpg" className="img" alt="" />
            </div>
            <div className="image">
              <img src="images/kanaa.jpg" className="img" alt="" />
            </div>
            <div className="image">
              <img src="images/igloo.jpg" className="img" alt="" />
            </div>
            <div className="image">
              <img src="images/Sardar.jpg" className="img" alt="" />
            </div>
            <div className="image">
              <img src="images/thunivu.jpg" className="img" alt="" />
            </div>
          </div>
        </div>
        <div className="rest"></div>
      </div>
    </div>
  );
}
export default App;
