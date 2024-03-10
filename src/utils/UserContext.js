import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "End User",
});

export default UserContext;