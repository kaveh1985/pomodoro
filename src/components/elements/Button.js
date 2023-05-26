import React from 'react';
import classNames from 'classnames';

const Button = ({ type, id, style, className, text, onClick, children }) => {
  const buttonClasses = classNames('custom-button', className);

  return (
    <button type={type} id={id} className={buttonClasses} style={style} onClick={onClick}>
     {children}   {text}
    </button>
  );
};

export default Button;
