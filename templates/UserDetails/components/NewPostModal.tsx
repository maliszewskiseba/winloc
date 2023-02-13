import GenericModal from "@/app/components/GenericModal";
import { Box, Container } from "@mui/system";
import {
  Button,
  Input,
  TextareaAutosize,
  Typography,
  TextField,
} from "@mui/material";

interface IProps {
  handleClose: () => void;
  newPostTitleInputRef: HTMLInputElement;
  newPostBodyInputRef: HTMLTextAreaElement;
  handleAddNewPost: () => void;
}

const NewPostModal = ({
  handleClose,
  newPostTitleInputRef,
  newPostBodyInputRef,
  handleAddNewPost,
}: IProps) => {
  return (
    <GenericModal handleClose={handleClose}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
          component="h2"
        >
          Add new post
        </Typography>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              amtginTop: "3rem",
            }}
          >
            <Input ref={newPostTitleInputRef} type="text" placeholder="Title" />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginTop: "2rem",
            }}
          >
            <TextField
              ref={newPostBodyInputRef}
              placeholder="Place your text here"
              multiline
              rows={2}
              maxRows={4}
            />
          </Box>

          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
            }}
          >
            <Button
              onClick={handleClose}
              sx={{ margin: "0 1rem" }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              sx={{ margin: "0 1rem" }}
              variant="contained"
              onClick={handleAddNewPost}
            >
              {" "}
              Add
            </Button>
          </Box>
        </Container>
      </Container>
    </GenericModal>
  );
};

export default NewPostModal;
