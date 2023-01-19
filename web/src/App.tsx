import './styles/global.css'
import { Habits } from './components/habits';

function App() {
  return (
    <>
    <Habits completed={10} />
    <Habits completed={20} />
    <Habits completed={30} />
    <Habits completed={40} />
    <Habits completed={1} />
    </>
  );
}

export default App;
