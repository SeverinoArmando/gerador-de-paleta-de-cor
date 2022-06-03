import React , { useState, useEffect } from "react";
import './singleStyle/styleSingle.css'

const SingleColor = ({rgb, weight, index, hexCor}) => {
    const [alerta, setAlerta] = useState(false);
    const background = rgb.join(',');
    const valorHex = `#${hexCor}`
    //efeito de transicao no aparecimento e desaparecimento do texto
    useEffect(function(){
        const tempoDeEsperaParaSumirOcopy = setTimeout(()=>{
            setAlerta(false)
        },3000)
        return ()=>{
            clearTimeout(tempoDeEsperaParaSumirOcopy)
        }
    },[alerta])
    return (
        //condicional para mudar de classe para o text ficar nitido
             <article className = {`paleta_DeCor__Background ${index > 8 && 'paleta_DeCor__branco'}`} style = { {background: `rgb(${background})`}}
             //adicionando evento de click para autocopiar
             onClick = {()=>{
                 setAlerta(true);
                 navigator.clipboard.writeText(valorHex)
             }}
             >
            <p className="porentage_valor_bcg">Peso da cor: {weight}%</p>
            <p className="color_value_inHexadeci"> {valorHex}</p>
            { alerta && <span className="alertaDeCopia">Copiado!</span>}
            </article>
    )
}
export default SingleColor; 