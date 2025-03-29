import jwt from "jsonwebtoken";

const isUserAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "User  is not authenticated" });
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decode) {
      return res.status(401).josn({ message: "Invalid token" });
    }
    console.log(decode);

    req.id = decode.adminid;

    next();
  } catch (error) {
    console.log(error);
  }
};
export default isUserAuthenticated;
