import Header from './header.jsx'
import Aside  from './Aside.jsx'
import ItemCard from './itemCard.jsx'

function App() {

  return (
    <>
    <Header />
    <div className='flex flex-row'>
    <Aside/>
    <ItemCard/> 
    </div>
    </>
  )
}

export default App
