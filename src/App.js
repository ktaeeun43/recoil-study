
import './App.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { atom } from "recoil";
import Counter from './Counter';

function App() {

  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  );
}

export default App;
