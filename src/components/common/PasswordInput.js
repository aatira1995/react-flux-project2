import React , {PropTypes} from 'react';

const PasswordInput = ({name, label, onChange, placeholder, value, error}) => {
    let wrapperClass = "form-group";
    if(error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                type="password"
                name={name}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}/>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

PasswordInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default PasswordInput;

// var React = require('react');

// var PasswordInput = function({name, label, onChange, placeholder, value, error}) {
//     let wrapperClass = "form-group";
//     if(error && error.length > 0) {
//         wrapperClass += " " + 'has-error';
//     }
//     return (
//         <div className={wrapperClass}>
//             <label style={{color: '#6E7AD3'}} htmlFor={name}>{label}</label>
//             <div className="field">
//                 <input
//                 type="password"
//                 name={name}
//                 className="form-control"
//                 placeholder={placeholder}
//                 value={value}
//                 onChange={onChange}/>
//                 {error && <div className="alert alert-danger">{error}</div>}
//             </div>
//         </div>
//     );
    
// }

// module.exports = PasswordInput;


