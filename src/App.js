import logo from './logo.svg';
import './App.css';
import Ajouter from './composant/contact/Contact';
import Navbar from './composant/navbar/Navbar';
import Product from './composant/products/Product';
import ExmpleState from './composant/state/ExmpleState';
import Face from './composant/JeuDe/Face';
import Calculator from './composant/Calculator/Calculator';
import StateFunction from './composant/state/StateFunction';
import Employes from './composant/GestionEmployer/Employes';
import MyForm from './composant/Formulaire/ManupulerForm';
function App() {

  const products = [
    {
    id: 1,
    title: 'PC Portable Gamer HP VICTUS',
    price: '7490 DH',
    thumbnail : 'HUA6901443442959.jpg'
    },
    {
    id: 2,
    title: 'PC Portable Gamer HP VICTUS',
    price: '2190 DH',
    thumbnail : 'HP14424U3EA.jpg'
    },
    {
    id: 3,
    title: 'Pc Portable Chromebook Acer',
    price: '3640 DH',
    thumbnail: 'NXATHEF002.jpg'
    },
    {
    id: 4,
    title: 'PC Portable - HUAWEI',
    price: '1270 DH',
    thumbnail: 'HUA6901443442959.jpg'
    },
    ];
    
  
  return (
    <div className="App">
      <MyForm />
      <Employes />
      <Navbar title="Application jeux de Dé" />
      <Face objectif={2} />
      <Navbar  title="Utilisation state Class" />
      <ExmpleState />
      <Navbar  title="Utilisation state avec les Fonction" />
      <StateFunction />
      {/* <Navbar  title="Gestion Employer" />
      <GestionEmployer /> */}
      <Navbar  title="Calcultarice Sousi" />
      <Calculator />
      <Navbar title="Liste des produits" />
      <div className="row">
      {products.map((data)=>
      <Product key={data.id} title={data.title} price = {data.price} thumbnail={data.thumbnail}  />)}
      </div>
      <Ajouter />
      <Ajouter contact = "ismail barhdadi" tele ="025522" email="test@gmail.com" adress ="Rabat"/>
      <Ajouter contact = "youness" tele ="0548555" email="youness@gmail.com" adress ="Sefrou"/>
      <Ajouter contact = "Zakaria" tele ="585555555" email="zakaria@gmail.com" adress ="Fes"/>
    </div>
  );


}

export default App;
