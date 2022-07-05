import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Movies from '../../components/Movies/Movies';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoreButton from '../../components/MoreButton/MoreButton';

const MoviesPage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Movies />
      <MoreButton />
      <Footer />
    </>
  );
};

export default MoviesPage;
