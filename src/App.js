import "./App.css";
import { Component } from "react";
import Profile from "./components/Profile";

class App extends Component {
  state = {
    Visible: false,
  };

  Visibility = () => {
    this.setState({ Visible: !this.state.Visible });
  };

  render() {
    return (
      <div className="App">
        <button className="btn" onClick={this.Visibility}>
          {this.state.Visible ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.Visible && <Profile />}
      </div>
    );
  }
}

export default App;
