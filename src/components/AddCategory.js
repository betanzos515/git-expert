import PropTypes from 'prop-types';
import {  useState } from "react";

const AddCategory = ({setHeroes})=>{
    const [inputValue, setinputValue] = useState('');
    const handleInputValue = (e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            // setHeroes(heroes=> [inputValue,...heroes]);
            setHeroes(inputValue);
            setinputValue('');
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={handleInputValue}
                placeholder='Busca una categoria'
            />
            {/* <button>Agregar</button> */}
        </form>
    );
}

AddCategory.propTypes = {
    setHeroes: PropTypes.func.isRequired
}

export default AddCategory;