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
    <div className="container">
  <div className="row">
    <div className={`col-md-4 offset-md-4 ${styles.mainContent}`}>
      <div className={`${styles.aboutMe}`}>
        <h2 className="text-center">About Me</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius consequat sem vitae
          ultricies. Proin in sollicitudin ligula. Quisque id blandit nisl. In eget iaculis ipsum.
          Aliquam erat volutpat. Mauris volutpat euismod ex, vel ullamcorper urna consequat ac.
        </p>
      </div>
    </div>
  </div>
</div>
    <Footer />
    </div>
  );
};

export default Home;
