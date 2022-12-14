import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      {/* <h1>Waves</h1> */}
      <button
        className={!libraryStatus ? "library-active" : ""}
        onClick={openLibraryHandler}
      >
        {!libraryStatus ? "Alle podcasts ":"Luk listen "}
        <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;
