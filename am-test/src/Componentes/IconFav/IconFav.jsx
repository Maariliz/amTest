import React from 'react';
import PropTypes from 'prop-types';
import iconfav from '../../assets/bookmark.svg'

const IconFav = ({name}) =>{ 
    <svg classname={`icon icon-${name}`}>
        <use xlinkHref= {`${iconfav}#${name}`} />
    </svg>
};

IconFav.propTypes = {
    name: PropTypes.string.isRequired,
}

export default IconFav