import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Navigation from './components/Navigation/Navigation';
import './styles/main.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<Modal />
			<div className="main">
				<Navigation />
				<section className="content">
					<Content 
						mainTitle="STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"
					/>
				</section>
			</div>
		</div>
	);
}

export default App;
