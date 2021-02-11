import {useState} from 'react';
import { GlobalStyle } from './globalStyle';
import Display from './components/Display';
import Button from './components/Button';
import { GridButtonsContainer } from './components/GridButtonsContainer';
import { Layout } from './layouts/main.styles';

function App() {

  const [exp,setExp]= useState('0');

  const buttonsLayout = [
    "7","8","9","÷",
    "4","5","6","x",
    "1","2","3","-",
    "C","0","=","+",
  ];

  const handleClick = (value) => {
    console.log(value);
    if(value === 'C') {
      setExp('');
      return;
    }
    if(value === '=') {
      setExp(eval(exp.replace('x','*').replace('÷','/')));
      return;
    }
    setExp(exp+value);
  }

  return (
    <>
    <GlobalStyle />
      <Layout>
        <Display exp={exp}/>
        <GridButtonsContainer>
          {buttonsLayout.map((button,index) => { return (
            <Button onClick={() => handleClick(button)} key={index} char={button} />
          )}
          )}
        </GridButtonsContainer>
      </Layout>
    </>
  );
}

export default App;
