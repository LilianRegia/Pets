import logo from './logo.png';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [QtdColeira, setQtdColeira] = useState(0);
  const [QtdBiscoito, setQtdBiscoito] = useState(0);
  const [QtdCama, setQtdCama] = useState(0);
  const [buscaCol, setBuscaCol] = useState('');
  const [buscaBis, setBuscaBis] = useState('');
  const [buscaCama, setBuscaCama] = useState('');
  const [maFiltCol, setMaFiltCol] = useState([])
  const [maFiltBis, setMaFiltBis] = useState([])
  const [maFiltCama, setMaFiltCama] = useState([])

  useEffect(() => {
    if (buscaCol == ''){
      setMaFiltCol([])
      return
    }
    setMaFiltCol(marcascoleira.filter((marcaCol) => marcaCol.startsWith(buscaCol)))
  },[buscaCol] )

  useEffect(() => {
    if (buscaBis == '') {
      setMaFiltBis([])
    }
    else {
      setMaFiltBis(marcasBiscoito.filter((marcaBis) => marcaBis.startsWith(buscaBis)))
    }
  },[buscaBis] )

  useEffect(() => {
    if (buscaCama != '') {
      setMaFiltCama(marcasCama.filter((marcaCama) => marcaCama.startsWith(buscaCama)))
      return
    }
    setMaFiltCama([])
  },[buscaCama] )

  const incrementa = (estadoAnterior) => {
    return estadoAnterior + 1
  }
  const decrementa = (estadoAnterior) => {
    if(estadoAnterior > 0)
      return estadoAnterior - 1
    else
      return estadoAnterior
  }
  const incrementaColeira = () => {
    setQtdColeira(incrementa) 
  }
  const decrementaColeira = () => {
    setQtdColeira(decrementa)
  }
  const incrementaBiscoito = () => {
    setQtdBiscoito(incrementa)
  }
  const decrementaBiscoito = () => {
    setQtdBiscoito(decrementa)
  }
  const incrementaCama = () => {
    setQtdCama(incrementa)
  }
  const decrementaCama = () => {
    setQtdCama(decrementa)
  }
  const marcascoleira = [
    'Amarra' ,
    'Cordão' ,
    'Pescoço'
  ];

  const marcasBiscoito = [
    'Cumê' ,
    'Merenda' ,
    'Tô Fome'
  ];

  const marcasCama = [
    'Cochilo' ,
    'Mimir' ,
    'Soninho'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Seu Pet merece o melhor!
          </p>
          
          Coleira R$15,00
            <div>
            <button className="diminuir" onClick={decrementaColeira}>-</button>
            <button className="Quantidade">{QtdColeira}</button>
            <button className="adicionar" onClick={incrementaColeira}>+</button>
            <button className="App-button"> Adicionar</button>
          </div>
          <div>
          <label htmlFor="nomeDaEntrada">Gostaria de alguma marca específica?</label>
          <div></div>
            <input 
              onChange={(ev) => setBuscaCol(ev.target.value)} 
              value={buscaCol}
              className="textinput"
              type="text"
              name="nome"/>
          {maFiltCol.map((marcaCol) => (
              <li key={marcaCol}>{marcaCol}</li>
            )) }
            </div>
          <p></p>
          Biscoito R$3,00
          <div>
            <button className="diminuir" onClick={decrementaBiscoito}>-</button>
            <button className="Quantidade">{QtdBiscoito}</button>
            <button className="adicionar" onClick={incrementaBiscoito}>+</button>
            <button className="App-button"> Adicionar</button>
          </div>
          <div>
          <label htmlFor="nomeDaEntrada">Gostaria de alguma marca específica?</label>
          <div></div>
          <input 
              onChange={(ev) => setBuscaBis(ev.target.value)} 
              value={buscaBis}
              className="textinput"
              type="text"
              name="nome"/>
          {maFiltBis.map((marcaBis) => (
              <li key={marcaBis}>{marcaBis}</li>
            )) }
          </div>
          <p></p>
          
          Cama R$100,00
          <div>
            <button className="diminuir" onClick={decrementaCama}>-</button>
            <button className="Quantidade">{QtdCama}</button>
            <button className="adicionar" onClick={incrementaCama}>+</button>
            <button className="App-button"> Adicionar</button>
          </div>
          <div>
          <label htmlFor="nomeDaEntrada">Gostaria de alguma marca específica?</label>
          <div></div>
          <input 
              onChange={(ev) => setBuscaCama(ev.target.value)} 
              value={buscaCama}
              className="textinput"
              type="text"
              name="nome"/>
          {maFiltCama.map((marcaCama) => (
              <li key={marcaCama}>{marcaCama}</li>
            )) }
          </div>
          <p></p>

        </header>
    </div>
  );
}

export default App;

