import { useState } from 'react';
import { fetchTracking } from '../services/trackingServices';

export function useTracking() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getTracking(awbNo) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchTracking(awbNo);
      setData(res);
    } catch (err) {
      setError(err.message || 'Unknown error');
      setData(null);
    }
    setLoading(false);
  }

  return { data, loading, error, getTracking };
}
