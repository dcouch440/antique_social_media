const cloudinary = require('cloudinary').v2;
// const env = process.env.NODE_ENV;
const isTestEnv = true;

const setValue = envKey => process.env[envKey];
const cloud_name = setValue(isTestEnv ? 'TEST_CLOUDINARY_API_NAME' : 'CLOUDINARY_API_NAME');
const api_key = setValue(isTestEnv ? 'TEST_CLOUDINARY_API_KEY' : 'CLOUDINARY_API_KEY');
const api_secret = setValue(isTestEnv ? 'TEST_CLOUDINARY_API_SECRET' : 'CLOUDINARY_API_SECRET');

cloudinary.config({ cloud_name, api_key, api_secret });

module.exports = { cloudinary };