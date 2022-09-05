import './App.css';
import { useState } from 'react'
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {

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
const [currentCategory, setCurrentCategory] = useState(categories[0])

  return (
    <div>
      <Nav categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
      <main>
        <Contact />
        <Gallery currentCategory={currentCategory}/>
        <About />
      </main>
    </div>
  );
}

export default App;
