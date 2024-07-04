import PropTypes from 'prop-types';
function Card(props) {

    return(
        <div className="card">
        <img src={props.img} />
        <a href={props.link}>{props.name}</a>
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