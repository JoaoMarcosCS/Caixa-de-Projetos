import styles from "./Loading.module.css"
import {BsFillBoxSeamFill} from 'react-icons/bs'

function Loading(){

    return(
        <div className={styles.loader_container}>
            <span className={styles.loader}><BsFillBoxSeamFill/></span>
        </div>
    )

}

export default Loading