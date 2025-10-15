// src/services/trackingService.js
export async function fetchTracking(awbNo) {
  const response = await fetch('/api/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ AWBNO: awbNo }),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch tracking data');
  }
  return await response.json();
}
