'use client'
import { font_size, theme_color, theme_fonts } from './@theme/theme'
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="p-3" style={{ backgroundColor: theme_color.dark }}>
      <div className="container">
        <div className="d-flex flex-row justify-content-between align-items-center">
    
          <div className="d-none d-md-flex flex-row align-items-center gap-5">
            <Image
              src="/Logo.svg"
              alt="Descrição da imagem"
              width={145.69}
              height={32}
            />
            <div className="d-flex gap-4">
              <label style={{ ...theme_fonts.header_semibold, color: theme_color.success }}>Sobre</label>
              <label style={{ ...theme_fonts.header_semibold, color: theme_color.success }}>Serviços</label>
            </div>
          </div>

          <div className="d-flex d-md-none justify-content-between align-items-center w-100">
            <div>

              <div className="dropdown">
              <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          
                  <i className="bi bi-list" style={{ color: theme_color.success, fontSize: '32px' }}></i>
                </button>
    
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#sobre">Sobre</a></li>
                  <li><a className="dropdown-item" href="#servicos">Serviços</a></li>
                </ul>
              </div>
            </div>

      
            <div>
              <Image
                src="/Logo.svg"
                alt="Descrição da imagem"
                width={145.69}
                height={32}
              />
            </div>
          </div>

     
          <div className="d-none d-md-flex gap-3">
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
          <div className='col-12 col-md-4 mb-3 mb-md-0 '>
            <ul className='list-unstyled' style={{ color: theme_color.white, fontSize: font_size.fontsizemedium }}>
              <li className='mb-2' style={{ ...theme_fonts.header_semibold }}>Serviços</li>
              <li className='mb-1'>Conta corrente</li>
              <li className='mb-1'>Conta PJ</li>
              <li className='mb-1'>Cartão de crédito</li>
            </ul>
          </div>

          <div className='col-12 col-md-4 mb-3 mb-md-0 '>
            <ul className='list-unstyled' style={{ color: theme_color.white, fontSize: font_size.fontsizemedium }}>
              <li className='mb-2' style={{ ...theme_fonts.header_semibold }}>Contato</li>
              <li className='mb-1'>0800 004 250 08</li>
              <li className='mb-1'>teste@gmail.com</li>
              <li className='mb-1'>ouvidoria@outlook.com</li>
            </ul>
          </div>

          <div className='col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column align-items-center'>
            <span style={{ ...theme_fonts.header_semibold, color: theme_color.white, fontSize: font_size.fontsizemedium }}>Desenvolvido com Amor</span>
            <Image
              src="img_home/Logo Bytebank Branco.svg"
              alt="Descrição da imagem"
              width={145.69}
              height={32}
              className='mb-3 mt-3'
            />
            <div className='d-flex gap-3 justify-content-center'>
              <Image
                src="img_home/Instagram.svg"
                alt="Descrição da imagem"
                width={29}
                height={29}
              />
              <Image
                src="img_home/Whatsapp.svg"
                alt="Descrição da imagem"
                width={29}
                height={29}
              />
              <Image
                src="img_home/Youtube.svg"
                alt="Descrição da imagem"
                width={29}
                height={29}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const vantagens = [
  {
    icon: "img_home/Ícone Presente.svg",
    title: "Conta e cartão gratuitos",
    description: "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.",
  },
  {
    icon: "img_home/Ícone Saque.svg",
    title: "Saques sem custo",
    description: "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.",
  },
  {
    icon: "img_home/Ícone Pontos.svg",
    title: "Programa de pontos",
    description: "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!",
  },
  {
    icon: "img_home/Ícone Dispositivos.svg",
    title: "Seguro Dispositivos",
    description: "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.",
  },
];

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100" >
      <Header />

      <main className="flex-grow-1" style={{ background: theme_color.background_gradient }}>
        <div className='container mt-4'>
          <div className='d-flex flex-column'>
            <div className='d-flex flex-column flex-md-row align-items-center'>
              <div style={{ ...theme_fonts.header_semibold, color: theme_color.dark, fontSize: font_size.fontsizexlarge }}>
                Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
              </div>
              <div className='mt-3 mt-md-0'>
                <Image
                  src="img_home/Ilustração Banner.svg"
                  alt="Descrição da imagem"
                  className="img-fluid w-md-100"
                  width={661.06}
                  height={412.12}
                />
              </div>

            </div>

            <div className='gap-3 d-flex align-items-center justify-content-center d-md-none mb-4'>
              <Link href="/home">
                <button className="btn btn-dark">Abrir minha conta</button>
              </Link>
              <button className="btn btn-outline-dark">Já tenho conta</button>
            </div>


            <div className='d-flex flex-column mt-2'>
              <div className='d-flex justify-content-center mb-3'>
                <h3 style={{ ...theme_fonts.header_semibold, color: theme_color.dark, fontSize: font_size.fontsizexlarge }}>
                  Vantagens do nosso banco:
                </h3>
              </div>
              <div className="row mt-2">
                {vantagens.map((vantagem, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="d-flex flex-column align-items-center">
                      <Image
                        src={vantagem.icon}
                        alt={vantagem.title}
                        width={60}
                        height={50}
                      />
                      <h5 style={{ color: theme_color.success }}>{vantagem.title}</h5>
                      <span style={{ color: theme_color.grey }} className='text-center'>{vantagem.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
