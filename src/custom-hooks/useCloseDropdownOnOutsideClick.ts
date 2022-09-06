import React, { MutableRefObject } from "react";

export const useCloseDropdownOnOutsideClick = (
  callback: () => void,
  dropdownStatus: boolean
) => {
  const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const targetIsMenuIcon = (event.target as Element)?.closest(
        ".cart-icon-container"
      );
      const trashIcon = (event.target as Element)?.closest(".cart-item-text");
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
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
