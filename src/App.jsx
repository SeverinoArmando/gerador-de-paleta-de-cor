import React from 'react';
import './App.css';
import SingleColor from './singleColor/SingleColor'
import Values from 'values.js'
import { useState } from 'react';
import imagem from './img/Sever.gif'
function App() {
  //iterando sobre os valores 
  const [color, setColor ] = useState('')
  const [lista, setLista] =useState(new Values('violet').all(2))

  const handleSubmit = (e) =>{
    e.preventDefault()
    try {
      let coresParaExibir = new Values(color).all(2)
      setLista(coresParaExibir)
    } catch (error) {
      console.log('Algo deu errado: ', error);

    }
  }
  return (
    <div className='generatorColor_container'>
      <section className='geratorColor_section'>
        <i ><img className="logo_marca" src={imagem} alt="" /></i>
        <h3 className='titulo_principal'>Gerador de paleta de cor</h3>
        <form className='generator_section__form' onSubmit={handleSubmit}>
          <input className = 'section_form__input' type="text" id="formSubmit" value={color} onChange ={function(e){
            setColor(e.target.value)
          }}
          placeholder ="#f133023"/>
          
          <button className="section_form__button" type='submit'>Buscar</button>
        </form>
      </section>
      
      <section className='generatorColor_container__section'>
        {lista.map((color, index)=>{
          return <SingleColor key={index} {...color} index = {index} hexCor = {color.hex}></SingleColor>
        })}
      </section>
    </div>
  );
}

export default App;
