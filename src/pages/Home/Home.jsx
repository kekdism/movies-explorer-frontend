import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Student from "../../components/Student/Student";
import Tech from "../../components/Tech/Tech";
import Title from "../../components/Title/Title";

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
