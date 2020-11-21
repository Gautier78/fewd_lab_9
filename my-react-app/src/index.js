import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';

class ClickButton extends React.Component {
    constructor() {
        super();
        this.state = {
            clickNum: 0,
            clickNum2: 0,
            clickNum3: 0,
            clickNum4: 0

        };
        //Bind to make `this` work in the onclick callback
        //used when the function needs to be called later in certain events when it's useful
        this.handleClicks = this.handleClicks.bind(this);
        this.handleClicks2 = this.handleClicks2.bind(this);
        this.handleClicks3 = this.handleClicks3.bind(this);
        this.handleClicks4 = this.handleClicks4.bind(this);
    }
    handleClicks() {
        // Another way of modifying the state 
        // this.setState({
        // 	clicked: this.state.clicked + 1
        // });

        //as setState is async, this is the correct way
        //Asynchronous code takes statements outside of the main program flow, 
        //allowing the code after the asynchronous call to be executed immediately without waiting.
        this.setState(prevState => ({
            clickNum: prevState.clickNum + 1
        }));

    }

    handleClicks2() {
        this.setState(prevState => ({
            clickNum2: prevState.clickNum2 + 1
        }));

    }

    handleClicks3() {
        this.setState(prevState => ({
            clickNum3: prevState.clickNum3 + 1
        }));

    }
    handleClicks4() {
      this.setState(prevState => ({
          clickNum4: prevState.clickNum4 + 1
      }));

  }
    //Access state date and setup the onClick event handler
    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="description"/> 
                        </a>
                    </div>
                </nav>
                <section className="hero is-dark is-large">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Button Click example
                            </h1>
                            <h2 className="subtitle">
                                Below is a button click example
                          </h2>
                          
                          <span class="tag is-info is-large is-success">Click on the round image just below </span>
  
                          <br/>
                          <br/>
                          <figure class="image is-128x128">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" type="button" alt="img" onClick={this.handleClicks4}/>
</figure>
<br/>
<h3>This 128x128 round image is clicked {this.state.clickNum4} times.</h3>
<br/>

<span class="tag is-warning is-light">you can also click on the buttons bellow</span>
<br/>
<br/>
<button class="button is-large is-fullwidth" onClick={this.handleClicks4}>Large</button>
<br/>
<div class="buttons are-small"><button class="button" onClick={this.handleClicks4}>Small</button></div>

<button class="button is-primary is-outlined" onClick={this.handleClicks4}>Outlined</button>
 <br/>
 <br/>  
<progress class="progress is-small is-primary" max="100">15%</progress>
<progress class="progress is-danger" max="100">30%</progress>
<progress class="progress is-medium is-info" max="100">45%</progress>
<progress class="progress is-large is-warning" max="100">60%</progress>
<progress class="progress is-medium is-success" max="100">60%</progress>
<progress class="progress is-danger" max="100">30%</progress>
<progress class="progress is-small is-primary" max="100">15%</progress>


                        </div>
                        
                    </div>
                </section>
                <div className="container is-medium">
                    <h1 className="title has-text-primary">Look at all of these buttons!</h1>
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png" type="button" onClick={this.handleClicks} alt="description"/>
                                </figure>

                                
                                
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <h3>Mail is clicked {this.state.clickNum} times.</h3>
                                </div>
                            </div>
                        </article>
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src="https://www.pngkit.com/png/full/148-1484731_like-button-png-youtube-clipart-freeuse-library-like.png" type="button" onClick={this.handleClicks2} alt="description"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <h3>Like is clicked {this.state.clickNum2} times.</h3>
                                </div>
                            </div>
                        </article>
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src="https://icons-for-free.com/iconfiles/png/512/Treasure-1320568046542947302.png" type="button" onClick={this.handleClicks3} alt="description"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <h3>Treasure is clicked {this.state.clickNum3} times.</h3>
                                </div>
                            </div>
                        </article>
                        
                    </div>
                </div>
                <div class="card">
  <div class="card-image">
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                        </p>
                    </div>
                </footer>
            </div>
            
        );
    }
}

//Draw the component
ReactDOM.render(
    <ClickButton />,
    document.getElementById('root')
);



ReactDOM.render(
  <h1>Goodbye!</h1>,
  document.getElementById('other')
);

ReactDOM.render(
  <progress class="progress is-small is-primary" max="100">15%</progress>,
  document.getElementById('test')
);




