import GenericModal from "@/app/components/GenericModal";
import { Box, Container } from "@mui/system";
import { Button, Typography } from "@mui/material";

interface IProps {
  handleClose: () => void;
  handleRemovePost: (postId: number, e: any) => void;
  tempPost: any;
  removePost: (postId: number) => void;
}

const DeletePostModal = ({
  handleClose,
  handleRemovePost,
  tempPost,
  removePost,
}: IProps) => {
  return (
    <GenericModal handleClose={handleClose}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
          component="h2"
        >
          Are you sure you want to delete the post?
        </Typography>

        <Container
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "flex-row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3.5rem",
          }}
        >
          <Box>
            <Button
              sx={{ width: "150px", margin: "0 1rem" }}
              variant="outlined"
              onClick={() => handleClose()}
            >
              {" "}
              Cancel
            </Button>
          </Box>
          <Box>
            <Button
              sx={{ width: "150px", margin: "0 1rem" }}
              variant="contained"
              onClick={() => removePost(tempPost.id)}
            >
              {" "}
              Yes
            </Button>
          </Box>
        </Container>
      </Container>
    </GenericModal>
  );
};

export default DeletePostModal;
