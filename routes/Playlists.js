const express = require("express");
const router = express.Router();

//<--import controllers-->>
const PlaylistsCtrl = require("../controllers/Playlists/Playlists");

//<--make api routes-->>
// router.get("/playlists", PlaylistsCtrl.searchPlaylists);
// router.post("/playlists", PlaylistsCtrl.searchPlaylists);
// router.delete("/playlists", PlaylistsCtrl.searchPlaylists);



// GET routes
router.get('/videos', );
router.get('/searchPlaylists', );
router.get('/userPlaylists', );
router.get('/get', );

// POST routes
router.post('/post',);
router.post('/create', );

// PUT route
router.put('/update', );

module.exports = router;

// app.get('/videos', videos);
// app.get('/searchPlaylists', searchPlaylists);
// app.get('/userPlaylists', userPlaylists);
// app.get('/get', get);
// POST routes
// app.post('/post', post);
// app.post('/create', create);

// // PUT route
// app.put('/update', update);
