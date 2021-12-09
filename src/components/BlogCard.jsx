import React from "react";
import "./BlogCard.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function BlogCard({ title, image, author, date, path }) {
  return (
    <Card
      className="blogCard"
      style={{ marginBottom: 30, marginLeft: 15, marginRight: 15 }}
    >
      <CardActionArea style={{ width: 330 }}>
        <CardMedia
          //   className="productCard"
          component="img"
          alt="Luxury Taste"
          height="230"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="p"
            style={{ fontSize: 18 }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Author: {author}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ marginTop: 10, color: "turquoise" }}
          >
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        <a href={path} style={{ textDecoration: "none" }}>
          <Button
            style={{
              width: 200,
              color: "white",
              borderRadius: 5,
              textTransform: "lowercase",
              backgroundColor: "#fe3e57",
              padding: "10px 20px",
            }}
          >
            Read more
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
