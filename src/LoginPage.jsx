
const LoginPage = ()=>{

    return(<div className="d1">
        
        <div className="loginpage">
            <div className="content">
            <h1>Login To Your Account</h1>
            <p>Login using social networks</p>
            </div>
           
            <div className="icons">
                <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/145/145804.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/49/49408.png" alt="" />
            </div>
            <div className="or">
                <p>________________________________</p>
                <p>OR</p>
                <p>________________________________</p>
            </div>
            <div className="loginform1">
                <input type="text" placeholder="Email" name="" id="" />
                <br /> <br />
                <input placeholder="Password" type="text" />
                <img id="dd" src="https://th.bing.com/th/id/R.a2c5e0b6e8dc501e0713537832f34b31?rik=DI59BaEnRIHFfQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_403076.png&ehk=Wos4Ag460vWsjbfsBqZkpmoZ%2fz1vF4npnblwWDW%2f5wM%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <br /><br />
                <button >Sign In</button>
            </div>
        </div>
        
    </div>
    )
}
export default LoginPage