import React, { useEffect } from 'react';
import axios from "axios";
import styles from "../styles/home.module.scss";
import { Input } from 'antd';
import {
  AudioOutlined,
  LeftOutlined,
  RightOutlined,
  UserOutlined,
  DownOutlined
} from '@ant-design/icons';
import { useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import PlayList from "../components/playList";
import { fetch } from '../redux/slice/playListSlice';


function Home() {

  const [inputvalue, setinput] = useState();

  const { Search } = Input;
  // console.log(inputvalue);
  // const val = "a"
  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(fetch({input : inputvalue}))
  },[inputvalue])

  // const data1 = axios.get(`https://saavn.me/search/songs?query=${inputvalue}`)


const data = useSelector(state => state.List.value)
// console.log(data1);
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  return (
  <div className={styles.home}>
    <div className={styles.header}>
    <div>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={data}
        onChange={(e) => setinput(e.target.value)}
      />
    </div>
 
    </div>
    <div className={styles.list}><PlayList/></div>
  </div>
  )
}
export default Home;