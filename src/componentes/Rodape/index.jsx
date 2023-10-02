import React from 'react'
import "./styles.css"
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Rodape = () => {
    return (
        <>
            <div className='ContainerRodape'>
                <div className='ContainerArt'>
                    <p className='logoRodape'>ConfeitArt</p>
                    <div className='ContainerRedes'>
                    
                          <a className='linkLogos' href=""><FaEnvelope className='logos'/> ConfeitArt.@gmail.com</a>  
                        
                        
                            <a className='linkLogos' href="#"><FaInstagram className='logos'/> @ConfeitArt</a>
                            
                    
                            <a className='linkLogos' href="#"><FaLinkedin className='logos'/> https://ConfeitArt.com.br</a>
                        
                    </div>
                </div>

                <div className='containerSuporte'>
                    <div>
                        <p className='introSup'>Suporte</p>
                        <ul>
                            <li><a className='linkLogos' href="#">FAQ</a></li>
                            <li><a className='linkLogos' href="#">Telefones</a></li>
                            <li><a className='linkLogos' href="#">Chat</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <p className='introPag'>Formas de Pagamentos</p>
                        <ul>
                            <a className='listPag' href="#"><img src="	https://img.shields.io/badge/picpay-21C25E?style=for-the-badge&logo=picpay&logoColor=white" width="" alt="" /></a>
                            <a className='listPag' href="#"><img src="	https://img.shields.io/badge/apple%20pay-007AFF?style=for-the-badge&logo=apple%20pay&logoColor=white" width="" alt="" /></a> <br />
                            <a className='listPag' href="#"><img src="  https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white" width="" alt="" /></a>
                            <a className='listPag' href="#"><img src="  https://img.shields.io/badge/samsung%20pay-1D49C0?style=for-the-badge&logo=samsung%20pay&logoColor=white" width="" alt="" /></a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rodape