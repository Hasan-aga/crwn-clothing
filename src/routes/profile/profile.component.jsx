import { useSelector } from "react-redux";
import { selectHistoryBoughtItems } from "../../store/history/history.selector";
import { selectCurrentUser } from "../../store/user/user.selectors";
import {
  BoughtProductListContainer,
  BoughtProductsList,
} from "./profile.style";

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const boughItems = useSelector(selectHistoryBoughtItems);
  return (
    <div>
      <h2>Hello {currentUser ? currentUser.email : "no user"}</h2>
      {boughItems.length > 0 ? (
        <BoughtProductListContainer>
          {boughItems.map((item) => (
            <BoughtProductsList id={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <h4>{item.name}</h4>
              <span>{item.price} USD</span>
            </BoughtProductsList>
          ))}
        </BoughtProductListContainer>
      ) : (
        "This is where your transaction history would be displayed"
      )}
    </div>
  );
};

export default Profile;
