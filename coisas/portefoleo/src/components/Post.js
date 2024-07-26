import styles from'./Post.module.css';

function Post(props) {

    return (
        <div className={styles.postBox}>
            <img src={props.image} className={styles.postimg} width={640} height={370}/>
            <div className={styles.textoPost}>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Post;