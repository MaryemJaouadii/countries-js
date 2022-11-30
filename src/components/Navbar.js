import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<nav>
    <div class="nav-wrapper" style={{backgroundColor:"white" , } }>
      <a href="https://www.reportix.com/index.php" class="brand-logo"><img src={'../reprotix.png'}  height={50}/></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li ><a href="https://www.reportix.com/index.php" style={{color:"#003E7E"}} >Home</a></li>
        <li><a href="https://www.reportix.com/products_cellstore.php" style={{color:"#003E7E"}} >Products</a></li>
        <li><a href="https://www.reportix.com/about_team.php" style={{color:"#003E7E"}} >About</a></li>
        <li><a href="https://www.reportix.com/contact_us.php" style={{color:"#003E7E"}} >About</a></li>
		
      </ul>
    </div>
  </nav>
	</>
);
};

export default Navbar;
