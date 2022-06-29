// import React from 'react'

// import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa"
// import { Link } from 'react-router-dom'

// const Footer = () => {
//     return (
//         <>
//             <div className='footer'>
//                 <div className='bl001'>
//                     <h1 className='logo-footer'>LOGO</h1>
//                     <p>Texto alternativo</p>
//                     <a href=""><i><FaFacebook /></i></a>
//                     <a href=""><i><FaWhatsapp /></i></a>
//                     <a href=""><i><FaInstagram /></i></a>
//                 </div>
//                 <div className='bl002'>
//                     <h3>Empresa</h3>
//                     <Link to="/contato">Contato</Link>
//                     <Link to="/servicos">Serviços</Link>
//                     <Link to="/empresa">Sobre</Link>
//                 </div>
//                 <div className='bl003'>
//                     <h3>Cadastre-se</h3>
//                     <p>Receba novidades e promoções exclusivas por e-mail.</p>
//                     <form>
//                         <input type="email" placeholder='Digite seu e-mail' className='input-email' />
//                         <button type="submit" className='btn-send'></button>
//                     </form>
//                     <span>Não compartilhamoes seu e-mail com mais ninguém.</span>
//                 </div>
//             </div>
//             <div className=''>
//                 <span>&copy;Canii - Todos os direitos reservados</span>
//                 <span>Design by: <a href="">JMAzer</a></span>
//             </div>
//         </>
//     )
// }

// export default Footer





// import React from 'react';
// import './Footer.css';
// import { Link } from 'react-router-dom';
// import {
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaTwitter,
//   FaLinkedin
// } from 'react-icons/fa';

// function Footer() {
//   return (
//     <div className='footer-container'>
//       <section className='footer-subscription'>
//         <p className='footer-subscription-heading'>
//           Join our exclusive membership to receive the latest news and trends
//         </p>
//         <p className='footer-subscription-text'>
//           You can unsubscribe at any time.
//         </p>
//         <div className='input-areas'>
//           <form>
//             <input
//               className='footer-input'
//               name='email'
//               type='email'
//               placeholder='Your Email'
//             />
//             <button buttonStyle='btn--outline'>Subscribe</button>
//           </form>
//         </div>
//       </section>
//       <div className='footer-links'>
//         <div className='footer-link-wrapper'>
//           <div className='footer-link-items'>
//             <h2>About Us</h2>
//             <Link to='/sign-up'>How it works</Link>
//             <Link to='/'>Testimonials</Link>
//             <Link to='/'>Careers</Link>
//             <Link to='/'>Investors</Link>
//             <Link to='/'>Terms of Service</Link>
//           </div>
//           <div className='footer-link-items'>
//             <h2>Contact Us</h2>
//             <Link to='/'>Contact</Link>
//             <Link to='/'>Support</Link>
//             <Link to='/'>Destinations</Link>
//             <Link to='/'>Sponsorships</Link>
//           </div>
//         </div>
//         <div className='footer-link-wrapper'>
//           <div className='footer-link-items'>
//             <h2>Videos</h2>
//             <Link to='/'>Submit Video</Link>
//             <Link to='/'>Ambassadors</Link>
//             <Link to='/'>Agency</Link>
//             <Link to='/'>Influencer</Link>
//           </div>
//           <div className='footer-link-items'>
//             <h2>Social Media</h2>
//             <Link to='/'>Instagram</Link>
//             <Link to='/'>Facebook</Link>
//             <Link to='/'>Youtube</Link>
//             <Link to='/'>Twitter</Link>
//           </div>
//         </div>
//       </div>
//       <section className='social-media'>
//         <div className='social-media-wrap'>
//           <div className='footer-logo'>
//             <Link to='/' className='social-logo'>
//               logo
//             </Link>
//           </div>
//           <small className='website-rights'>LAVISH © 2020</small>
//           <div className='social-icons'>
//             <Link
//               className='social-icon-link'
//               to='/'
//               target='_blank'
//               aria-label='Facebook'
//             >
//               <FaFacebook />
//             </Link>
//             <Link
//               className='social-icon-link'
//               to='/'
//               target='_blank'
//               aria-label='Instagram'
//             >
//               <FaInstagram />
//             </Link>
//             <Link
//               className='social-icon-link'
//               to={
//                 '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
//               }
//               target='_blank'
//               aria-label='Youtube'
//             >
//               <FaYoutube />
//             </Link>
//             <Link
//               className='social-icon-link'
//               to='/'
//               target='_blank'
//               aria-label='Twitter'
//             >
//               <FaTwitter />
//             </Link>
//             <Link
//               className='social-icon-link'
//               to='/'
//               target='_blank'
//               aria-label='LinkedIn'
//             >
//               <FaLinkedin />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Footer;