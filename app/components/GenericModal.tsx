import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface IProps {
  children: React.ReactNode;
  handleClose: () => void;
}

const GenericModal = ({ children, handleClose }: IProps) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          padding: "2rem",
          borderRadius: "1rem",
          justifyItems: "center",
          justifySelf: "center",
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50vw",
          height: 300,
          maxWidth: 800,
          maxHeight: 600,
          backgroundColor: "white",
        }}
      >
        <Button
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            top: "1rem",
            color: "black",
            backgroundColor: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            width: 20,
            height: 20,
          }}
          onClick={() => handleClose()}
        >
          <IoIosCloseCircleOutline />
        </Button>
        {children}
      </Box>
    </Container>
  );
};

export default GenericModal;
