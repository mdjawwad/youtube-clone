import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoHorizontal from '../component/videoHorizantal/VideoHorizontal';
import {Container} from 'react-bootstrap'
import { getVideosBySearch } from "../redux/action/video.action";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SearchScreen = () => {
  const { query } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getVideosBySearch(query))
  }, [query, dispatch])

  const { videos, loading } = useSelector(state => state.searchedVideos)

  return (
     <Container>
        {!loading ? (
           videos?.map(video => (
              <VideoHorizontal
                 video={video}
                 key={video.id.videoId}
                 searchScreen
              />
           ))
        ) : (
           <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
              <Skeleton width='100%' height='160px' count={20} />
           </SkeletonTheme>
        )}
     </Container>
  )
};

export default SearchScreen;
