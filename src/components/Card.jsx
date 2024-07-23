import PropTypes from 'prop-types';
function Card(props) {
const cardStyle = {
    backgroundColor: "#29232e",
    borderRadius: "15px",
    position: "relative"
}

const linkStyle = {
position: "absolute",
width: "100%",
height: "100%",
top: "0",
left: "0",
zIndex: "1"
}
    return(
        <div className="card" style={cardStyle}>
        <img src={props.img} style={{borderRadius:"15px"}}/>
        <a href={props.link}><span style={linkStyle}></span></a>
        <p>{props.desc}</p>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string
}

export default Card;