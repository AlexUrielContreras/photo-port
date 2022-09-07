import './App.css';
import { useState } from 'react'
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {

  const [contactSelected, setContactSelected] = useState(false)

  const [categories] = useState([
    {
        name: 'commercial',
        description: 'Photo of grocery stores, food trucks, and other commerical projects'
    },
    {
        name: 'portraits', 
        description: 'Portraits of people in my life'
    },
    {
        name: 'food',
        description: 'Delecious delicacies'
    }, 
    {
        name: 'landscape',
        description: 'Fields, farmhouses, waterfalls, nad the beauty of nature'
    }
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav 
        categories={categories} 
        currentCategory={currentCategory} 
        setCurrentCategory={setCurrentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}/>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}/>
            <About />
          </>
        ) : (
          <Contact />
        )}
      </main>
    </div>
  );
}

export default App;
