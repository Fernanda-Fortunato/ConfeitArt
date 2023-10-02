import React from 'react'
import "./styles.css"

const Planos = () => {
  return (
    <>
        <div>
            <div className='titlePlanos'>
                <h1>Planos para todos</h1>
            </div>

            <div className='containerPlanos'>
              <a className='planos' href="#">
                <div className='planoFree'>
                        <h2>Free</h2>
                        <p className='basicoFree'>Básico de confeitaria</p>

                        <h1>FREE</h1>
                        <hr />
                        <ul>
                            <p className='intro'>Introdução a confeitaria:</p>
                            <li>Historia e evolução da confeitaria</li>
                            <li>Equipamenos básico da confeitaria</li>
                            <li>Tecnicas de medição e pesagem</li>
                        </ul>
                </div>
                </a>  
               <a className='planos' href="#">
                <div className='planoPlus'>
                        <h2>ConfeitArt+</h2>
                        <p className='aoVivo'>Aulas ao vivo e muito mais</p>

                        <h1>$55,00</h1>
                        <hr />
                        <ul>
                            <p className='Tema'>Temas:</p>
                            <li>Historia e evolução da confeitaria</li>
                            <li>Equipamenos básico da confeitaria</li>
                            <li>Tecnicas de medição e pesagem</li>
                            <li>Preparação de massas e bolos</li>
                            <li>Recheio e coberturas</li>
                            
                        </ul>
                </div>
                </a> 
            </div>
        </div>
    </>
  )
}

export default Planos