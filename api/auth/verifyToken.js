// import express from 'express'
import { expressjwt} from "express-jwt";
import jwks  from 'jwks-rsa'


const verifyToken = expressjwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-xflh1nhmiqkhpil1.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'our store',
  issuer: 'https://dev-xflh1nhmiqkhpil1.us.auth0.com/',
  algorithms: ['RS256']
  });

export default verifyToken;