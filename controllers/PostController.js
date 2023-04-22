import PostModel from "../models/Post.js"

export const create = async (req, res) => {

    try{
        const doc  = new PostModel({
            tittle: req.body.tittle,
            text: req.body.text,
            tags: req.body.tags,
            imageUrl:req.body.imageUrl,
            user:req.userId,
            // viewsCount: req.body.views,
        });

        const post = await doc.save();

        res.json(post);
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Не удалось создать статью",
        });
    }
}