"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import { User } from "../../../types/user";

import { getSingleUser } from "../../../API/users";
import { getUserPosts, deletePost, addNewPost } from "@/API/posts";
import { useAppContext } from "../../context/AppContext";

import UserDetails from "../../../templates/UserDetails/UserDetails";

const UserPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const newPostTitleInputRef = useRef<HTMLInputElement>();
  const newPostBodyInputRef = useRef<HTMLTextAreaElement>();

  // const [user, setUser] = useState<User | null>(null);
  const [tempPost, setTempPost] = useState<any>({});
  const { currentUser, addCurrentUser, addCurrentUserPosts, currentUserPosts } =
    useAppContext();
  const [isDeletePostModalOpen, setDeletePostModalOpen] = useState(false);
  const [isNewPostModalOpen, setNewPostModalOpen] = useState(false);

  useEffect(() => {
    if (pathname) {
      handleGetSingleUser(parseInt(pathname?.split("/")[2]));
      handleGetSingleUserPosts(parseInt(pathname?.split("/")[2]));
    }
  }, [pathname]);

  const handleGetSingleUser = async (userId: number) => {
    const user: User = await getSingleUser(userId);
    addCurrentUser(user);
  };

  const handleGetSingleUserPosts = async (userId: number) => {
    const posts = await getUserPosts(userId);

    addCurrentUserPosts(posts);
  };

  const removePost = async (postId: number) => {
    await deletePost(postId);

    // normally i would fetch data after delete, but typicode is faking deleting data so i have to filter and update local data
    // pathname && handleGetSingleUserPosts(parseInt(pathname?.split("/")[2]));

    const filteredPosts = currentUserPosts.filter(
      (post: any) => post.id !== postId
    );
    addCurrentUserPosts(filteredPosts);
    setDeletePostModalOpen(false);
  };

  const handleRemovePost = (postId: number, e: any) => {
    e.stopPropagation();

    setTempPost(currentUserPosts.find((post: any) => post.id === postId));
    setDeletePostModalOpen(true);
  };

  const handleredirectToPostDetails = (postId: number, e: any) => {
    e.stopPropagation();

    router.push(`/user/${currentUser.id}/${postId}`);
  };

  const handleAddNewPost = async () => {
    const post = {
      title: newPostTitleInputRef?.current?.value,
      body: newPostBodyInputRef?.current?.value,
      userId: currentUser.id,
    };
    const newPost = await addNewPost(post);
    setNewPostModalOpen(false);

    addCurrentUserPosts([...currentUserPosts, newPost]);
  };

  return (
    <UserDetails
      user={currentUser}
      handleRemovePost={handleRemovePost}
      setDeletePostModalOpen={setDeletePostModalOpen}
      isDeletePostModalOpen={isDeletePostModalOpen}
      tempPost={tempPost}
      removePost={removePost}
      handleredirectToPostDetails={handleredirectToPostDetails}
      newPostTitleInputRef={newPostTitleInputRef}
      newPostBodyInputRef={newPostBodyInputRef}
      handleAddNewPost={handleAddNewPost}
      setNewPostModalOpen={setNewPostModalOpen}
      isNewPostModalOpen={isNewPostModalOpen}
    />
  );
};

export default UserPage;
