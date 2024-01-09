import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
//import HomeRoute from "./routes/HomeRoute.js";
import models from './models/index.js';
const Kullanici = models.Kullanici;
const Yetenekler =models.Yetenekler;
const Egitimler=models.Egitim;
const Deneyim=models.Deneyim;
const Portfolyo=models.Portfolyo;
const Link=models.Link;
const Mesaj=models.Mesaj;
const login=models.Login;
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { ObjectId } from 'mongodb';
import mongoose, { model } from 'mongoose';
import { Int32 } from "mongodb";
import { error } from 'console';
import Egitim from './models/Egitim.js';
import BoolOnay from './models/BoolOnay.js';
import Login from './models/login.js';
import fileUpload from 'express-fileupload';
import {v2 as cloudinary } from 'cloudinary';


dotenv.config();

//connection tı the DB

conn();

const app = express();
const port = 3001;

//cloud
cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_API_KEY,
  api_secret:process.env.CLOUD_API_SECRET,
});
app.set('view engine', 'ejs');

//static files middleware
app.use(express.static('public'));
app.use(fileUpload({useTempFiles:true}));



app.get('/', async (req, res) => {
  try {
    // Tüm modellerden verileri tek bir sorguda çekme
    const [kullaniciResult, yeteneklerResult, egitimlerResult, deneyimResult, portfolyoResult, linkResult, boolOnayResult] = await Promise.all([
      models.Kullanici.find().sort({ createdAt: -1 }),
      models.Yetenekler.find().sort({ createdAt: -1 }),
      models.Egitim.find().sort({ createdAt: -1 }),
      models.Deneyim.find().sort({ createdAt: -1 }),
      models.Portfolyo.find().sort({ createdAt: -1 }),
      models.Link.find().sort({ createdAt: -1 }),
      models.BoolOnay.find().sort({ createdAt: -1 })
    ]);

    // Şablonu render etme
    res.render('index', {
      Kullanici: kullaniciResult,
      Yetenekler: yeteneklerResult,
      Egitim: egitimlerResult,
      Deneyim: deneyimResult,
      Portfolyo: portfolyoResult,
      Link: linkResult,
      BoolOnay: boolOnayResult
    });
  } catch (err) {
    console.error("Veri çekme hatası:", err);
    res.render('index', { Yetenekler: [] });
  }
});
// Home port sayfası
app.get('/portfolyo/:id', async (req,res)=>{ 
  const portid=req.params.id;
  try{
    const port=await models.Portfolyo.findById(portid)
    if(port){
      res.render('port',{Portfolyo:port});
    }else{
      res.status(404).send('portfolyo bulunamadı')
    }
  }catch (error) {
  res.status(404).send('Nedeni bilinmeyen hata: ' + error.message);
}

  res.render('Home/port', { Portfolyo: [] });
  
});

//İndex sayfası Mesaj gönderme işlemi
app.use(express.urlencoded({ extended: true }));
app.post('/send', async (req, res) => {
  if(req.body==null){
    res.redirect('/');
  }
  const tarihString = Date.now(); // Date.now() fonksiyonunu çağırın
  const tarih = new Date(tarihString);

  const formatOptions = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  };
  const formatliTarih = tarih.toLocaleDateString('tr-TR', formatOptions);
    try {
      const yeniMesaj = new Mesaj({
        Isim:req.body.Isim,
        Baslik:req.body.Baslik,
        Email:req.body.Email,
        Mesaj:req.body.Mesaj,
        Tarih:formatliTarih,
      });
      // Veritabanına Mesajı ekle ekle
      yeniMesaj.save()
      .then((result) => {
        console.log('Yeni Link eklendi:', result);
        
      })
      .catch((err) => {
        console.error('Veritabanına Mesaj eklerken hata oluştu:', err.message);
        console.error('Hata stack trace:', err.stack);

      });

    } catch (err) {
      console.error('Ekleme hatası:', err);
      res.status(500).send('Ekleme hatası');
    }

  res.redirect('/');
});



app.listen(process.env.PORT||port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor`);
});
