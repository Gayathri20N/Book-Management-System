import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <button onClick={onClick || (() => navigate(-1))} className='bg-blue-500 text-white p-2 rounded'>
      Back
    </button>
  );
};

export default BackButton;
