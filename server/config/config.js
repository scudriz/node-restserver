// =======================
//  Puerto
// =======================


process.env.PORT = process.env.PORT || 3000;

// =======================
//  Entorno
// =======================
// es para saber si estoy en desarrollo o producción, desarrollo : dev, produccion: lo que valga

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =======================
//  Base de datos
// =======================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://asaki-cafe:asaki1992@ds243501.mlab.com:43501/cafe-asaki';
}

process.env.URLDB = urlDB;