const proffys = [
    { 
        name: "Julio Henrique", 
        avatar: "https://scontent.ftjl1-1.fna.fbcdn.net/v/t1.0-1/p200x200/116440698_1200181637011834_2200060503991255246_o.jpg?_nc_cat=111&_nc_sid=7206a8&_nc_eui2=AeHxdelO_A1rNXRynzC-83F1SI9cJUr75sVIj1wlSvvmxXYAZ98nUFacj_G2C6BrqbqFu6D6YFk-MI7cYnuadklu&_nc_ohc=FEFkoWk18uUAX-qTrj6&_nc_ht=scontent.ftjl1-1.fna&_nc_tp=6&oh=14e40d4e4e2d271095fd66f7ada71920&oe=5F536971", 
        whatsapp: "4568524552", 
        bio: "Entusiasta das melhores tecnologias de suporte avançada.  Apaixonado por arrumar coisas em laboratório e por mudar a vida das pessoas através de experiências tecnologicas na minha empresa. Mais de 200.000 pessoas já passaram por um de meus suportes.", 
        subject: "Suporte de Tecnlogia", 
        cost: "20" , 
        weekday: [
            0
        ], 
        time_from: [720], 
        time_t: [1220]
    },
    { 
        name: "Alexandre Neves", 
        avatar: "https://scontent.ftjl1-1.fna.fbcdn.net/v/t1.0-1/p200x200/69449396_2559935080754918_5945789730573516800_o.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_eui2=AeEE4NGmw9LXZmozsTx4XPC2jw_4atado-CPD_hq1p2j4GpjNrsJ0EjJ93nAnBbXOgeGE1fZBbEIPvwQL8TMPCOz&_nc_ohc=dpykoJfmjHAAX-G1Dn7&_nc_ht=scontent.ftjl1-1.fna&_nc_tp=6&oh=72e7fdc6b8cdf4bc9cd71ec9bb9b6eaa&oe=5F5220A9", 
        whatsapp: "4568524552", 
        bio: "Entusiasta das melhores tecnologias de design avançada.   Apaixonado por explodir a mente das pessoas, com uma arte incrivel. Mais de 200.000 pessoas já passaram por uma das minhas aulas de design.", 
        subject: "Design", 
        cost: "20" , 
        weekday: [
            1 
        ], 
        time_from: [720], 
        time_t: [1220]
    }
]

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters})
}

function pageGiveClasses(req, res){
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})
server
// configurar arquivos estaticos
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)
.listen(5500)