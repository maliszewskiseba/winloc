"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { User } from "../../../../types/user";

import { getSinglePost, getPostComments } from "../../../../API/posts";
import { getSingleUser } from "../../../../API/users";

import { useAppContext } from "../../../context/AppContext";

import PostDetails from "../../../../templates/PostDetails/PostDetails";

const SinglePost = () => {
  const pathname = usePathname();

  const {
    currentPost,
    addCurrentPost,
    addCurrentUser,
    currentUser,
    currentPostComments,
    addCurrentPostComments,
  } = useAppContext();

  useEffect(() => {
    if (pathname) {
      addCurrentPostComments([]);
      handleGetSinglePost(parseInt(pathname?.split("/")[3]));
      !currentUser && handleGetSingleUser(parseInt(pathname?.split("/")[2]));
    }
  }, [pathname]);

  const handleGetSinglePost = async (postId: number) => {
    const post: any = await getSinglePost(postId);
    addCurrentPost(post);
  };

  const handleGetSingleUser = async (userId: number) => {
    const user: User = await getSingleUser(userId);
    addCurrentUser(user);
  };

  const handleGetPostComments = async (postId: number) => {
    const comments = await getPostComments(postId);
    addCurrentPostComments(comments);
  };

  return (
    <PostDetails
      user={currentUser}
      post={currentPost}
      handleGetPostComments={handleGetPostComments}
      currentPostComments={currentPostComments}
    />
  );
};

export default SinglePost;
