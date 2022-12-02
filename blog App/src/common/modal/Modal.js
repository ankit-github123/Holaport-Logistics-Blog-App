import React, { useEffect } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { signInwithGoogle } from "../../services/firebase";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#1C233C",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  }
}));
export default function ModalMui(props) {
  const open = props.open;
  const setOpen = props.setOpen;
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }



  const classes = useStyles()
  return (
    <div>
      <Modal
        open={open}
        onClose={props.setOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={getModalStyle()} className={classes.paper}>
          {props.children}

          {/* <button onClick={signInwithGoogle}>Google</button> */}
        </div>

      </Modal>
    </div>
  );
}