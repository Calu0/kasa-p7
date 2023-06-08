import "../../css/style.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import imgAbout from "../assets/banner-about.png";

function About() {
  return (
    <div className="about">
      <Header />
      <Banner img={imgAbout} />
    </div>
  );
}

export default About;
