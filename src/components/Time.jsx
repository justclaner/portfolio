import PropTypes from 'prop-types';
function Time(props) {
    return(
        <div style={{marginBottom:"100px"}}>
        <h1>{props.date}</h1>
        <p>{props.text}</p>
        </div>

    );
}

Time.propTypes = {
    date: PropTypes.string,
    text: PropTypes.string
}


export default Time;