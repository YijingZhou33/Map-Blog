const { User } = require('../../model/user');

module.exports = async(req, res) => {
    req.app.locals.currentLink = 'user';

    // pagination
    let page = req.query.page || 1;
    let pagesize = 8;
    let count = await User.countDocuments({});
    let total = Math.ceil(count / pagesize);
    let start = (page - 1) * pagesize;
    let users = await User.find().limit(pagesize).skip(start);

    res.render('admin/user', { users, page, total, count });
}