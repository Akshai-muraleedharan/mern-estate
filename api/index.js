import express from 'express'


const app = express()


app.listen(3000,() => {
    console.log(`server connected on port ${3000}`)
})