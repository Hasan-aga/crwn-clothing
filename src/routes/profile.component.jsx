import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <h2>Hello {currentUser ? currentUser.email : "no user"}</h2>
    </div>
  );
};

export default Profile;
