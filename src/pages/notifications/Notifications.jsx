import React from "react";
import Avatar from "antd/es/avatar/avatar.js";
import SearchBar from "../../components/search/SearchBar.js";
import "./Notifications.css";
import ButtonSelect from "../../components/buttonSelect/ButtonSelect.js";
import NotificationsCard from "../../pages/notifications/NotificationsCard.js"
import MenuBarr from "../../components/barMenu/MenuBarr.js";
function Notifications() {
  return (
      <div className="mainPage">
        <div className="content_page">
          <Avatar/>
          <SearchBar/>
          <ButtonSelect/>
          <NotificationsCard/>
          <MenuBarr/>
        </div>
      </div>
  );
}

export default Notifications;
