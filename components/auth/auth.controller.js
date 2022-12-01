


const register = (req, res) => { 
    res.json({ ok:true, msg:'register', user:req.body}) 

}


const login = (req, res) => {
    res.json({ ok:true, msg:'login'}) 

}


const revalidateToken = (req, res) => [
    res.json({ ok:true, msg:'re-validate'}) 
]

module.exports = { login, register , revalidateToken}