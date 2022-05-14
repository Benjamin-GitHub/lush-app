import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import ModalDetails from "./ModalDetails";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCards({ products }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // console.log(products.map(product => product.node.media.map((e) => e.url).findIndex((x) => /.png/.test(x) || /.jpg/.test(x))));
  const url = products.map((product) => product.node.media.map((e) => e.url));
  // const jpegPattern = /.jpeg/;
  // const pngPattern = /.png/;

  const findPrimaryImageIndex = url.findIndex(
    (x) => /.png/.test(x) || /.jpg/.test(x)
  );
  // const findSecondaryImageIndex = url.findIndex((x) => /.jpeg/.test(x));

  return (
    <Container
      sx={{
        py: 8,
      }}
      maxWidth="md"
    >
      <Grid container spacing={4}>
        {products.map((product) => {
          // console.log(
          //   JSON.parse(product.node.description).blocks.map((x) => x.data.text)
          // );
          return (
            <Grid item key={product.node.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  display: "flex",
                  maxWidth: "auto",
                  height: "100%",
                  flexDirection: "column",
                  borderRadius: 4,
                }}
              >
                <CardHeader
                  sx={{
                    mt: 1,
                    height: 80,
                  }}
                  title={
                    product.node.seoTitle === ""
                      ? product.node.name
                      : product.node.seoTitle
                  }
                  subheader={product.node.collections[0].name}
                />
                <CardHeader />
                <CardMedia
                  component="img"
                  src={product.node.media[findPrimaryImageIndex].url}
                  alt={product.node.slug}
                  sx={{
                    height: 200,
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                      mt: 5,
                    }}
                  >
                    <Rating
                      name="Customer's Rate"
                      value={parseInt(product.node.rating)}
                      readOnly
                    />
                  </Box>
                </CardContent>
                <CardActions disableSpacing>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardActions>
                    <ModalDetails
                      product={product}
                      tags={product.node.collections.map((e) => e.name)}
                      description={JSON.parse(product.node.description)}
                      key={product.node.id}
                    />
                  </CardActions>
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
