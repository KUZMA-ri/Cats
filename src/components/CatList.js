import styles from './styles/catList.module.css';
import CatItem from './CatItem';
import { memo } from 'react';

const Catlist = (props) => {
    // console.log('render');
    const {cats, toBuy, removeCat} = props;           

    const allCats = cats.map(cat => {
        return <CatItem key={cat.id}{...cat} toBuy = {toBuy} removeCat={removeCat}/>       // key прописывать обязательно. {...cat} - данные элемента массива
    }
        )
    return(
        <div className={styles.listBlock}>
            {/* <h1>Список кошек</h1> */}
            <div className={styles.allCats}>
                {allCats}
            </div>
        </div>
    )

}

export default memo(Catlist);