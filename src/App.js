import React, { useState } from 'react'
import  './App.css';
import About from './componets/About/index.js'
import Nav from './componets/Nav/index'
import Gallery from './componets/Gallery/index'

function App() {
  const [categories] = useState([
    {
      name: 'Commercial',
      description: 'Photo of grocery store, food trucks, and other commercial projects',
  },
  {
      name: 'Portraits',
      description: 'Portraits of people in my life'
  },
  {
      name: 'Food',
      description: 'Delicious delicacies'
  },
  {
      name: 'Landscape',
      description: 'Fiels, farmhouses, waterfalls, and the beauty of nature'
  }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0])
  return (
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
      <main>
        <Gallery />
        <About></About>
      </main>
    </div>
  );
}

export default App;
