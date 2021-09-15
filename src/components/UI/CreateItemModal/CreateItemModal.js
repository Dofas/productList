import React from "react";
import "./CreateItemModal.css";

const CreateItemModal = ({ children, visible, setVisible }) => {
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

export default CreateItemModal;
