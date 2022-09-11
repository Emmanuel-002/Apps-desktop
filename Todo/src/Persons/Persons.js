import styles from './Persons.module.css';
import React, {useState} from 'react';

const Persons = () => {
    const [clearAll, setClearAll] = useState(true);
    

    function clear(){
        return setClearAll(!clearAll);
    }
    const persons = [
        {id: 1, firstName: 'Tobi', lastName: 'Amusan', age: 29, image: 'images/birthdays/tobi_amusan.jpg'},
        {id: 2, firstName: 'Islamiyat', lastName: 'Yusuf', age: 32, image: 'images/birthdays/islamiyat_yusuf.jpg'},
        {id: 3, firstName: 'Eddidiong', lastName: 'Umaofia', age: 36, image: 'images/birthdays/edidiong_umaofia.jpg'},
        {id: 4, firstName: 'Taiwo', lastName: 'Laidi', age: 34, image: 'images/birthdays/taiwo_laidi.jpg'},
        {id: 5, firstName: 'Rafiatu', lastName: 'Folashade', age: 29, image: 'images/birthdays/rafiatu_folashade.jpg'},
    ];
    return(
        
            clearAll ?    <div className={styles.todoapp_container}>
            <div>
                <h1>5 Birthdays today </h1>
            </div>
        {persons.map(person => {
            return <div className={styles.individualBox}>
                        <div className={styles.image}>
                       <img src={person.image} alt={`${person.firstName}'s Picture`}/>
                       </div>
                       <div className={styles.description}>
                        <h3>{`${person.firstName} ${person.lastName}`}</h3>
                        <p>{`${person.age} years`}</p>
                        </div> 
                    </div>
        })}
        <div>
            <button type="submit" onClick={clear}>Clear All</button>
        </div>
        </div> : 
        <div className={styles.todoapp_container}>
            <h1 className={styles.clear}>0 birthdays today</h1>
            <button onClick={clear}>Back to Homepage</button>
        </div>
        
    ) 
        
    
}
export default Persons;