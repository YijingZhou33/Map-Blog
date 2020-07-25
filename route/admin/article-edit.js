const { Article } = require('../../model/article');

module.exports = async(req, res) => {
    req.app.locals.currentLink = 'article';
    const { id } = req.query;
    if (id) {
        let article = await Article.findOne({ _id: id });
        res.render('admin/article-edit', {
            article: article,
            link: '/admin/article-modify?id=' + id,
            button: 'Update'
        });
    } else {
        res.render('admin/article-edit', {
            link: '/admin/article-add',
            button: 'Create'
        });
    }
};