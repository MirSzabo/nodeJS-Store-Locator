# nodeJS-Store-Locator
Node/Express/Mongo API with GeoJSON location field for store locations. Based on tutorial https://www.youtube.com/watch?v=9FQrFah9rnc

Start 
Add your MONGO_URI and GEOCODER_API_KEY to the "config/config.env" file.  
- Install dependencies npm install  
- Serve on localhost: 5000 npm run dev (nodemon) or npm start  
- Routes GET    /api/v1/stores 
- Get Stores  POST   /api/v1/stores 
- Add Store body { storeId: "0001", address: "10 main st Boston MA" }
