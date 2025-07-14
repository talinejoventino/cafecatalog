import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import "./CoffeeCard.css";
import { Link, useLocation } from "react-router-dom";

const TARGET_URL = "/content/cafecatalog/us/en/home/detalhes.html";

const CoffeeCard = (props) => {
  const {
    country,
    refCode,
    lotNumber,
    title,
    process,
    varietal,
    score,
    units,
    notes,
  } = props;
  const { pathname } = useLocation();

  const missingMainField = !title || title.trim().length === 0;

    const goToDetails = () => {
    sessionStorage.setItem("coffeeDetail", JSON.stringify(props));
    window.location.href = TARGET_URL;
  };

  if (missingMainField) {
    return (
      <article className="coffee-card coffee-card-placeholder">
        <p>⚠ Preencha o card para exibir conteúdo.</p>
      </article>
    );
  }

  return (
    <article className="coffee-card">
      <header className="meta">
        <span className="country">{country}</span>
        <span className="ref">{refCode}</span>
      </header>

      <div className="lot-wrapper">
        <span className="lot">{lotNumber}</span>
        <h3 className="title">{title}</h3>
      </div>

      <dl className="facts">
        <div>
          <dt>PROCESS</dt>
          <dd>{process}</dd>
        </div>
        <div>
          <dt>VARIETAL</dt>
          <dd>{varietal}</dd>
        </div>
        <div>
          <dt>CUPPING SCORE</dt>
          <dd>{score}</dd>
        </div>
        <div>
          <dt>UNITS&nbsp;AVAILABLE</dt>
          <dd>{units}</dd>
        </div>
      </dl>

      <div className="notes-block">
        <dt>CUPPING NOTES</dt>
        <dd>{notes}</dd>
      </div>

       <button className="details" onClick={goToDetails}>DETAILS</button>
    </article>
  );
};

export default MapTo("cafecatalog/components/coffeecard")(CoffeeCard);
