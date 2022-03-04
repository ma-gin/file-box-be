export const handleBadRequest = (error, req, res, next) => {
  if (error.status === 400) {
    res
      .status(400)
      .send({
        message: error.message,
        errorsList: errorsList.array().map((error) => error.ms),
      })
  } else {
    next(error)
  }
}
export const handleNotAuth = (error, req, res, next) => {
  if (error.status === 401) {
    res.status(401).send({
      message: error.message,
    })
  } else {
    next(error)
  }
}
export const handleNotFound = (error, req, res, next) => {
  if (error.status === 404) {
    res.status(404).send({
      message: error.message,
    })
  } else {
    next(error)
  }
}
export const serverError = (error, req, res, next) => {
  res.status(500).send({
    message: "Internal server error.",
  })
}
