import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Navigation from './components/Navigation/Navigation';
import './styles/main.scss';
import { useState } from 'react';

function App() {

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

	return (
		<div className="App">
			<Header />
			<Modal isOpen={isModalOpen} onClose={handleCloseModal} />
			<div className="main">
				<Navigation />
				<section className="content">
					<Content onOpenModal={handleOpenModal} />
				</section>
			</div>
		</div>
	);
}

export default App;
