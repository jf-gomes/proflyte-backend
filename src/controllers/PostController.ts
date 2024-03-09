import Posts from "../models/Posts";

async function createPost(req: any, res: any){
    const post = req.body
    const newPost = await Posts.create(post)
    return res.status(201).json(newPost)
}

async function getPosts(req: any, res: any){
    const id = req.params.id
    if (id == 0){
        const posts = await Posts.find()
        return res.status(200).json(posts)
    } else {
        const posts = await Posts.find({ createdBy: id })
        return res.status(200).json(posts)
    }
}

async function editPost(req: any, res: any){
    const id = req.params.id
    await Posts.updateOne({ _id: id }, req.body)
    return res.status(200).json({ response: 'User edited' })
}

export {
    createPost,
    getPosts,
    editPost
}