import React from 'react';
import {countState} from './atom';
import { useRecoilState, 
  useRecoilValue, 
  useSetRecoilState, 
  useResetRecoilState 
} from 'recoil';
import { inputState } from './atom';
import countStateSelector from './selector';

function Counter() {
  const [counter, setCounter] = useRecoilState(countState); 
  const currentCount = useRecoilValue(countState);  // 읽기 전용!
  const counterHandler = useSetRecoilState(countState); // 값만 변경 시키기 
  const resetCounter = useResetRecoilState(countState); // 디폴트값으로 값 변경
  
  const currentInput = useRecoilValue(inputState);
  const inputHandlerState = useSetRecoilState(inputState);
  const resultValue = useRecoilValue(countStateSelector);

  const plusCount = () => {
    counterHandler((pre) => pre + 1);
  };
  const minusCount = () => {
    counterHandler((pre) => pre - 1);
  };

  const inputHandler = (e) => {
    let target = e.target.value;
    inputHandlerState(target);
  };
  const submitCount = () => counterHandler((pre) => pre + Number(currentInput));
 
return (
    <div>
    <div>{currentCount}</div>
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
      <button onClick={resetCounter}>reset</button>

      <div>
        <input type='text' onChange={inputHandler}></input>
        <button onClick={submitCount}>입력값 더하기</button>
        <div>{resultValue}</div>
      </div>
    </div>
  );
}

export default Counter;