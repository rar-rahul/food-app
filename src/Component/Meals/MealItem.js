
import classes from './MealItem.module.css';

const MealItem = props => { 
    return   <li>
  
        <div className={classes.meal}>
            <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
        </div>
        <div>

        </div>
    </li>
   
}

export default MealItem;