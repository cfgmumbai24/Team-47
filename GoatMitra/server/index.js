require('dotenv').config();

const port = process.env.PORT;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require("path");
const { log } = require('console');
const { type } = require('os');

app.use(express.json());
app.use(cors());