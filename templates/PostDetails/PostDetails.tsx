"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Box, Container } from "@mui/system";
import { Typography, Button, Modal } from "@mui/material";
import { IoMdQuote } from "react-icons/io";

import { User } from "../../types/user";

interface IProps {
  post: any;
  user: User;
  handleGetPostComments: (postId: number) => void;
  currentPostComments: any;
}

const PostDetails = ({
  post,
  handleGetPostComments,
  currentPostComments,
}: IProps) => {
  const router = useRouter();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button
        sx={{
          width: "150px",
          margin: "0 1rem",
        }}
        variant="contained"
        onClick={router.back}
      >
        back
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "3rem 0",
          justifyContent: "center",
          itemAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.06)",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.06)",
          borderRadius: "0.5rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
            textAlign: "center",
            margin: "2rem 0",
          }}
          component="h2"
        >
          <IoMdQuote />
          {post?.title}
        </Typography>

        <Typography
          sx={{
            fontWeight: "",
            maxWidth: "80%",
            color: "gray",
            fontSize: "1.2rem",
            textAlign: "center",
            fontStyle: "italic",
            margin: "0rem auto 1rem auto",
          }}
          component="h2"
        >
          {post?.body}
        </Typography>
      </Box>

      {currentPostComments?.length ? (
        currentPostComments?.map((comment: any) => (
          <Box
            key={comment.id}
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
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                textAlign: "center",
              }}
              component="h2"
            >
              {comment?.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                textAlign: "center",
                fontWeight: "400",
                color: "gray",
                fontVariant: "small-caps",
              }}
              component="h2"
            >
              {comment?.email}
            </Typography>
            <Typography
              sx={{
                color: "gray",
                margin: "1rem 0",
                fontSize: "0.8rem",
                textAlign: "center",
                fontStyle: "italic",
              }}
              component="h2"
            >
              {comment?.body}
            </Typography>
          </Box>
        ))
      ) : (
        <Button
          variant="outlined"
          sx={{
            width: "250px",
            margin: "3rem auto",
          }}
          onClick={() => handleGetPostComments(post.id)}
        >
          Show comments
        </Button>
      )}
    </Container>
  );
};

export default PostDetails;
