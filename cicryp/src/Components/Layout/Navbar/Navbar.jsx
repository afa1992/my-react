import React from 'react';
import '../../../scss/mixin.scss';
import '../../../scss/variables.scss';
import  styles from '../../Layout/Navbar/Navbar.module.scss';
import { BsSearch } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsFillSunFill} from "react-icons/bs";
import { BsMoon} from "react-icons/bs";

const Navbar = () => {
  return (
<nav className={styles.navbar}>
<div className="container">
  <div className="row mt-4">
    <div className="col-4">
      <div className={styles.logo}>
        <img src='https://chisnghiax.com/ciscryp/static/media/logo.25debea968a8cdc57717f9110ced774d.svg'></img>
<form >
<input type="text" placeholder='Search items'/>
        <button className={styles.btn}> <BsSearch/></button>
</form>
      </div>
    </div>
    <div className="col-8">
      <ul className={styles.menu}>
        <li> <a href="">Discover <BsChevronDown/> </a></li>
        <li> <a href="">Help Center </a></li>
        <li> <a href=""> <BsFillSunFill/> <BsMoon/> </a></li>
        <li> <button className={styles.create}>Create </button></li>
        <li> <button className={styles.connect}>Connect Wallet </button></li>
      </ul>
    </div>
  </div>
</div>
</nav>
  )
}

export default Navbar