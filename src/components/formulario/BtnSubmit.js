import styles from './BtnSubmit.module.css'

function BtnSubmit({text}){
    return(
        <div className={styles.div_btn}>
            <button className={styles.btn}>{text}</button>
        </div>

    )
}

export default BtnSubmit