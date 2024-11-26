import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import './styles/main.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<div className="main">
				<Navigation />
				<Content />
			</div>
		</div>
	);
}

export default App;
