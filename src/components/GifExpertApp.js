import {useState} from 'react';
import { Fragment } from "react";
import AddCategory from './AddCategory';
import './app.css';
import GifGrid from './GifGrid';

const GifExpertApp = ()=>{
    const [heroes,setHeroes] = useState('Doctor Strange');
    /* const handlerHeroes = (search)=>{
        setHeroes([...heroes,search]);
    } */
    const categoria = heroes;
    return(
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setHeroes={setHeroes}/>
            <hr/>
            <ol>
            {
               /*  heroes.map((category) => 
                    <GifGrid key={category} categoria={category} heores={heroes}/>
                ) */
               
                    <GifGrid categoria={categoria}/>
            }
            </ol>
        </Fragment>
    );
}
export default GifExpertApp;