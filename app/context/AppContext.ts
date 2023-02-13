"use client";

// import { Product } from "interfaces";
import { createContext, useContext } from "react";

interface IProductContext {
  users: any;
  addUsers: (product: any) => void;
  currentUser: any;
  addCurrentUser: (user: any) => void;
  currentUserPosts: any;
  addCurrentUserPosts: (posts: any) => void;
  currentPost: any;
  addCurrentPost: (post: any) => void;
  addCurrentPostComments: (comments: any) => void;
  currentPostComments: any;
}

export const AppContext = createContext<IProductContext>({
  users: [],
  addUsers: (product: any) => {},
  currentUser: {},
  addCurrentUser: (user: any) => {},
  currentUserPosts: [],
  addCurrentUserPosts: (posts: any) => {},
  currentPost: {},
  addCurrentPost: (post: any) => {},
  addCurrentPostComments: (comments: any) => {},
  currentPostComments: [],
});

export const useAppContext = () => useContext(AppContext);
