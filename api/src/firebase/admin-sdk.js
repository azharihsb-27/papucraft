require("dotenv").config();
const admin = require("firebase-admin");
const privateKeyFormat = process.env.ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n")

const cert = admin.credential.cert({
  type: process.env.ADMIN_TYPE,
  projectId: process.env.ADMIN_PROJECT_ID,
  privateKeyId: process.env.ADMIN_PRIVATE_KEY_ID,
  privateKey: privateKeyFormat,
  clientEmail: process.env.ADMIN_CLIENT_EMAIL,
  clientEmail: process.env.ADMIN_CLIENT_EMAIL,
  clientId: process.env.ADMIN_CLIENT_ID,
  authUri: process.env.ADMIN_AUTH_URI,
  tokenUri: process.env.ADMIN_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.ADMIN_AUTH_X509,
  client_x509_cert_url: process.env.ADMIN_CLIENT_X509,
  universe_domain: process.env.ADMIN_DOMAIN,
})

admin.initializeApp({
  credential: cert,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
})


module.exports = admin