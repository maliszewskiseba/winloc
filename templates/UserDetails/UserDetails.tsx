"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useAppContext } from "../../app/context/AppContext";

import { Button, Container, Modal, Box } from "@mui/material";

import NewPostModal from "./components/NewPostModal";
import PostsListing from "./components/PostsListing";
import UserCard from "./components/UserCard";

import { IoIosArrowBack } from "react-icons/io";

const UserDetails = ({
  user,
  handleRemovePost,
  setDeletePostModalOpen,
  isDeletePostModalOpen,
  tempPost,
  removePost,
  handleredirectToPostDetails,
  newPostTitleInputRef,
  newPostBodyInputRef,
  handleAddNewPost,
  setNewPostModalOpen,
  isNewPostModalOpen,
}: {
  user: any;
  handleRemovePost: (postId: number, e: any) => void;
  setDeletePostModalOpen: (value: boolean) => void;
  isDeletePostModalOpen: boolean;
  tempPost: any;
  removePost: (postId: number) => void;
  handleredirectToPostDetails: (postId: number, e: any) => void;
  newPostTitleInputRef: HTMLInputElement;
  newPostBodyInputRef: HTMLTextAreaElement;
  handleAddNewPost: () => void;
  setNewPostModalOpen: (value: boolean) => void;
  isNewPostModalOpen: boolean;
}) => {
  const { currentUserPosts } = useAppContext();
  const router = useRouter();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "20%",
          }}
        >
          <Button variant="contained" onClick={router.back}>
            <IoIosArrowBack />
            Back
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "60%",
          }}
        >
          <UserCard user={user} />
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "20%",
          }}
        >
          <Button variant="contained" onClick={() => setNewPostModalOpen(true)}>
            Add new post
          </Button>
        </Box>
      </Box>

      <PostsListing
        posts={currentUserPosts}
        handleRemovePost={handleRemovePost}
        isDeletePostModalOpen={isDeletePostModalOpen}
        setDeletePostModalOpen={setDeletePostModalOpen}
        tempPost={tempPost}
        removePost={removePost}
        handleredirectToPostDetails={handleredirectToPostDetails}
      />

      <Modal
        open={isNewPostModalOpen}
        onClose={() => setNewPostModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NewPostModal
          handleClose={() => setNewPostModalOpen(false)}
          newPostTitleInputRef={newPostTitleInputRef}
          newPostBodyInputRef={newPostBodyInputRef}
          handleAddNewPost={handleAddNewPost}
        />
      </Modal>
    </Container>
  );
};

export default UserDetails;
