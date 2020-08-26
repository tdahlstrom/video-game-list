exports.create = function(req, ownedGameObjects) {
  let findObject = {
    _id: { $in: ownedGameObjects },
    name: { $regex: new RegExp('^' + req.query.char, 'i') },
  }

  if (req.query.platform === "2600") {
    findObject.platform = 2600
  } else if(req.query.platform !== "") {
    findObject.platform = req.query.platform
  }

  if(req.query.year_of_release === "") {
    findObject.year_of_release = req.query.year_of_release
  } else if(req.query.year_of_release !== "none") {
    findObject.year_of_release = parseInt(req.query.year_of_release)
  }

  if(req.query.genre !== "none") {
    findObject.genre = req.query.genre
  }

  return findObject
}
