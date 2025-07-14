import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import './Hero.css';

const Hero = ({ title, subtitle, fileReference }) => {
  const backgroundStyle = {
    backgroundImage: fileReference ? `url(${fileReference})` : 'none'
  };

  return (
    <div className="hero-container" style={backgroundStyle}>
      <div className="hero-content">
        {title && <h1 className="hero-title">{title}</h1>}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

const EditConfig = {
  emptyLabel: 'Hero',
  isEmpty: function(props) {
    return !props || (!props.title && !props.fileReference);
  }
};

export default MapTo('cafecatalog/components/hero')(Hero, EditConfig);
