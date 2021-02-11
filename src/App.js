import { GlobalStyle } from './globalStyle';
import Display from './components/Display';
import Button from './components/Button';
import { GridButtonsContainer } from './components/GridButtonsContainer';
function App() {

  return (
    <>
    <GlobalStyle />
      <div>
        <Display />
        <GridButtonsContainer>
          <Button char="Mateus" />
          <Button char="é" />
          <Button char="Bicha" />
          <Button char="0" />
          <Button char="7" />
          <Button char="8" />
          <Button char="9" />
          <Button char="x" />
          <Button char="4" />
          <Button char="5" />
          <Button char="6" />
          <Button char="-" />
          <Button char="1" />
          <Button char="2" />
          <Button char="3" />
          <Button char="+" />
        </GridButtonsContainer>
      </div>
    </>
  );
}

export default App;
