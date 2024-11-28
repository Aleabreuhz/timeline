import React from "react";
import "./Timelines.css";
import MenuBarr from "../../components/barMenu/MenuBarr";
import SearchBar from "../../components/search/SearchBar";
import CardsDrop from "../../components/cardsDrop/CardsDrop";


function Timelines() {
  return (
    <div className="mainPage">
      <div className="contentPage"></div>
      <SearchBar />
      <div className="timelines">
        <div className="firstLine">
          <CardsDrop
            img={"./lordDeLosRines.jpg"}
            title={"The Lord of the Rings"}
            content={"hola"}
          />
        </div>
        <div className="secondLine">
          <CardsDrop 
          img={"./ww2.jpg"}
          title={"WW2"}
          content={"hola"}
          />
        </div>
        <div className="thirdLine">
          <CardsDrop 
          img={"./otomano1.jpg"}
          title={"Imperio Otomano"}
          content={"hola"}
          />
        </div>
      </div>
      <MenuBarr />
    </div>
  );
}
export default Timelines;
