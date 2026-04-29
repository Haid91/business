import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock product database
const products = [
  {
    id: 1,
    name: "Ayla Wide-Leg Trouser",
    category: "Trousers",
    price: 69,
    tag: "Best Seller",
    description: "Relaxed tailored pants for everyday modest styling.",
  },
  {
    id: 2,
    name: "Grace Longline Blazer",
    category: "Outerwear",
    price: 119,
    tag: "Workwear",
    description: "Structured coverage with a soft, modern silhouette.",
  },
  {
    id: 3,
    name: "Noor Maxi Shirt Dress",
    category: "Dresses",
    price: 89,
    tag: "New Arrival",
    description: "A button-down maxi dress designed for effortless layering.",
  },
];

// Routes
app.get('/products', (req, res) => {
  const { category, search } = req.query;
  
  let filtered = products;
  
  if (category && category !== 'All') {
    filtered = filtered.filter(p => p.category === category);
  }
  
  if (search) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  res.json(filtered);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

app.post('/cart', (req, res) => {
  const { items } = req.body;
  const total = items.reduce((sum, item) => sum + item.price, 0);
  res.json({ items, total });
});

app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  res.json({ success: true, message: `Subscribed: ${email}` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
