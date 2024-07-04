import {useState} from "react";
import Body from "./Body.jsx";
import PropTypes from 'prop-types';
function Page(props) {
const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = {
        transform: "translate(5px,5px)",
        boxShadow: "0 0"
       // visibility: "hidden"
      };
      const deselected = {
        transform: "translateY(0)",
        boxShadow: "5px 5px"
     //   visibility: "visible"
      }

    return (
        <>
        <div className="header" id="head">
            {props.menus.map((tab, index ) => <button key={tab} id={tab} onClick={()=>{
               // props.func(i);
                setSelectedIndex(index);
                }}
                style = {selectedIndex == index ? selected : deselected}
                >{tab}</button>) }
        </div>
        <br />
        <Body page={selectedIndex}></Body>
        </>

    );
}

Page.propTypes = {
    menus: PropTypes.array
}

export default Page;