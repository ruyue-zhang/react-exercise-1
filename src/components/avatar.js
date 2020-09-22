import React from 'react';
import '../styles/avatar.css';

const Avatar = () => {
  return (
    <img src={require('../assets/avatar.jpg')} alt="avatar" className="avatar"/>
  );
}

export default Avatar;

