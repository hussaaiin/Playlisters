const { google } = require("googleapis");

require("dotenv").config();

const youtube = google.youtube({
  version: "v3",
  auth: process.env.API_KEY,
});

// videos.js
exports.videos = async (req, res) => {
  const { q } = req.query;
  const response = await youtube.search.list({
    part: "snippet",
    q,
    type: "video",
  });
  res.json(response.data.items);
};
exports.searchPlaylists = async (req, res) => {
  const { q } = req.query;
  try {
    const response = await youtube.search.list({
      part: "id,snippet",
      q,
      type: "playlist",
    });
    const playlists = response.data.items.map((item) => {
      const { id, snippet } = item;
      return {
        id: id.playlistId,
        title: snippet.title,
        description: snippet.description,
        thumbnail: snippet.thumbnails.default.url,
      };
    });
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
