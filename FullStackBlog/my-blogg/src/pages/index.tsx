import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import SideMenu from '../components/sideMenu';


const Home: React.FC = () => {
  return (
    <div>
    <SideMenu />
    <Header />
  
    <Footer />
    </div>
  );
};

export default Home;
