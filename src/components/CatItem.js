import { waitForElementToBeRemoved } from '@testing-library/react';
import styles from './styles/catItem.module.css';

const CatItem = (props) => {
    const {name, shortInfo, id, toBuy, removeCat} = props;

    return (
        <>
            <div className={styles.cat} id="cat">
                <div className={styles.cat_container}>
                    <div>
                        <h4 className={styles.cat_name}>{name}</h4>
                        <p className={styles.cat_info}>{shortInfo}</p>
                    </div>
                    <div className={styles.buttons}>
                        <button
                            className={styles.removeCat}
                            onClick={(event) => removeCat(id,event)}
                        >Пометить на удаление</button>

                        <button
                            className={styles.buyCat}
                            onClick={() => toBuy(id)} 
                            >Купить
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default CatItem;