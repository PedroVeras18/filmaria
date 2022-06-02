import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import api from '../../services/api'

export default function Home(){

    const [filmes, setFilmes] = useState([])

    /* useEffect(() => {}, []) --> síntaxe */

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get('r-api/?api=filmes')
            setFilmes(response.data)
        }

        loadFilmes();
    }, [])

    return(
        <div className='Home'>
            <div className='Lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}