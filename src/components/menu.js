import React from "react";
import styles from "../styles/menu.module.scss";
import {
    HomeOutlined,
    SaveOutlined,
    WifiOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';

export default function Aside() {
    return (
        <div className={styles.aside}>
            <div>
                <ul type="none">
                    <li><HomeOutlined /> Home</li>
                    <li><SaveOutlined /> Search</li>
                    <li><WifiOutlined /> Radio</li>
                </ul>
            </div>
            <div>
                <ul type="none">
                    <li>YOUR LIBRARY</li>
                    <li>Made For You </li>
                    <li>Recently Played</li>
                    <li>Liked Songs</li>
                    <li> Albums</li>
                    <li> Artists</li>
                    <li> Podcasts</li>
                    <li> PLAYLISTS</li>
                </ul>
            </div>
            <div className={styles.plus}>
                <PlusCircleOutlined /> New Playlist
            </div>
        </div>
    )
}