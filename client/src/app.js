import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Footer, Header } from "./components";

class App extends Component {
  render() {
    return (
      <div id="wrapper">

        <Header/>

        <section id="main">
          <header>
            <span className="avatar"><img src="/images/avatar.jpg" alt="" /></span>
            <h1>Johnny Le</h1>
            <p>Software Developer, Writer, Geek</p>
          </header>
          {/*<!--*/}
          {/*<hr />*/}
          {/*<h2>Extra Stuff!</h2>*/}
          {/*<form method="post" action="#">*/}
              {/*<div className="field">*/}
                  {/*<input type="text" name="name" id="name" placeholder="Name" />*/}
              {/*</div>*/}
              {/*<div className="field">*/}
                  {/*<input type="email" name="email" id="email" placeholder="Email" />*/}
              {/*</div>*/}
              {/*<div className="field">*/}
                  {/*<div className="select-wrapper">*/}
                      {/*<select name="department" id="department">*/}
                          {/*<option value="">Department</option>*/}
                          {/*<option value="sales">Sales</option>*/}
                          {/*<option value="tech">Tech Support</option>*/}
                          {/*<option value="null">/dev/null</option>*/}
                      {/*</select>*/}
                  {/*</div>*/}
              {/*</div>*/}
              {/*<div className="field">*/}
                  {/*<textarea name="message" id="message" placeholder="Message" rows="4"></textarea>*/}
              {/*</div>*/}
              {/*<div className="field">*/}
                  {/*<input type="checkbox" id="human" name="human" /><label for="human">I'm a human</label>*/}
              {/*</div>*/}
              {/*<div className="field">*/}
                  {/*<label>But are you a robot?</label>*/}
                  {/*<input type="radio" id="robot_yes" name="robot" /><label for="robot_yes">Yes</label>*/}
                  {/*<input type="radio" id="robot_no" name="robot" /><label for="robot_no">No</label>*/}
              {/*</div>*/}
              {/*<ul className="actions">*/}
                  {/*<li><a href="#" className="button">Get Started</a></li>*/}
              {/*</ul>*/}
          {/*</form>*/}
          {/*<hr />*/}
          {/*-->*/}
          <footer>
            <ul className="icons">
              <li><a href="#" className="fa-twitter">Twitter</a></li>
              <li><a href="#" className="fa-instagram">Instagram</a></li>
              <li><a href="#" className="fa-facebook">Facebook</a></li>
            </ul>
          </footer>
        </section>

      <Footer />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
