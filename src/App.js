import React from 'react'
import './App.css'
import WebcamCapture from './components/camera/WebcamCapture'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Snapchat</h1>
			</header>
			<WebcamCapture />
		</div>
	)
}

export default App
