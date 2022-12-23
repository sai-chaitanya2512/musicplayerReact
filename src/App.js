import { useDispatch } from "react-redux";
import Main from "./components/main"
import PlayList from "./components/playList";
import { fetch } from "./redux/slice/playListSlice";

function App() {
  const dispatch = useDispatch()
dispatch(fetch())
  return (
    <div className="App">
  <Main/>
  {/* <PlayList/> */}
    </div>
  );
}

export default App;
