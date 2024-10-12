// React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Style CSS
import './App.css'

// Components
import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		{/* <FirstApp title="Hola, soy Bryan" number={22} /> */}
		<CounterApp value={5} />
	</StrictMode>,
)
