import { User } from "./users.controller"

export default class Middleware {
  static async auth(req, res, next) {
    const userJwt = req.get("Authorization").slice("Bearer ".length)
    req.userClaim = await User.decoded(userJwt)
    let { error } = req.userClaim
    if (error) {
      res.status(401).send({ error })
      return
    }
    next()
  }
}
