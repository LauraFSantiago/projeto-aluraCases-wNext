import HomeScreen from "../src/screens/HomeScreen";

export default HomeScreen;

// import Link from 'next/link'
// import Footer from '../src/components/patterns/Footer';

// function Title({ children, as }) { //ele recebe o children para qualquer conteudo q ele receber ele passar pra frente
//   const Tag = as;
//   return (
//     <>
//       <Tag>{children}</Tag>
//       <style jsx>{`
//         ${Tag} {
//           color: red;
//         }
//       `}
//       </style>
//     </>
//   )
// }

// export default function HomePage() {
//   return (
//     <div>
//       {/* o "as" passado ali é para sinalizar q vc quer q o titulo seja passado como h1 */}
//       <Title as="h1">Alura - cases </Title>
//       {/* <a href="/faq">faq page</a> */}
//       <Link href="/faq" passHref>
//         faq page
//       </Link>
//       <Footer />
//     </div>
//   )
// }