import React from "react";
import event from "../../models/eventList" 
function EventsTemplate(currentTimeline){
  console.log("Current Timeline:", currentTimeline);
console.log("Events:", event);


return (
    <>
    
      <div className="events-details-content">
            {
            event.map((e) => (
              <>
                {e.timeline == currentTimeline ?
                  <div>
                    hola
                    <div className="back-to-timelines">
                      <a href="/timeline"><h2>Back</h2></a>
                    </div>
                    <h1>{e.title}</h1>
                    <p>{e.content}</p>
                    <br />
                    <div className="events-details-preview">
                      <img src={e.preview} alt="" />
                    </div>
                  </div>
                  : ""}
              </>
            ))
          }
        </div>
    </>
)
}
export default EventsTemplate;