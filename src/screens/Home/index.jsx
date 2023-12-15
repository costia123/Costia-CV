import Header from "components/concrete/header";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
function Home(props) {
  return (
    <>
  
      <div className={styles.Home_Page}>
        <div>
          <Header />
        </div>
      </div>
	  <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </>
  );
}

export default Home;
