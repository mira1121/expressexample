export default async (req, res, next) => {
  await console.log("auth work");
  next();
};
