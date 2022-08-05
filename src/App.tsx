import React, {createElement as e, useState} from 'react';
import { Product } from './components/Product'
import {products} from './data/products'

// Поздравляем с днем рождения!
//  Желаем здоровья, удачи, везения, мира, добра, улыбок, благополучия.
//   Пусть все мечты исполняются. 
//   Пусть жизнь будет долгой и гладкой, полной ярких и запоминающихся событий!




function App() {
  return(
    <div className='container mx-auto max-w-2xl pt-5'>
      { products.map(product => <Product product={product} key={product.id} />)}

      {/* <Product product={ products[0]} />
      <Product product={ products[1]} /> */}
    </div>
  )
}

export default App;
