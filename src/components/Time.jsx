import PropTypes from 'prop-types';
function Time(props) {
    return(
        <div style={{marginBottom:"50px"}}>
        <h3>{props.date}</h3>
        <p style={{fontSize:"20px"}}>{props.text}</p>
        </div>

    );
}

Time.propTypes = {
    date: PropTypes.string,
    text: PropTypes.string
}


export default Time;