import React, { useState } from 'react'
import About from './componets/About'
import Nav from './componets/Nav'
import Gallery from './componets/Gallery'

function App() {
  const [categories] = useState([
  {
      name: 'commercial',
      description: 'Photo of grocery store, food trucks, and other commercial projects',
  },
  {
      name: 'portraits',
      description: 'Portraits of people in my life'
  },
  {
      name: 'food',
      description: 'Delicious delicacies'
  },
  {
      name: 'landscape',
      description: 'Fiels, farmhouses, waterfalls, and the beauty of nature'
  }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0])
  return (
    <div>
      <Nav currentCategory={currentCategory} categories={categories} setCurrentCategory={setCurrentCategory}></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div> 
  );
}

export default App;
