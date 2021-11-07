/* eslint-disable react/jsx-no-undef */
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      <h3>Convidado: </h3>
      <ClassComponent nome="Luciane" estaNaLista={true} />
      <ClassComponent nome="Juliana" estaNaLista={true} />
      <ClassComponent nome="Carla" estaNaLista={false} />
      <ClassComponent nome="Bruna" estaNaLista={true} />
      <h3>Tarefas: </h3>
      <FunctionComponent nome="Luciane" tarefa="cerveja" />
      <FunctionComponent nome="Juliana" tarefa="pizza" />
      <FunctionComponent nome="Carla" tarefa="bolo" />
      <FunctionComponent nome="Bruna" tarefa="refrigerante" />
    </div>
  );
}

export default App;
