module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{svg,png,html,json,mp3,xml,js,jpg}"
  ],
  "swDest": "sw.js",
  "swSrc": "./src/src_sw.js",
  maximumFileSizeToCacheInBytes: 20000000
};