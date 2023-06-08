import "../css/style.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import imgAbout from "../assets/banner-about.png";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about">
      <Banner img={imgAbout} />
    </div>
  );
}

export default About;
