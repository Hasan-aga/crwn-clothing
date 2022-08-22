import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selectors";

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div>
      <h2>Hello {currentUser ? currentUser.email : "no user"}</h2>
    </div>
  );
};

export default Profile;
