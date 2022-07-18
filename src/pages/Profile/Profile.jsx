import { useRef } from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Profile = () => {
  const renders = useRef(0);
  renders.current += 1;
  return (
    <>
      <Header />
      <AccountInfo />
      <Footer />
    </>
  );
};

export default Profile;
