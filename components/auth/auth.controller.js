const register = (req, res) => {
    res.json({ ok:true, msg:'register'}) 

}


const login = (req, res) => {
    res.json({ ok:true, msg:'login'}) 

}

module.exports = { login, register}