const fs = require('fs');
const path = require('path');

const backendPath = path.join(__dirname, 'backend');

// Folders to create inside backend
const folders = [
  'controllers',
  'models',
  'routes',
  'utils',
  'config',
];

// Files to create with starter content
const files = {
  'server.js': `const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const hotelRoutes = require('./routes/hotelRoutes');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/hotels', hotelRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
`,

  'routes/hotelRoutes.js': `const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

router.get('/', hotelController.getAllHotels);

module.exports = router;
`,

  'controllers/hotelController.js': `const Hotel = require('../models/Hotel');

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
`,

  'models/Hotel.js': `const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  area: String,
  priceRange: String,
  location: {
    lat: Number,
    lng: Number,
  },
});

module.exports = mongoose.model('Hotel', hotelSchema);
`,
  
  'config/db.js': `const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
`,
};

function createFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log('Created folder:', folderPath);
  }
}

function createFile(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log('Created file:', filePath);
  }
}

function createBackendStructure() {
  createFolder(backendPath);
  
  folders.forEach(folder => {
    createFolder(path.join(backendPath, folder));
  });
  
  // Create files
  Object.entries(files).forEach(([file, content]) => {
    createFile(path.join(backendPath, file), content);
  });

  console.log('Backend folder structure created!');
}

createBackendStructure();
