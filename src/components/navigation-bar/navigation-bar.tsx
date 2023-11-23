import { pages } from '@/utils';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
	const location = useLocation();

	return (
		<nav className='fixed flex w-full z-10 bottom-0 left-1/2 -translate-x-1/2 p-2'>
			<ul className='w-80 mx-auto rounded-full py-1 bg-slate-50/40 backdrop-blur flex items-center justify-center space-x-1 duration-500 transition-all shadow-md shadow-slate-950/20'>
				{pages.map((page) => (
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
										? 'w-full h-full opacity-100 bg-slate-50/60 backdrop-blur-md border-slate-600 shadow-md shadow-slate-400'
										: 'w-2 h-2 opacity-0 bg-transparent border-transparent '
								} duration-500 transition-all`}
							/>
							{location.pathname === page.url ? (
								<page.icons.solid className='relative z-10 h-6 w-6' />
							) : (
								<page.icons.outline className='h-6 w-6' />
							)}
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
		</nav>
	);
};

export default NavigationBar;
