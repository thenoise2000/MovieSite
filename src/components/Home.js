import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewMovies from "./NewMovies";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    background: #870000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #190A05, #870000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #190A05, #870000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    

    &:after {
        background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
      content: "";
      position: absolute;
      inset: 0px;
      opacity: 1;
      z-index: -1;
    }
`;

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newMovies = [];
    let originals = [];
    let trending = [];
  
    useEffect(() => {
      console.log("hello");
      db.collection("movies").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          console.log(recommends);
          switch (doc.data().type) {
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;
  
            case "new":
              newMovies = [...newMovies, { id: doc.id, ...doc.data() }];
              break;
  
            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;
  
            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
          }
        });
  
        dispatch(
          setMovies({
            recommend: recommends,
            newMovie: newMovies,
            original: originals,
            trending: trending,
          })
        );
      });
    }, [userName]);

    return(
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <NewMovies/>
            <Originals/>
            <Trending/>
        </Container>
    );
};

export default Home;