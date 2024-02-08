let express=require('express')


let app=express()

app.set('view engine', 'ejs')


app.use(express.static('public'))

let appRouter=require('./Routes/user')

app.use('/', appRouter)


app.listen(1000,()=>{
    console.log('server is listening on port 1000')
})