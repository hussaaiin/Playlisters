const express = require("express");
const router = express.Router();

//<--import controllers-->>
const PlaylistsCtrl = require("../controllers/Playlists/Playlists");

//<--make api routes-->>
router.get("/playlists", PlaylistsCtrl.searchPlaylists);

module.exports = router;
