import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import "./Footer.css";   

const Footer = () => (
  <footer className="footer">
    <div>
      <h4>Café Catalog</h4>
      <a href="#">Sobre nós</a>
      <a href="#">Blog</a>
      <a href="#">Carreiras</a>
    </div>

    <div>
      <h4>Social</h4>
      <a href="#">LinkedIn</a>
      <a href="#">Instagram</a>
      <a href="#">YouTube</a>
    </div>

    <div>
      <h4>Apoio</h4>
      <a href="#">Contato</a>
      <a href="#">FAQ</a>
      <a href="#">Privacidade</a>
    </div>
  </footer>
);

export default MapTo("cafecatalog/components/footer")(Footer);
