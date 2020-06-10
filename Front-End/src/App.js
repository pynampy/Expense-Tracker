import React from 'react';
import './App.css'
import { Header } from './components/Header';
import { Balance } from './components/balance';
import {IncomeExpense} from './components/incomeExpense';
import { TransactionList } from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
