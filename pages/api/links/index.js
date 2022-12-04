import dbConnect from "../../../utils/dbConnect";
import Link from "../../../models/link";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const links = await Link.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: links });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    //     case "POST":
    //       try {
    //         const link = await Link.create(
    //           req.body
    //         ); /* create a new model in the database */
    //         res.status(201).json({ success: true, data: link });
    //       } catch (error) {
    //         res.status(400).json({ success: false });
    //       }
    //       break;
    //     default:
    //       res.status(400).json({ success: false });
    //       break;
  }
}
