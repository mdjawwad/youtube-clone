import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "/home/jawwad/yt-clone/src/redux/reducer/auth.reducer.js";
import thunk from "redux-thunk";
import {
  channelVideosReducer,
  homeVideosReducer,
  relatedVideoReducer,
  searchedVideosReducer,
  subscriptionsChannelReducer,
} from "./reducer/videos.reducer";
import { selectedVideoReducer } from "./reducer/videos.reducer";
import { channelDetailsReducer } from "./reducer/channel.reducer";
import { commentListReducer } from "./reducer/comments.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideo: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer, 
  channelVideos: channelVideosReducer
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
