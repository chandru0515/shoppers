function Sign(){
    return(
        <div className="sign">
            <form className="signform">
                <h3>Sign In</h3>
                <div className="user">
                    <label>Username</label><br/>
                    <input type="text" placeholder="Enter your username"></input><br/>
                </div>
                <div className="pass">
                    <label>Password</label><br/>
                    <input type="text" placeholder="Enter your password"></input>
                </div>
            </form>

        </div>
    )
}


export default Sign;