import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { items, checked, totalQuantity, totalPrice } = req.body;
    console.log('Received order:', {
      items,
      checked,
      totalQuantity,
      totalPrice,
    });

    return res.status(200).json({ message: 'Order submitted successfully!' });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}