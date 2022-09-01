import React from "react"
import styles from ".././styles/PageBody.module.scss"

const PageBody = (props) => {
    return (
        <div className={styles.page}>
            <div className={styles.pageItem}>
               {props.children} 
            </div>
        </div>
    )
}

export default PageBody