import { memo } from 'react';   // HOC   memo - мемоизация(процесс запоминания)
import styles from './styles/title.module.css';

const Title = () => {
    // console.log('Title render');

    return(
        <h1 className={styles.title}>Список кошек</h1>
    )
}
export default memo(Title);