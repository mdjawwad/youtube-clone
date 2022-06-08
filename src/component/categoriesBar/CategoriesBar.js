import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideo,
  getVideoByCategory,
} from "../../redux/action/video.action";
import "./_categoriesBar.scss";
const keywords = [
  "All",
  "Kids",
  "Music",
  "Gaming",
  "Film & Animation",
  "People & Blogs",
  "Redux",
  "Sport",
  "ReactJS",
  "Angular",
  "javaScript",
  "Comedy",
  "Gym",
  "News & Politics",
  "Education",
];

function CategoriesBar() {
  const [activeClass, SetActiveClass] = useState("All");
  const dispatch = useDispatch();
  const handleClass = (value) => {
    SetActiveClass(value);
    if (value === "All") {
      dispatch(getPopularVideo());
    } else {
      dispatch(getVideoByCategory(value));
    }
  };

  return (
    <div className="category">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClass(value)}
          key={i}
          className={activeClass === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
}

export default CategoriesBar;
