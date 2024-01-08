import KullaniciModel from './Kullanici.js';
import YeteneklerModel from './Yetenekler.js';
import EgitimModel from './Egitim.js';
import DeneyimModel from './Deneyim.js';
import PortfolyoModel from './Portfolyo.js';
import LinkModel from './Link.js';
import BoolOnayModel from './BoolOnay.js';
import MesajModel from './Mesaj.js';
import LoginModel from './login.js';
const models = {
  Egitim:EgitimModel,
  Kullanici: KullaniciModel,
  Yetenekler:YeteneklerModel,
  Deneyim:DeneyimModel,
  Portfolyo:PortfolyoModel,
  Link:LinkModel,
  BoolOnay:BoolOnayModel,
  Mesaj:MesajModel,
  Login:LoginModel,
};

export default models;