import information from '@/assets/images/information.webp';
import cultureLogo from '@/assets/images/nos-mueve-la-cultura.webp';
import pdlPpLogo from '@/assets/images/pdl-pp.webp';
import somosParte from '@/assets/images/somos-parte-de-la-trama.webp';
import townHall from '@/assets/images/town-hall-logo.webp';
import { Page } from '@/components';

const Home = () => {
	return (
		<Page className='justify-between'>
			<section className='w-ful flex items-center justify-between'>
				<figure className='overflow-hidden h-10'>
					<img
						src={cultureLogo}
						alt='Nos mueve la cultura'
						className='h-full'
					/>
				</figure>
				<figure className='overflow-hidden h-10'>
					<img
						src={pdlPpLogo}
						alt='PDL y PP Cultura'
						className='h-full'
					/>
				</figure>
			</section>
			<figure className='w-full mx-auto overflow-hidden rounded-xl'>
				<img
					src={somosParte}
					alt='Somos parte de la trama'
					className='w-full'
				/>
			</figure>
			<section className='w-full flex items-center justify-between'>
				<figure className='overflow-hidden h-6'>
					<img
						src={information}
						alt='Información'
						className='h-full'
					/>
				</figure>
				<figure className='overflow-hidden h-10'>
					<img
						src={townHall}
						alt='Alcaldía de Medellin'
						className='h-full'
					/>
				</figure>
			</section>
		</Page>
	);
};

export default Home;
