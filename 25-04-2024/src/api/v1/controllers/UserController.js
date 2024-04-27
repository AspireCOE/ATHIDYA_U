export const GetUser = (request, response) => {
    return res.json();
};

export const GetUserById = (request, response) => {
    var id = req.params.id;
};

export const PostUser = (request, response) => {
    var postBody = {
        name: req.body.name,
        age: req.body.age,
        isAdmin: req.body.isAdmin,
        comment: req.body.comment,
    };
};

export const DeleteUser = (request, response) => {
    var id = req.params.id;
};
