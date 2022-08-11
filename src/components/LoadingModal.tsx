import { Button, Modal, Icon } from "react-onsenui";
import React, { useEffect, useState } from "react";

interface LoadingProp {
  open: boolean;
  showClose?: boolean;
}

const LoadingModal: React.FC<LoadingProp> = (props) => {

  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <Modal isOpen={open}>
      <Icon
        icon="md-spinner" size={{ default: 128 }} spin />
      <p>Loading...</p>
      {props.showClose && <Button onClick={() => setOpen(false)}>Close</Button>}
    </Modal>)
}

export default LoadingModal;
