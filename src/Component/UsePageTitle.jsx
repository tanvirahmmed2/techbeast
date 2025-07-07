import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UsePageTitle = (title) => {
  const location = useLocation();

  useEffect(() => {
    document.title = `Tech Beast - ${title} `;
  }, [title, location]);
};

export default UsePageTitle;