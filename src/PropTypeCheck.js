import React from "react";
import PropTypes from "prop-types";

// class PropTypeCheck extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div>

//             </div>
//         )
//     }
// }

// PropTypeCheck.propTypes = {
//     testing: PropTypes.object,
//   };


// export default PropTypeCheck;



class PropTypeCheck extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Array: {this.props.propArray} </h3>
                <h3>Bool: {this.props.propBool ? "True..." : "False..."} </h3>
                <h3>Func: {this.props.propFunc(3)} </h3>
                <h3>Number: {this.props.propNumber} </h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.objectName1}</h3>
                <h3>Object: {this.props.propObject.objectName2}</h3>
                <h3>Object: {this.props.propObject.objectName3}</h3>
            </div>
        );
    }
}
PropTypeCheck.propTypes = {
    propArray: PropTypes.array,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object
}

PropTypeCheck.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (e) { return e },
    propNumber: 1,
    propString: "string value....",
    propObject: {
        objectName1: "value1",
        objectName2: "value2",
        objectName3: "value3"
    }
}

export default PropTypeCheck;