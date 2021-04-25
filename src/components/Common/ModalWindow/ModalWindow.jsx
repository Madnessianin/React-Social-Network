import { Modal } from "antd";
import React, { useEffect, useState } from "react";

const ModalWindow = ({ children, visible, title, onCancel }) => {
  const [visibleMode, setVisibleMode] = useState(visible);
  useEffect(() => {
    setVisibleMode(visible);
  }, [visible]);

  return (
    <Modal 
      title={title} 
      visible={visibleMode} 
      footer={null} 
      centered
      onCancel={onCancel}
    >
      {children}
    </Modal>
  );
};

export default ModalWindow;
