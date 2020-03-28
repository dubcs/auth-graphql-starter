import React from "react";


export const Home = () => {
  return (
    <div class="row">
    <div class="col s12 m6">
      <div class="card horizontal blue">
        <div class="card-content white-text">
          <span class="card-title">My Resume</span>
          <p>if you're not already logged in you will be asked to, thanks!</p>
        </div>
        <div class="card-action">
          <a href="#">Click here to view</a>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="card blue">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div> 
  );
};
export default Home;