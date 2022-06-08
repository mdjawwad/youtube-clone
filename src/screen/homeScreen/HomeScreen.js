import { Col, Container } from "react-bootstrap";
import "/home/jawwad/yt-clone/src/screen/homeScreen/__homescreen.scss";
import CategoriesBar from "../../component/categoriesBar/CategoriesBar";
import Video from "../../component/video/Video";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getPopularVideo,
  getVideoByCategory,
} from "../../redux/action/video.action";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../component/skeleton/SkeletonVideo";
const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideo());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideo
  );

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideo());
    } else {
      dispatch(getVideoByCategory(activeCategory));
    }
  };

  return (
    <Container className="homeScreen">
      <CategoriesBar />
      <div className="home-wrapper">
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className="spinner spinner-border text-danger d-block mx-auto "></div>
          }
          className="row"
        >
          {!loading
            ? videos.map((video) => (
                <Col lg={3} md={4}>
                  <Video video={video} key={video.id} />
                </Col>
              ))
            : [...Array(20)].map(() => (
                <Col lg={3} md={4}>
                  <SkeletonVideo />
                </Col>
              ))}
        </InfiniteScroll>
      </div>
    </Container>
  );
};

export default HomeScreen;
