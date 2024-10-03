
'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-3">
      <div className="container">
        <div className='d-flex flex-row justify-content-between align-items-center'>
          <div className='d-flex flex-row align-items-center gap-5'>
            <Image
              src="/Logo.svg" // Caminho da imagem
              alt="Descrição da imagem"
              width={145.69}  // Largura desejada
              height={32} // Altura desejada
            />
            <div className='d-flex gap-4'>
              <label className='text-success fw-bold'>Sobre</label>
              <label className='text-success fw-bold'>Serviços</label>
            </div>
          </div>

          <div className='d-flex gap-3'>
            <Link href="/home">
              <button className="btn btn-success">Abrir minha conta</button>
            </Link>
            <button className="btn btn-outline-success">Já tenho conta</button>
          </div>
        </div>

      </div>
    </header>
  );
};


const Footer: React.FC = () => {
  return (

    <footer className='bg-black bg-gradient py-4 pb-5'>
      <div className='container'>
        <div className='d-flex flex-column flex-md-row justify-content-between pt-4'>
          <div className='col-12 col-md-6 col-lg-3 mb-3 mb-md-0'>
            <ul className='text-white  list-unstyled'>
              <li className='fw-bold mb-2'>Serviços</li>
              <li className='mb-1'>Conta corrente</li>
              <li className='mb-1'>Conta PJ</li>
              <li className='mb-1'>Cartão de crédito</li>
            </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-3 mb-3 mb-md-0'>
            <ul className='text-white  list-unstyled'>
              <li className='fw-bold mb-2'>Contato</li>
              <li className='mb-1'>0800 004 250 08</li>
              <li className='mb-1'>teste@gmail.com</li>
              <li className='mb-1'>ouvidoria@outlook.com</li>
            </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-3 mb-3 mb-md-0 d-flex flex-column align-items-center'>
            <span className='text-white fw-bold mb-2'>Desenvolvido com Amor</span>
            <Image
              src="logo.svg"
              alt="Descrição da imagem"
              width={120}
              height={60}
            />
            <div className='d-flex gap-3'>
              <Image
                src="img_home/Instagram.svg"
                alt="Descrição da imagem"
                width={20}
                height={20}
              />

              <Image
                src="img_home/Whatsapp.svg"
                alt="Descrição da imagem"
                width={20}
                height={20}
              />

              <Image
                src="img_home/Youtube.svg"
                alt="Descrição da imagem"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}


export default function Home() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <h1>Tech Challenge was born!!</h1>
      </main>
      <Footer />
    </div>
  );
}

