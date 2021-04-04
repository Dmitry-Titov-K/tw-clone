import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Backdrop from "@material-ui/core/Backdrop";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import { ModalStyles } from "../../styles/ModalStyle";

interface IModalBlockProps {
  children: React.ReactElement;
  handleClose: () => void;
  visible?: boolean;
}

export const ModalBlock: React.FC<IModalBlockProps> = ({
  children,
  handleClose,
  visible = false,
}: IModalBlockProps): React.ReactElement => {
  const classes = ModalStyles();
  return (
    <Dialog
      open={visible}
      onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{ invisible: false }}
    >
      <DialogTitle
        id="form-dialog-title"
        className={classes.modalPadding}
      >
        <IconButton
          color="primary"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent
        className={classes.modalPadding}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
