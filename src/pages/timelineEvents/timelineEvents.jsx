import React from "react";
import "./timelineEvents.css";
import MenuBarr from "../../components/barMenu/MenuBarr";
import EventsTemplate from "../../components/timelinesEvents/EventsTemplate";
import { useParams } from "react-router-dom";
function TimelineEvents() {
  const { currentTimeline } = useParams();

  return (
    <>
      <div className="eventsPage">
      <EventsTemplate currentTimeline={currentTimeline}/>
      <MenuBarr />
      </div>
    </>
  );
}
export default TimelineEvents;
