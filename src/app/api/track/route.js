// src/api/track/route.js
export async function POST(req) {
  try {
    const { AWBNO } = await req.json();

    const response = await fetch('https://api.zedexsoftware.in/api/ValuexExpress/TrackShipment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ AWBNO }), 
    });
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
