import { Component } from "react";
import img from "./johndoe.png";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullname: "jhon doe",
        bio: "i am an unknown man that does not exist",
        imgsrc: img,
        profession: "wants to be a squirel",
        timer: 0,
      },
    };
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div>
        <img
          src={this.state.person.imgsrc}
          alt="img"
          style={{ borderRadius: "50%" }}
        />
        <div>{this.state.person.fullname}</div>
        <div>{this.state.profile.bio}</div>
        <div>{this.state.profile.profession}</div>
      </div>
    );
  }
}

export default Profile;
