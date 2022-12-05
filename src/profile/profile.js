import PropTypes from "prop-types"; // ES6
function profile({fullName, bio, profession,handleAlert,children}) {
let style = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "200px",
    backgroundColor: "white",
    padding: "10px 10px",
    borderRadius: "5px",
};
return (
    
    <div style={style} onClick={()=>handleAlert(fullName)}>
    {children}
    <h2 style={{ textAlign: "center", color: "#282c34" }}>{fullName}</h2>
    <h3>{profession}</h3>
    <p>{bio}</p>
    </div>
);
}
profile.propTypes = {
fullName: PropTypes.string,
profession: PropTypes.string,
bio: PropTypes.string,
};
profile.defaultProps = {
children: <img src="public/avatar.jpeg" alt="mypic"></img>,
fullName: "raed el yaakoubi",
profession: "web devalopper",
bio: "lear fast work hard",
};
export default profile;