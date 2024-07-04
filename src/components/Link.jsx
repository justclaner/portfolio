import PropTypes from 'prop-types';
function Link(props) {
    const linkText = {
        display: "inline-block",
        marginLeft:"5px",
        marginRight:"5px",
        marginTop: "2px",
        marginBottom: "2px"
     }

     const innerLinkText = {
        display: "inline-block",
        marginLeft:"1px",
        marginRight:"1px",
        marginTop: "2px",
        marginBottom: "2px"
     }
    return(
        <div style={linkText}>
            <p style={innerLinkText}>{props.label}</p>
            <a href={props.link} style={innerLinkText}>{props.text}</a>
        </div>
    );
}

Link.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string
}
export default Link;