import {
    Router,
    Request,
    Response
} from "express";
import fs from 'fs';

let route = Router();

route.post("/", async(req: Request, res: Response) => {
        let commentText = req.body.comment
        let page = req.body.page;

        var d = new Date();
        let date = d.toString();

        if (!commentText || !page) return res.json({
            code: 500,
            message: "No comment or page provided in posted request."
        });

        let commentsFile = fs.readFileSync("./data/constants.json");
        let daArray = JSON.parse(commentsFile.toString());

        daArray.comments.push({page: page, date: date, comment: commentText});

        let newFile = JSON.stringify(daArray);

        fs.writeFile("./data/constants.json", newFile, (err) => {
            if (err) throw err;
            console.log(`New Comment Submitted: ${commentText}`);
        });

        return res.status(200).json({
            code: "200",
            message: "Comment submitted successfully."
        })
    });

export default route;