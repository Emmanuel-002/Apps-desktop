import styles from './Tour.module.css';
import { useState } from 'react';


const Tour = (props) =>{

    const [details,setDetails] = useState(false);
    const [readMode,setReadMode] = useState('Read More');

    const ShowFullText = () => {
        return (
            setDetails(!details),
            readMode==='Read More'? setReadMode('Show Less'):setReadMode('Read More')
        )
    }

    const limit = (string) => {
        return  !details ? string.substring(0, 200) : string.substring(0, string.length)
      }

    return(
        <div className={styles.cardContainer}>
                <div className={`${styles.cardItem}`}>
                    <div>
                        <img src={props.place.image} className={styles.image} alt={'Logo'} />
                    </div> 
                    <div className={styles.description}>
                        <div className={styles.title}>
                        {props.place.description}
                        </div>
                        <div className={styles.price}>
                        {props.place.price}
                        </div>
                    </div> 
                    <div className={styles.about}>
                        {limit(props.place.about)} ...<button onClick={ShowFullText}>{readMode}</button>
                    </div>
                    <div className={styles.notInterested}>
                        <button onClick={props.click}>Not Interested</button>
                    </div>   
                </div> 
        </div>
    )
}
export default Tour;

