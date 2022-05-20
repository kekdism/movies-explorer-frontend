import About from '../../components/About/About';
import AccountInfo from '../../components/AccountInfo/AccountInfo';
import Auth from '../../components/Auth/Auth';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
import Movies from '../../components/Movies/Movies';
import NotFound from '../../components/NotFound/NotFound';
import RegisterForm from '../../components/Register/RegisterForm';
import SearchBar from '../../components/SearchBar/SearchBar';
import Student from '../../components/Student/Student';
import Tech from '../../components/Tech/Tech';
import Title from '../../components/Title/Title';

const HomePage = () => {
  return (
    <>
      <Header />
      <Title />
      <About />
      <Tech />
      <Student />
      <Footer />
    </>
  );
};

export default HomePage;
