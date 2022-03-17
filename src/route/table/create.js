import db from "../../model/index";

export default async (req, res) => {
  var { name, xid, yid, dataid } = req.body;
  let reslut = await db.table.find({dataid: dataid})
  if(reslut){
    res.status(400).json({error: "Unique error"})
  }
  let result = await db.table.create({
    name: name,
    xid: xid,
    yid: yid,
    dataid: dataid,
  });
  res.json(result);
};
