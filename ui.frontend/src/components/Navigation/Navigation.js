import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component, useState } from "react";
import extractModelId from "../../utils/extract-model-id";
import { Link } from "react-router-dom";

require("./Navigation.css");

// This will help us to include TitleText component specific CSS

const NavigationEditConfig = {
  emptyLabel: "Navigaton (Custom)",

  /**
   * emptyLabel will be a component placeholder if nothing is
   * authored or below values are false.
   */
  isEmpty: function (props) {
    return !props;
  },
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      submenuOpen: null,
    };
  }

  showSidebar = () => {
    this.setState({ sidebarOpen: true });
  };

  hideSidebar = () => {
    this.setState({ sidebarOpen: false });
  };

  toggleSubmenu = (index) => {
    this.setState((prevState) => ({
      submenuOpen: prevState.submenuOpen === index ? null : index,
    }));
  };

  addExternalLinks = (path) => {
    const { externalLinkList } = this.props;

    return externalLinkList.map((element) => {
      if (element.mainLinkPath === path) {
        return element.linkModelList.map((item) => (
          <li key={item.linkPath}>
            <Link to={item.linkPath}>{item.linkText}</Link>
          </li>
        ));
      }
      return null;
    });
  };

  render() {
    const { sidebarOpen, submenuOpen } = this.state;
    const navigation = this.props;
    const MegaMenu = () => {
      console.log(navigation.items);

      return (
        <nav>
          <ul className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <li onClick={this.hideSidebar}>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  fill="white"
                  width="24"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </a>
            </li>
            {navigation.items.map((item, index) => (
              <li key={index} className={item.children ? "dropdown" : ""}>
                <Link to={item.link.url}>{item.title}</Link>
                {item.children && (
                  <ul
                    className={`menu-area ${
                      submenuOpen === index ? "open" : ""
                    }`}
                  >
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>

                        <Link to={child.link.url}>{child.title}</Link>

                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <ul>
            {navigation.items.map((item, index) => (
              <li key={index} className="hideOnMobile">
                <a href={item.link.url}>{item.title}</a>
                {item.children && (
                  <ul className="menu-area">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link to={child.link.url}>{child.title}</Link>

                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li class="menu-button" onClick={this.showSidebar}>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      );
    };
    return <MegaMenu />;
  }
}

export default MapTo("cafecatalog/components/navigation")(
  Navigation,
  NavigationEditConfig
);