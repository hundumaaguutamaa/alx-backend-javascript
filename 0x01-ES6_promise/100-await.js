// Import the required functions from utils.js
const { uploadPhoto, createUser } = require('./utils');

async function asyncUploadUser() {
  try {
    // Call the async functions
    const photo = await uploadPhoto();
    const user = await createUser();

    // Return the result in the specified format
    return {
      photo,
      user,
    };
  } catch (error) {
    // If any function fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

// Export the function
module.exports = asyncUploadUser;

