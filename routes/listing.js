const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const ListingController = require("../controllers/listings.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

//Index Route
router.get("/", wrapAsync(ListingController.index));

//-CREATE (New & Create Route)
//New Route
router.get("/new", isLoggedIn, ListingController.renderNewForm);

//Create Route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(ListingController.createListing)
);

//READ (Show Route)
router.get("/:id", wrapAsync(ListingController.showListing));

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(ListingController.renderEditForm)
);

//Update route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(ListingController.updateListing)
);

//Delete Route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(ListingController.deleteListing)
);

module.exports = router;
