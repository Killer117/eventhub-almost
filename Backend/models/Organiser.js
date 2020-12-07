const mongoose = require("mongoose");
const Event = require("./Event");
const bcrypt = require("bcryptjs");

const organisersSchema = new mongoose.Schema({
  company_name: String,
  email: String,
  address: String,
  password: String,
  mobile_no: Number,
  landline_no: Number,
  state: String,
  city: String,
  pincode: String,
  states: Array,
  events: Array,

  faqs: {
    title: {
      type: Array,
      default: [
        "What is EventHub",
        "What is EventHub",
        "What is EventHub",
        "What is EventHub",
        "What is EventHub",
      ],
    },
    description: {
      type: Array,
      default: [
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
      ],
    },
  },
  portfolio_home: {
    title: {
      type: String,
      default: "Crafted for buisness",
    },
    description: {
      type: String,
      default:
        "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
    },
    website: {
      type: String,
      default: "https://www.google.com",
    },
  },
  portfolio_about: {
    description: {
      type: String,
      default:
        "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
    },
  },
  portfolio_services: {
    description: {
      type: String,
      default:
        "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
    },
  },
  portfolio_photos: {
    description: {
      type: String,
      default:
        "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
    },
  },
  socialMediaHandles: {
    Instagram: { type: String, default: "https://www.google.com" },
    Twitter: { type: String, default: "https://www.google.com" },
    Facebook: { type: String, default: "https://www.google.com" },
    LinkedIn: { type: String, default: "https://www.google.com" },
    Youtube: { type: String, default: "https://www.google.com" },
  },
  budget: {
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100000 },
  },
  bio: {
    type: String,
    default:
      "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
  },
});
organisersSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log(this.password);
    this.password = await bcrypt.hash(this.password, 10);
    console.log(this.password);
  }
});
module.exports = mongoose.model("Organiser", organisersSchema);
