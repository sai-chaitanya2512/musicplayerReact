import { useSelector } from "react-redux";
import React, { useReducer, useState } from "react";
import { StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons";
import { BsShuffle } from 'react-icons/bs';
// import { shuffle } from "../redux/slice/playListSlice";
export default function PlayList() {
   const SelectPlayList = useSelector(state => state.List.value)

   const [selectedSong, setSelectedSong] = useState({
      ink: "",
      index: "",

   })


   const prev = (index) => {
      let i;
      if (index + 1 <= SelectPlayList.data.results.length - 1) {
         i = index + 1;
         setSelectedSong({
            ink: SelectPlayList.data.results[i].downloadUrl[3].link,
            index: i
         })
      }
   }

   const next = (index) => {
      let j;
      if (index - 1 <= SelectPlayList.data.results.length + 1) {
         j = index - 1;
         setSelectedSong({
            ink: SelectPlayList.data.results[j].downloadUrl[3].link,
            index: j
         })
         console.log(SelectPlayList);
      }
   }

   const shuffle = (index) => {
      let k = _.shuffle([SelectPlayList.data.results]);
      setSelectedSong({
         ink: SelectPlayList.data.results[k].downloadUrl[3].link,
         index: k
      })
   }

   return (
      <>
         {SelectPlayList && SelectPlayList.data && SelectPlayList.data.results && SelectPlayList.data.results.map((e, index) => {

            return (
               <>
                  <div onClick={() => setSelectedSong({
                     ink: e.downloadUrl[3].link,
                     index: index
                  })}>
                     <img src={e.image[2].link} />
                     <p>{e.name}</p>
                     <p>Language:{e.language}</p>
                  </div>

               </>
            )

         })}
         <div style={{ height: "100px", display: "flex", alignItems: "center", columnGap: "1rem" }}>
            <span><button onClick={() => prev(selectedSong.index)} style={{ width: "55px", height: "55px", borderRadius: "50%" }} ><StepBackwardOutlined style={{ fontSize: "20px" }} /></button></span>
            <span key={selectedSong.ink}><audio style={{ width: "300px" }} src={selectedSong.ink} autoPlay controls /></span>
            <span><button onClick={() => next(selectedSong.index)} style={{ width: "55px", height: "55px", borderRadius: "50%" }}  ><StepForwardOutlined style={{ fontSize: "20px" }} /></button></span>
            <span><button onClick={() => shuffle(selectedSong.index)} style={{ width: "55px", height: "55px", borderRadius: "50%" }}><BsShuffle style={{ fontSize: "20px" }} /></button></span>

         </div>

      </>

   )
}