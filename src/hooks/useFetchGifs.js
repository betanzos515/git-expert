import {useState, useEffect} from 'react';
import getGifs from '../helpers/getGifs';

export const useFetchGifs = (categoria)=>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getGifs(categoria)
            .then(imgs=>{
                console.log(imgs)
                setTimeout(()=>{
                    setstate({
                        data:imgs,
                        loading:false
                    })
                },1500);
            })
    },[categoria]);
    return state;
}