
import styles from './styles/catDetails.module.css';

const CatDetails = (props) => {
    const {catsDetails} = props;
    const {bio, pic } = catsDetails;
    console.log(`${props.url}${pic}`);

    return(
        <div className={styles.cat__content}>
            <h1>Поздравляем!</h1>
            <h2>Вы приобрели:</h2>
            <br></br>
            <img className={styles.cat__img} src={`${props.url}${pic}`} alt='pic' />
            <p>{bio}</p>
        </div>
    )
    
}

export default CatDetails;