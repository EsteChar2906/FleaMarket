import jwtAuthz from 'express-jwt-authz'

const verifyRole = jwtAuthz(["write:appoinments"],{
    customScopeKey: 'permissions',
    customUserKey: 'auth',
   })

export default verifyRole;