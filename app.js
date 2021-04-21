const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { google } = require("googleapis");
var mime = require("mime-types");
const multer = require("multer");
const bodyParser = require("body-parser");
const CLIENT_ID =
  "90305085011-v6priekdbe3ph861rla91rs1fqdcg9br.apps.googleusercontent.com";
const CLIENT_SECRET = "AkvaWJNt-oRS9N8ome3zGPTI";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04wwVnF3GO6LtCgYIARAAGAQSNwF-L9IrWgY8r45YwpUKy-hrGhDa6MWHtaRjeOIGSl8b8mqS-JQRnvXsmJ9UfiUFHFdFsuyHjlo";
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});
const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

async function uploadFile(name, filepath) {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: name,
        mimeType: mime.lookup(name),
      },
      media: {
        mimeType: mime.lookup(name),
        body: fs.createReadStream(filepath),
      },
    });
  } catch (err) {
    console.log(err);
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const upload = multer({ storage });

app.post("/product", upload.single("file-to-upload"), (req, res) => {
  const filepath = path.join(__dirname, "uploads", req.file.filename);

  uploadFile(req.file.filename, filepath);
  res.redirect("/product");
});
app.get("/", (res, req) => {
  res.send("hello");
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
