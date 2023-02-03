import React from "react";
// import WithSubscription from "./components/withSubscription";


function WithoutSubscriptionAlternativeEmail() {
  return (
    <div>


    <div className="overlay"></div>


    <div className="subscribe">
      <div className="subscribe-container">
        
            <div className="subscribe-msg new-textbox">
              <p>Your Email id is already taken.  Please enter new email id to subscribe.</p>
              <input type="email" className = "subscribe-alt-mail" placeholder="Enter the alternative E-mail" />
              
              <input type="button" className="btn-subscribe" value="Subscribe" />
            </div>   
      </div>
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

export default WithoutSubscriptionAlternativeEmail;
