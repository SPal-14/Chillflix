
import React from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
//import { Navbar, Nav, Container } from "react-bootstrap";
function Navbar() {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        Chillflix
      </Link>
      <Link to="/explore" className={styles.opt1}> TV </Link>
        <Link to="/Login" className={styles.opt2}>Movies</Link>
        <Link to="/Login" className={styles.opt3}>Sports</Link>
      
            
      
            
             
      <div className={styles.right}>
        {<div className={styles.search}>
          <input type="text" placeholder="Search movie" />
          <Search />
        </div> }

        <p className={styles.link}>
        <Link to="/Explore" >Explore</Link>
         <Link to="/Login"className={styles.prem}>  LogIn  </Link>
         
          
        </p>
      </div>
    </div>
  );
  
  
}

export default Navbar;