import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Modal from "../../common/modal/Modal";
import image from "../../assets/image.jpg"
import DeleteIcon from "@material-ui/icons/DeleteOutlineRounded";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import BlogCreate from "../../blog/BlogCreate";
import "./card.css"
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  media: {
    height: "25vh",
    opacity: 0.85
  },
  desc: {
    height: "90px"
  },
});

export default function CardContainer(props) {
  const { globalData, setGlobalData } = props.glob;

  const [open, setOpen] = useState(false);
  const [displayAction, setDisplayAction] = useState(false);
  const { id, title, userId, body } = props.item

  window.addEventListener("storage", () => {
    setDisplayAction(!displayAction);
  })
  const handleClose = () => {
    setOpen(!open);
  };
  const handleDelete = () => {
    setGlobalData(globalData.filter((item) => item.id !== id))
  }
  const classes = useStyles();
  const renderBlog = () => {
    setOpen(!open)
  }
  return (
    <Card className={`${classes.root}`}>
      <Modal open={open} setOpen={handleClose}>
        <BlogCreate cardItem={props.item} open={open} setOpen={handleClose} glob={{ globalData: globalData, setGlobalData: setGlobalData }} />
      </Modal>
      <CardMedia
        className={`${classes.media}`}
        image={image}
        title={title.slice(0, 30)}
      />
      <CardContent className="primary primary_text">
        <Typography className="primary primary_text" variant="h5" component="h2">
          {title.slice(0, 25)}
        </Typography>
        <p className={`${classes.desc} secondary_text`} variant="body2" color="textSecondary" component="p">
          {body.slice(0, 150)}
        </p>
      </CardContent>
      {Boolean(localStorage.getItem("name")) && <div className="card_buttons">
        <IconButton onClick={renderBlog} className="card_button_div"><EditIcon style={{ fontSize: "30px", cursor: "pointer", color: "blue" }} /></IconButton>
        <IconButton onClick={handleDelete} className="card_button_div"><DeleteIcon style={{ fontSize: "30px", cursor: "pointer", color: "red" }} /></IconButton>
      </div>}
    </Card>
  );
}