const user = {
  _id: "1",
  name: "Aleks",
  email: "aleks.beloushkin@yahoo.com",
  picture: "https://cloudinary.com/asdf"
};

module.exports = {
  Query: {
    me: () => user
  }
};
