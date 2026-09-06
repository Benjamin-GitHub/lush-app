import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ShoppingBasket } from "@mui/icons-material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalDetails({ product, tags, description }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // console.log(product.node.description.blocks[2].data.text);
  return (
    <div>
      <Button onClick={handleOpen}>
        <ShoppingBasket fontSize="medium" color="success" />
        <Typography sx={{ p: 2 }}>More Details / Shopping</Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          overflow: "scroll",
          height: "100%",
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {product.node.seoTitle === ""
              ? product.node.name
              : product.node.seoTitle}
          </Typography>
          <CardMedia
            component="img"
            height="auto"
            src={product.node.media[0].url}
            alt={product.node.slug}
          />
          <Typography fontWeight="fontWeightMedium">Description:</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            {product.node.seoDescription}
          </Typography>
          <Stack sx={{ mt: 1, display: "block" }} spacing={1}>
            {tags.map((tag) => (
              <Chip icon={<FaceIcon />} label={tag} variant="outlined" />
            ))}
          </Stack>
          {/* <Typography sx={{ mt: 2 }}>
            {description.blocks[0].data.text.replace(/<[^>]+>/g, "")}
          </Typography> */}
          {/* <Typography sx={{ mt: 1 }}>
            {description.blocks[1].data.text.replace(/<[^>]+>/g, "")}
          </Typography> */}
          {/* <Typography sx={{ mt: 1 }}>
            {description.blocks[2].data.text.replace(/<[^>]+>/g, "")}
          </Typography>
          <Typography sx={{ mt: 1 }}>
            {description.blocks[3].data.text.replace(/<[^>]+>/g, "")}
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
