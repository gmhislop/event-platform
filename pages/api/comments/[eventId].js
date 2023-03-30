const handler = (req, res) => {
  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    if (!email.includes('@') || !name || !text || text.trim() === '') {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }
    console.log(email, name, text);
    const newComment = { 
        id: new Date().toISOString(),
        email,
        name,
        text,
    };
    res.status(201).json({ message: 'Added comment!', comment: newComment });
  } else if (req.method === 'GET') {
    const dummyList = [ 
        { id: 'c1', name: 'Max', text: 'A first comment!' },
        { id: 'c2', name: 'Manual', text: 'A second comment!' },

    ]
    res.status(200).json({ comments: dummyList });
  }
};
export default handler;
