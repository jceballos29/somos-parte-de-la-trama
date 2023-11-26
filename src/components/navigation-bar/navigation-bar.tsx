import { pages } from '@/utils';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageType } from '@/types';

export interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
	const location = useLocation();

	return (
		<motion.nav
			className='fixed flex w-full z-10 bottom-0 left-1/2 -translate-x-1/2 px-4 py-2'
			initial={{
				bottom: '-20%',
			}}
			animate={{
				bottom: 0,
				transition: {
					duration: 0.5,
					ease: 'easeInOut',
				},
			}}
		>
			<ul className='w-full w-max-80 mx-auto rounded-full py-1 bg-slate-50/40 backdrop-blur-sm flex items-center justify-center space-x-2 duration-500 transition-all shadow-xl'>
				{pages.map((page: PageType) => (
					<Link
						key={page.name}
						to={page.url}
						className={`relative flex flex-col items-center justify-center duration-500 transition-all active:bg-none`}
					>
						<figure
							className={`flex items-center justify-center p-2 relative bg-transparent ${
								location.pathname === page.url
									? '-translate-y-6  text-slate-600'
									: 'text-slate-800'
							} rounded-full duration-500 transition-all`}
						>
							<div
								className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
									location.pathname === page.url
										? 'w-full h-full opacity-100 bg-slate-50/40 backdrop-blur-md border-slate-600 shadow-md shadow-slate-400'
										: 'w-2 h-2 opacity-0 bg-transparent border-transparent '
								} duration-500 transition-all`}
							/>
							<page.icon className='relative z-10 h-6 w-6' />
						</figure>
						<span
							className={`text-sm absolute capitalize top-1/2  ${
								location.pathname === page.url
									? 'opacity-100 text-slate-600'
									: '-translate-y-4 opacity-0 text-slate-800'
							} duration-500 transition-all delay-100`}
						>
							{page.name}
						</span>
					</Link>
				))}
			</ul>
		</motion.nav>
	);
};

export default NavigationBar;
