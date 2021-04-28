import { Fragment } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

// const { Fragment,useState, useEffect } = require("react")

const GifGrid = ({categoria})=>{

    //creamos el estado.
   /*  const [Images, setImages] = useState([]);

    useEffect(()=>{
        getGif(categoria)
            .then(imgs=> setImages(imgs));
    },[categoria]);//le indicamos al navegador que este objeto no sera actualizado/ */

    const {data,loading} = useFetchGifs(categoria);
 
    return(
        <Fragment>
            <h3>{categoria}</h3>
            <div className='container-grid'>
                {loading && <p>Loading</p>}
                {
                    
                    data.map( img =>
                    (
                        <GifGridItem 
                            key={img.id}
                            {...img}//con esto estoy enviando cada una de las propiedades
                        />
                    )
                    )
                }
            </div>
        </Fragment>
    );
}
export default GifGrid;