exports.authenticated_user = (req, res) => {
    res.json(req.user);
}