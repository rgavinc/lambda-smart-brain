"use strict";
const emojis = require("./utils").emojis;
var AWS = require("aws-sdk");
var gm = require("gm").subClass({ imageMagick: true }); // Enable ImageMagick integration.
var s3 = new AWS.S3();

module.exports.rank = async event => {
  let rank = event.queryStringParameters && event.queryStringParameters.rank;
  rank = Math.min(Math.max(parseInt(rank || 1), 1), emojis.length - 1);
  const rankEmoji = emojis[rank];

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: rankEmoji
      },
      null,
      2
    )
  };
};

module.exports.message = async event => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(
      {
        text: "Go Serverless v1.0! Your function executed successfully!"
      },
      null,
      2
    )
  };
};

module.exports.image = async event => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(
      {
        image: `s3://imagessmartbrain/brain.jpg`
      },
      null,
      2
    )
  };
};

// TODO: add image uploader
