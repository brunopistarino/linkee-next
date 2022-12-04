import dbConnect from "../../../utils/dbConnect";
import Section from "../../../models/section";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const sections = await Section.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: sections });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    //     case "POST":
    //       try {
    //         const section = await Section.create(
    //           req.body
    //         ); /* create a new model in the database */
    //         res.status(201).json({ success: true, data: section });
    //       } catch (error) {
    //         res.status(400).json({ success: false });
    //       }
    //       break;
    //     default:
    //       res.status(400).json({ success: false });
    //       break;
  }
}
