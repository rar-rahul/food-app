import React from "react";
import mealimg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => { 

    return( 
        <> 
        <header className={classes.header}>
           
                <h1>FoodMeal</h1>
               <HeaderCartButton/>
           
        </header>
         <div className={classes['main-image']}>
             <img src={mealimg} alt="img"/>
         </div>
        </>
    );

};

export default Header;