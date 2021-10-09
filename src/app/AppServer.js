const express = require('express')
require('dotenv').config();

class AppServer{

    constructor(){
        this.App = express();
        this.Port = process.env.Port;
    }


    AppStart(){
        this.App.listen( this.Port, () => {
            console.log('Servidor en puerto:', this.Port);
        })  
    }

    Routes(){ }

    Middlewares(){ }

}

module.exports = AppServer;