import React from 'react'

export const LinkField = ({ link }) => {
    const icon = "fab fa-" + link.icon
    const handleClick = () => {
        window.open(link.url, '_blank');
    };

    return (
        <div className="linkField__container animate__animated animate__fadeInUp"  onClick={handleClick}>
            <i className={icon} style={{color: link.iconColor}}></i>
            <h1 className="linkField__link" onClick={handleClick}><span>{link.urlName}</span></h1>
        </div>
    )
}
