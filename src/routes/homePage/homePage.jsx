import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum facere, ratione minus quos, delectus enim perferendis consequatur voluptates accusantium vitae quo. Maxime sed veritatis perspiciatis ratione itaque distinctio animi.
          </p>

          <SearchBar />

          <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Awards Gained</h2>
            </div>
            <div className="box">
                <h1>1200+</h1>
                <h2>Propety Ready</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
