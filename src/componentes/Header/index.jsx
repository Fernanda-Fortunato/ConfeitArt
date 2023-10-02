// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./styles.css"

const Header = () => {
  return (
      <>
          
          <div className='ContainerSimbolo'>
                   <img className='Logo1' src='/src/assets/pastry chef-amico.svg' />
              </div>
          <div className='box2'>
                   <h1 className='title'>Comece <a className='Agora' href='#'>agora</a> a descobrir <br />o mundo da confeitaria</h1>
             </div>
      </>
  )
}

export default Header