import React from "react";

export const useCloseDropdownOnOutsideClick = (callback, dropdownStatus) => {
  const ref = React.useRef();
  console.log(ref.current);
  React.useEffect(() => {
    const handleClick = (event) => {
      const targetIsMenuIcon = event.target.closest(".cart-icon-container");
      const trashIcon = event.target.closest(".cart-item-text");
      console.log("target is exceptoon? ", trashIcon);
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !ref.current.contains(trashIcon) &&
        !targetIsMenuIcon &&
        !trashIcon &&
        dropdownStatus
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return ref;
};
