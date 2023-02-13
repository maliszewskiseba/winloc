import { useState } from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { Box, Container } from "@mui/system";
import { Typography, Button, Modal } from "@mui/material";

import DeletePostModal from "./DeletePostModal";

interface IProps {
  posts: any;
  handleRemovePost: (postId: number, e: any) => void;
  isDeletePostModalOpen: boolean;
  setDeletePostModalOpen: (value: boolean) => void;
  tempPost: any;
  removePost: (postId: number) => void;
  handleredirectToPostDetails: (postId: number, e: any) => void;
}

const PostsListing = ({
  posts,
  handleRemovePost,
  isDeletePostModalOpen,
  setDeletePostModalOpen,
  tempPost,
  removePost,
  handleredirectToPostDetails,
}: IProps) => {
  return (
    <Container>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          textAlign: "center",
        }}
        component="h2"
      >
        {posts?.length ? "Posts:" : "No posts"}
      </Typography>
      {posts?.map((post: any) => (
        <Box
          onClick={(e: any) => handleredirectToPostDetails(post.id, e)}
          key={post.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            maxWidth: {
              xl: "50%",
              lg: "50%",
              md: "50%",
              sm: "100%",
              xs: "100%",
            },
            margin: "1rem auto",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            borderRadius: "0.5rem",
            padding: "1rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.06)",
            zIndex: 0,
          }}
        >
          <Button
            sx={{
              position: "absolute",
              top: 0,
              right: 0,

              color: "black",
              backgroundColor: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
              maxWidth: "35px",
              maxHeight: "35px",
              minWidth: "35px",
              minHeight: "35px",
              outline: "none",
              backgroundColor: "transparent",
              zIndex: 22,

              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={(e: any) => handleRemovePost(post.id, e)}
          >
            <IoIosCloseCircleOutline className="btn-close" />
          </Button>
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
              component="h2"
            >
              {post.title}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "normal", fontSize: "0.8rem", color: "gray" }}
              component="span"
            >
              {post.body.slice(0, 50)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
              marginTop: "1rem",
            }}
          >
            <Button variant="contained" size="small">
              View
            </Button>
          </Box>
        </Box>
      ))}

      <Modal
        open={isDeletePostModalOpen}
        onClose={() => setDeletePostModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DeletePostModal
          handleClose={() => setDeletePostModalOpen(false)}
          handleRemovePost={handleRemovePost}
          tempPost={tempPost}
          removePost={removePost}
        />
      </Modal>
    </Container>
  );
};

export default PostsListing;
