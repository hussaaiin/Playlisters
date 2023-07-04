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

exports.userPlaylists = async (req, res) => {
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

exports.get = async (req, res) => {
  const { q } = req.query.id;
  try {
    const response = await youtube.playlistItems.list({
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

exports.post = async function (req, res) {
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
  } catch (error) {}
};

exports.create = async (req, res) => {
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
  // console.log("q:", q);
  res.json({ message: "Playlist created" });
};

exports.update = async (req, res) => {
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
  // console.log("q:", q);
  res.json({ message: "Playlist updated" });
};

// DELETE route
// exports.delete('/playlists/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     // Find the playlist by ID and remove it
//     const playlist = await Playlist.findByIdAndRemove(id);
//     if (!playlist) {
//       return res.status(404).json({ error: 'Playlist not found' });
//     }
//     res.json({ message: 'Playlist deleted' });
//   } catch (err) {
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });