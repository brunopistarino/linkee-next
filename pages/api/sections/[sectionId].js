import dbConnect from "../../../utils/dbConnect";
import Section from "../../../models/section";
import Link from "../../../models/link";

export default async function handler(req, res) {
  const { sectionId } = req.query;
  const { method } = req;
  //   res.end(`Post: ${sectionId}`);

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const section = await Section.findOne({ _id: sectionId });
        const links = await Link.find({ section: sectionId });
        res.status(200).json({ success: true, data: { section, links } });
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
