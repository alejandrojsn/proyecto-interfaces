import React from 'react';
import PropTypes from 'prop-types';

export const TemplateBoilerplate = ({ children }) => {
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

TemplateBoilerplate.propTypes = {
    children: PropTypes.node,
};