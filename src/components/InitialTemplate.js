// components/SimpleComponent.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const SimpleComponent = ({ message }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
  }, []);
  return (
    <div className="p-4 bg-blue-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold">Simple Component</h2>
      <p>{message}</p>
      <Link href="/">
        <span className="text-blue-500">Go to Home Page</span>
      </Link>
    </div>
  );
};

export default SimpleComponent;
