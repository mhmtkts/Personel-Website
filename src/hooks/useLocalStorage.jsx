import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const localVal = JSON.parse(localStorage.getItem(key));
      if (localVal === null) {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      } else {
        return localVal;
      }
    } catch (error) {
      console.error('Error reading localStorage key:', error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage key:', error);
    }
  }, [key, value]);

  return [value, setValue];
}
