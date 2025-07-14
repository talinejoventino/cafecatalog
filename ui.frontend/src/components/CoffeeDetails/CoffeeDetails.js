import React, { useEffect, useState } from "react";
import "./CoffeeDetails.css";
import { MapTo } from "@adobe/aem-spa-component-mapping";

function CoffeeDetails() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("coffeeDetail");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return <p style={{padding:"2rem"}}>Nenhum café selecionado.</p>;
  }

  const {
    title, refCode, fileReference, about, notes,
    country, lotNumber, process, varietal, score, units
  } = data;

  return (
    <main className="coffee-details">
      {fileReference && (
        <div
          className="hero"
          style={{ backgroundImage: `url(${fileReference})` }}
        />
      )}

      <section className="info">
        <h1>{title} — {refCode}</h1>

        <table>
          <tbody>
            <tr><th>País</th><td>{country}</td></tr>
            <tr><th>Lote</th><td>{lotNumber}</td></tr>
            <tr><th>Processo</th><td>{process}</td></tr>
            <tr><th>Varietal</th><td>{varietal}</td></tr>
            <tr><th>Score</th><td>{score}</td></tr>
            <tr><th>Unidades</th><td>{units}</td></tr>
          </tbody>
        </table>

        <h3>Sobre</h3>
        <p>{about}</p>

        <h3>Cupping Notes</h3>
        <p>{notes}</p>
      </section>
    </main>
  );
}

export default MapTo("cafecatalog/components/coffeedetails")(CoffeeDetails);
