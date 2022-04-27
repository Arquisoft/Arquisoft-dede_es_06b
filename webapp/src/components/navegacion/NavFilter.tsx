import { PinDropSharp } from '@mui/icons-material';
import { AppBar, Button, Typography } from '@mui/material';
import React, { Component, useEffect } from 'react'
import {NavLink}  from 'react-router-dom'
import { getProductsByCategory } from '../../api/api';
import { Nav} from './NavHome.styles';


export type Props = {
    function: (s:string) => void;
    categorys: string[];
  };

const NavFilter = (props: Props) => {
    
    return(
        <Nav>
            {props.categorys.map(c=>{
                <div>Hola</div>
            })
            }
            <div className="buttons">
            <Button  onClick={()=>refreshProducts("Sudaderas",props)}>
                <Typography color="black" >
                    Sudaderas
                </Typography>
            </Button>
            <Button onClick={()=>refreshProducts("Pantalones",props)}>
                <Typography color="black" >
                    Pantalones
                </Typography>
            </Button>
            <Button onClick={()=>refreshProducts("Camisetas",props)}>
                <Typography color="black" >
                    Camisetas
                </Typography>
            </Button>
            <Button onClick={()=>refreshProducts("Playeros",props)}>
                <Typography color="black" >
                    Calzado
                </Typography>
            </Button>
            <Button onClick={()=>refreshProducts("Sudaderas",props)}>
                <Typography color="black" >
                    Accesorios
                </Typography>
            </Button>
            </div>
        </Nav>
       
    )

} ;

function refreshProducts(category:string, props:Props){
    props.function(category);
}



export default NavFilter;
