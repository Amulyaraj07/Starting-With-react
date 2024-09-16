import React  from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}

// const ReactElement={
//   type: 'a',
//   props: {
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherUser="AmulyaRaj"

const anotherElement=(
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
    // <App/>
    reactElement
);
