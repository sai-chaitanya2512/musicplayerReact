import Home from "./home";
import Aside from "./menu"
import styles from "../styles/main.module.scss"
export default function Main(){
    return(
        <div className={styles.main}>
<Aside/>
<Home/>
        </div>
    )
}