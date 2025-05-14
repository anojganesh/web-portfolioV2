'use client';
import { useEffect } from 'react';

export default function Visitors() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const response = await fetch('https://backend-logger-db-fccf56d1ee9f.herokuapp.com/api/visitors', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        
        if (!response.ok) {
          throw new Error('Tracking failed');
        }
      } catch (error) {
        console.error('Visitor tracking error:', error);
      }
    };

    trackVisitor();
  }, []);

  return null; // This component doesn't render anything
}