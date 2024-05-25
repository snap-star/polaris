const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

const uri = "mongodb+srv://rendiyuspramana:8Zz69LisYNXmd8DI@cluster0.ognnanv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const cors = require('cors');
app.use(cors());

const corsOptions = {
    origin: 'http://localhost:8080',
  };
  
  app.use(cors(corsOptions));

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);

// ... sisa kode server Anda

app.listen(3000, () => console.log('Server berjalan di http://localhost:3000'));