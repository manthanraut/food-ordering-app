import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-green-500 p-4 rounded-lg shadow-md mx-56 my-10">
        <div className="mb-4">
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold text-white">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"IronMan"} location={"Bangalore location"} />
      </div>
    );
  }
}

export default About;
