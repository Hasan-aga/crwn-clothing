import { useSelector } from "react-redux";
import BoughtProductList from "../../components/bought-product-list/bought-product-list.component";
import { selectHistoryBoughtItems } from "../../store/history/history.selector";
import { selectCurrentUser } from "../../store/user/user.selectors";
import {
  BoughtProductListContainer,
  ProductGroupContainer,
} from "./profile.style";

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const boughItemGroups = useSelector(selectHistoryBoughtItems);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return (
    <div>
      <h2>Hello {currentUser ? currentUser.displayName : "no user"}</h2>
      <ProductGroupContainer>
        {boughItemGroups.length > 0
          ? boughItemGroups.map((itemGroup) => {
              return (
                <BoughtProductListContainer id={itemGroup.date}>
                  <h3>
                    {Intl.DateTimeFormat("en-GB", options).format(
                      new Date(itemGroup.date)
                    )}
                  </h3>
                  <BoughtProductList
                    key={itemGroup.date + 1}
                    products={itemGroup.boughtTogether}
                  />
                </BoughtProductListContainer>
              );
            })
          : "This is where your transaction history would be displayed"}
      </ProductGroupContainer>
    </div>
  );
};

export default Profile;
