module.exports = (mongoose) => {
  const Artist = mongoose.model(
    "artist",
    mongoose.Schema({
      artistid: {
        type: Number,
        required: true,
        unique: true,
      },
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
      },
      wiki_url: {
        type: String,
        required: true,
      },
      profile_url: {
        type: String,
        required: true,
      },
      movies: {
        type: [],
        //we don't have to specify the default as empty array because its implicitly empty
      },
    })
  );
  return Artist;
};
