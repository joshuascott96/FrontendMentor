import Card from './components/Card';
import Title from './components/Title';
import { BillProvider } from './context/BillContext';

function App() {
  return (

    <BillProvider>
      <div className='content w-full sm:h-screen flex flex-col justify-center items-center'>
        <Title />
        <Card />
      </div>
    </BillProvider>
  );
}

export default App;
