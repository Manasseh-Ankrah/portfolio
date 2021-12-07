import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function FolioCard({ title, image, price, rating, category }) {
  return (
    <Card className="foliocard" style={{ marginBottom: 30 }}>
      <CardActionArea style={{ width: 330 }}>
        <CardMedia
          //   className="productCard"
          component="img"
          alt="Luxury Taste"
          height="200"
          image={image}
          title={category}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p">
            Category: {category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}:
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
        <Button
          style={{
            width: 230,
            color: "white",
            borderRadius: 5,
            textTransform: "lowercase",
            backgroundColor: "#ecca08",
            padding: "10px 20px",
          }}
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}
