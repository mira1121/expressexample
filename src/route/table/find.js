import db from "../../model/index";

export default async (req, res) => {
  let result = await db.table.findAll();
  res.json({
    code: 200,
    message: "Амжилттай",
    result: result,
  });
};
