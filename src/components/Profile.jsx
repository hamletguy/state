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
      },
      timer: 0,
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
    const { person, timer } = this.state;
    const { fullname, bio, imgsrc, profession } = person;
    return (
      <div
        style={{
          backgroundColor: "grey",
          marginLeft: "400px",
          marginRight: "400px",
          height: "500px",
          borderRadius: "10%",
        }}
      >
        <img
          src={imgsrc}
          alt="img"
          style={{ borderRadius: "50%", width: "40%" }}
        />
        <h1>{fullname}</h1>
        <h3>{bio}</h3>
        <h3>{profession}</h3>
        <h3>{timer}</h3>
      </div>
    );
  }
}

export default Profile;
