import React from "react";
import "./EditItemModal.css";

const EditItemModal = ({ children, visible, setVisible }) => {
  const rootClasses = ["myModal"];
  if (visible) {
    rootClasses.push("myModalActive");
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className="myModalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default EditItemModal;
