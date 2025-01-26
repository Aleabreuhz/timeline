import React from "react";
import SearchBar from "../../components/search/SearchBar.js";
import "./Notifications.css";
import ButtonSelect from "../../components/buttonSelect/ButtonSelect.js";
import NotificationsCard from "./NotificationsCard.js"
import MenuBarr from "../../components/barMenu/BarMenu.js";
function Notifications() {
  return (
      <div className="mainPage">
        <div className="content_page">
          <SearchBar/>
          <ButtonSelect/>
          <NotificationsCard/>
          <MenuBarr/>
        </div>
      </div>
  );
}

export default Notifications;
