import React from "react";
import Sign from "./signin";
function Header(){
    return(
        <div class="header">
            <div className="head1">
                <img src="https://pbs.twimg.com/profile_images/1344855632487223296/R-wKRef0_400x400.jpg"></img><span>SHOPPERS STOP</span>
            </div>
            <div className="head2">
                {/* <i class="fa fa-search"></i> */}
                <input type="text" placeholder="What are you looking for ?"></input>
                <button type="submit" onClick={"/"}><i class="fa fa-search"></i></button>
            </div>
            {/* <div className="head3">
                <a href='/signin' className="signin">SIGN IN</a>
                <a href="/" className="signup">SIGN UP</a>
            </div> */}
        </div>
    )
}

export default Header;
