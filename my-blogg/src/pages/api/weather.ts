// pages/api/weather.ts
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch('https://localhost:7202/WeatherForecast');
    const data = await response.json();
    
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
