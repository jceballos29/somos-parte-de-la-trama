import background from '@/assets/images/background.png';
import { Route, Routes, useLocation } from 'react-router-dom';
import { NavigationBar } from './components';
import {
	Chronicles,
	Credits,
	Gallery,
	Home,
	Podcast,
	Video,
} from './pages';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<div
			className='w-ful h-[100dvh] overflow-hidden relative bg-[#e8cec0] bg-fixed bg-clip-border bg-no-repeat bg-cover'
			style={{ backgroundImage: `url(${background})` }}
		>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route index element={<Home />} />
					<Route path='/podcast' element={<Podcast />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/chronicles' element={<Chronicles />} />
					<Route path='/video' element={<Video />} />
					<Route path='/credits' element={<Credits />} />
				</Routes>
			</AnimatePresence>
			<NavigationBar />
		</div>
	);
}

export default App;
