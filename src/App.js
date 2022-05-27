import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import Products from './components/Products';
import Corps from './components/Corps';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';


// const array0=[
//   {id:"0",
//   image:"https://www.apple.com/v/iphone-13-pro/f/images/overview/design/finishes_1_alpine_green__bxgqurawflau_large.jpg",
//   categorie:"Iphone",
//   price:"1450$",
//   titre:"13 Pro Max",
//   description:"L’iPhone 13 Pro est fait pour la pénombre. Son appareil grand-angle se dote d’une ouverture plus large et de notre plus grand capteur, et il exploite le scanner LiDAR pour les portraits en mode Nuit. L’ultra grand-angle bénéficie d’une ouverture plus large également, d’un capteur plus rapide et d’une toute nouvelle mise au point automatique. Quant au téléobjectif, il découvre à son tour le mode Nuit."},
  
 
// ]


function App() {
  return (
    <>
      <Header/>
       <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/products/:id" component={ProductDetail} />
            {/* <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductDetail} /> */}
            <Redirect to="/" />
      </Switch>
      {/* <Corps array0={array0}/> */}
      
    </>
  );
}

export default App;
