import styles from './styles/notification.module.css';

const Notification = (props) => {
const {name, kind, email} = props;

    return(
        <>
            <p className={styles.notification__text}>Уважаемый, {name}</p>
            <p className={styles.notification__text}>как только кошки породы {kind} появятся</p>
            <p className={styles.notification__text}>мы сразу вам сообщим по адресу {email}</p>
        </>
    )
}

export default Notification;