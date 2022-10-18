const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  link: {
    type: String,
    required: "Please enter link",
  },
  title: {
    type: String,
    required: "Title can't be empty"
  }
});

LinkSchema.path('link').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');