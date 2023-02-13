"use client";

import React, { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";

interface IProps {
  children: ReactNode;
}

const AppContextProvider = ({ children }: IProps) => {
  const [users, setUsers] = useState<any>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [currentUserPosts, setCurrentUserPosts] = useState<any>([]);
  const [currentPost, setCurrentPost] = useState<any>(null);
  const [currentPostComments, setCurrentPostComments] = useState<any>([]);

  const addCurrentUser = (user: any) => {
    setCurrentUser(user);
  };

  const addUsers = (users: any) => {
    setUsers(users);
  };

  const addCurrentUserPosts = (posts: any) => {
    setCurrentUserPosts(posts);
  };

  const addCurrentPost = (post: any) => {
    setCurrentPost(post);
  };

  const addCurrentPostComments = (comments: any) => {
    setCurrentPostComments(comments);
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        addCurrentUser,
        users,
        addUsers,
        currentUserPosts,
        addCurrentUserPosts,
        currentPost,
        addCurrentPost,
        currentPostComments,
        addCurrentPostComments,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
