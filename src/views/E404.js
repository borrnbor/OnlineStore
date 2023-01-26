import { Link } from 'react-router-dom';
import React from 'react';

export default function () {
  return (
    <div>
      <h1>Page Not Found</h1>
      <hr />
      Start with <Link to="/"> main page</Link>
    </div>
  );
}
