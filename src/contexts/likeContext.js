import React, { createContext, useState } from "react";

export const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState({});

  const toggleLike = (blogId) => {
    let likesArr = JSON.parse(localStorage.getItem("likes")) || [];
    const likeObj = likesArr.find((likeObj) => likeObj.id === blogId);
    if (likes[blogId] === true) {
      likeObj.count -= 1;
    } else {
      likeObj.count += 1;
    }

    localStorage.setItem("likes", JSON.stringify(likesArr));

    setLikes((prevLikes) => ({
      ...prevLikes,
      [blogId]: !prevLikes[blogId],
    }));
  };

  return (
    <LikesContext.Provider value={{ likes, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
};
