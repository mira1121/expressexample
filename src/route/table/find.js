import db from "../../model/index";
import Joi from "joi";

const schema = Joi.object({
  page: Joi.number(),
  page_size: Joi.number(),
  xid: Joi.number(),
  yid: Joi.number(),
  dataid: Joi.string(),
});

export default async (req, res) => {
  let mira = await schema.validate(req.body);
  if (mira.error) {
    res.json({ code: 400, message: "Амжилтгүй", result: mira.error.details });
    return;
  }

  let page = req.body.page ? req.body.page : 1;
  let page_size = req.body.page_size ? req.body.page_size : 10;
  let where = {};
  if (req.body.dataid) {
    where.dataid = req.body.dataid;
  }
  if (req.body.xid) {
    where.xid = req.body.xid;
  }
  if (req.body.yid) {
    where.yid = req.body.yid;
  }
  let result = await db.table.findAndCountAll({
    where: where,
    offset: (page - 1) * page_size,
    limit: page_size,
  });
  res.json({
    code: 200,
    message: "Амжилттай",
    result: {
      page: page,
      page_size: page_size,
      total_page: Math.ceil(result.count / 4),
      total: result.count,
      data: result.rows,
    },
  });
};
