import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api'
import './Filme.css';
import { toast } from 'react-toastify'

export default function Filme(){
    const { id } = useParams();
    const history = useNavigate()

    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilme(){
            const response = await api.get(`/r-api/?api=filmes/${id}`)

            if(response.data.length === 0){
                //Tentou acessar com um id que não existe, navego para a Home.
                history.replace('/')
                return;
            }

            setFilme(response.data)
            setLoading(false)
        }

        loadFilme();


    }, [id, history])

    function salvarFilme(){
        const minhaLista = localStorage.getItem('filmes')
        let filmesSalvos = JSON.parse(minhaLista) || [];

        //Se tiver algum filme salvo com esse mesmo id, ignorar
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.error("Você já possui esse filme salvo.")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!')
    }

    if(loading){
        return(
            <div className='Filme'>
                <h1>Carregando o seu filme...</h1>
            </div>
        )
    }
    return(
        <div className='Filme'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>
            <h3>Sinopse</h3>
            <p>{filme.sinopse}</p>

            <div className='Botoes'>
                <button onClick={salvarFilme}>Salvar</button>
                <button> <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a></button>
            </div>
            
        </div>
    )
}