import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Favoritos.css'
import { toast } from 'react-toastify'

export default function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes')
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    function handleDelete(id){
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
        toast.success('Filme excluído com sucesso!')
    }

    return(
        <div className="Favoritos">
            <h1>Meus filmes</h1>


        {filmes.length === 0 && <span>Você não possui nenhum filme salvo</span>}

        <ul>
            {filmes.map((item) => {
                return(
                    <li key={item.id}>
                        <span>{item.nome}</span> 

                        <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={() => handleDelete(item.id)}>Excluir</button>

                            {/* Se estiver passando algum parâmetro, cria uma função anônima dentro do OnClick e depois
                            chama a função. Se não tiver passando um parâmetro, só chama a função dentro do OnClick. Ex: 
                            Com Param => onClick={() => handleDelete(item.id)
                            Sem Param => onClick={handleDelete} */}

                        </div>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}