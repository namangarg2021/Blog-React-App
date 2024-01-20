import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: JSON.parse(localStorage.getItem("blogs")) || [],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      let now = new Date();
      action.payload.date =
        now.toLocaleDateString() + " " + now.toLocaleTimeString();

      blogs.push(action.payload);
      localStorage.setItem("blogs", JSON.stringify(blogs));

      state.blogs.push(action.payload);

      let likesArr = JSON.parse(localStorage.getItem("likes")) || [];
      let likeObj = { id: action.payload.id, count: 0 };
      likesArr.push(likeObj);
      localStorage.setItem("likes", JSON.stringify(likesArr));
    },
    updateBlog: (state, action) => {
      const { id, title, category, description } = action.payload;

      let blogs = JSON.parse(localStorage.getItem("blogs"));
      let index = blogs.findIndex((blog) => blog.id === id);
      blogs[index].title = title;
      blogs[index].category = category;
      blogs[index].description = description;
      localStorage.setItem("blogs", JSON.stringify(blogs));

      const blogIndex = state.blogs.findIndex((blog) => blog.id === id);
      state.blogs[blogIndex].title = title;
      state.blogs[blogIndex].category = category;
      state.blogs[blogIndex].description = description;
    },
    deleteBlog: (state, action) => {
      const id = action.payload;
      let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      blogs = blogs.filter((blog) => blog.id !== id);
      localStorage.setItem("blogs", JSON.stringify(blogs));

      state.blogs = state.blogs.filter((blog) => blog.id !== id);

      let likesArr = JSON.parse(localStorage.getItem("likes")) || [];
      likesArr = likesArr.filter((obj) => obj.id !== id);
      localStorage.setItem("likes", JSON.stringify(likesArr));
    },
  },
});

export const selectBlogById = (state, blogID) => {
  return state.blogs.blogs.find((blog) => blog.id === blogID);
};

export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
