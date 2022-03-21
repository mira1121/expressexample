import db from "../../model/index";

export default async (req, res) => {
  var { name, xid, yid, dataid } = req.body;
  let result = await db.table.create({
    name: name,
    xid: xid,
    yid: yid,
    dataid: dataid,
  });
  res.json(result);
};
