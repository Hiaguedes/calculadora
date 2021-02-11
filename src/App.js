import { GlobalStyle } from './globalStyle';
import Display from './components/Display';
import Button from './components/Button';
import { GridButtonsContainer } from './components/GridButtonsContainer';
import { Layout } from './layouts/main.styles'

function App() {

  const buttonsLayout = [
    "7","8","9","÷",
    "4","5","6","*",
    "1","2","3","-",
    "C","0","=","+",
  ]

  return (
    <>
    <GlobalStyle />
      <Layout>
        <Display />
        <GridButtonsContainer>
          {buttonsLayout.map((button,index) => 
          <Button key={index} char={button} />
          )}
        </GridButtonsContainer>
      </Layout>
    </>
  );
}

export default App;
