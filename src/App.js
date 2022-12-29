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
    const { Visible } = this.state;
    return (
      <div className="App">
        <button className="btn" onClick={this.Visibility}>
          {Visible ? "Hide Profile" : "Show Profile"}
        </button>
        {Visible && <Profile />}
      </div>
    );
  }
}

export default App;
