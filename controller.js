let cookies = ['chocolate chip', 'sugar', 'snickerdoodle'];

const getCookies = (req, res, next) => {
    res.json(cookies);
};

const createCookie = (req, res, next) => {
    cookies.push(req.body.newCookie)
    res.json(cookies);
}

const deleteCookie = (req, res, next) => {
    let indexToDelete = cookies.indexOf(req.params.cookie);
    if (indexToDelete !== -1) {
        cookies.splice(indexToDelete, 1);
        res.json(cookies);
    }
}
const updateCookie = (req, res, next) => {
    let indexToUpdate = cookies.indexOf(req.params.cookie);
    console.log(req.body);
    if (indexToUpdate !== -1) {
        cookies.splice(indexToUpdate, 1, req.body.newCookie);
        res.json(cookies);
    }
}

module.exports = {
    getCookies,
    createCookie,
    deleteCookie,
    updateCookie,
}
