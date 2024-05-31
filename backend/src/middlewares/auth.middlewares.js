import Jwt from "jsonwebtoken"
import { User } from "../models/user.models.js"
import {asyncHandler} from '../utilities/asyncHandler.js'
import {ApiError} from '../utilities/ApiError.js'



export const verifyJWT = asyncHandler(async (req,_, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        console.log("token from auth:",token)
    
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
        const decodedToken = Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user=await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user) {
            throw new ApiError(401,"Invalid access token")
        }
    
        req.user=user
        next()
    }
     catch (error) {
        throw new ApiError(401,error?.message || "Invalid Access Token")
    }
    
})