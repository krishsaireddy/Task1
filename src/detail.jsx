import CloseIcon from '@mui/icons-material/Close';
const Details = () => {
    return ( 
        <div className="details">
            <div className="navbar">
            <CloseIcon id="symbol"/>
            </div>
            <div className="details1">
                <h1>New Here?</h1>
                <p>Sign up and discover a great <br /> amount of new opportunities</p>
                <button>Sign Up</button>
            </div>
        </div>
     );
}
 
export default Details;