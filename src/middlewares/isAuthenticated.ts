import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // validar o token

    /* Assigning the value of the sub property of the decoded token to the user_id property of the
   request object. */
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    /* Assigning the value of the sub property of the decoded token to the user_id property of the
    request object. */
    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}
