import React, { useState, useEffect, useRef } from "react";
import "./CardsDrop.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
function CardsDrop({ img, content, title }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  function showCard() {
    setVisible(true);
  }
  useEffect(() => {
    function handleClickOutside(event) {
      // Verifica si el clic ocurrió fuera del elemento referenciado
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    // Limpia el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="timeLine" ref={cardRef}>
      <div className="card-name">
        {" "}
        <span>{title}</span>
      </div>
      <img
        src={img}
        alt="foto"
        className={`card-img ${visible ? "blurred" :""}`}
        onClick={showCard}
      />
      <div
        className={`card-timeLine  ${visible ? "card-timeLine-visible" : ""}`}
      >
        <p className="card-content">{content}</p>
        <Button className="showMore">{<PlusOutlined style={{ color: 'black'}}/>}</Button>
      </div>
    </div>
  );
}
export default CardsDrop;
