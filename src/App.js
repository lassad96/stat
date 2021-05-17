
import './App.css';
import React, {Component} from 'react';




class App extends Component {
  state = {
    Person: {
      fullName: "Lassad Tajouri",
      bio: "Now I am studying fullstackjs",
      profession: "Ingeneer",
      image: "imageslt.jpg"
    },
    show: true,
    seconds: 1
  };
componentDidMount(){
  this.timer = setInterval(()=>{
    this.setState({seconds: this.state.seconds + 1});}, 100);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
    
      <>
      <div style={{
      textAlign: "center",
      display: "block"
    }}>
        {this.state.show && (
          <>
            <h1 >{this.state.Person.fullName } </h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.image} alt="lt" style={{ marginBottom: 20, marginTop: 20 }}></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>show</button>
        <h5>number of seconds is: {this.state.seconds}</h5>
        </div>
      </>
      
    );
  }
}

export default App;
