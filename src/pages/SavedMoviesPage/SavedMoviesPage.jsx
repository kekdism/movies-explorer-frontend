import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Movies from "../../components/Movies/Movies";
import SearchBar from "../../components/SearchBar/SearchBar";

const SavedMoviesPage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Movies />
      <Footer />
    </>
  );
};

export default SavedMoviesPage;
