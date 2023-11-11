import { pages } from '@/utils';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
	const location = useLocation();

	return (
		<nav className='fixed z-10 bottom-2 left-1/2 -translate-x-1/2 rounded-full px-2 py-2 bg-white/40 backdrop-blur'>
			<ul className='flex items-center justify-center space-x-4 duration-100 transition-all '>
				{pages.map((page) => (
					<Link
						key={page.name}
						to={page.url}
						className={`flex items-center space-x-1 p-2 rounded-full overflow-hidden ${
							location.pathname === page.url
								? 'text-slate-600 bg-[#dbb198] w-24 justify-center'
								: 'text-slate-950 w-9'
						} duration-100 transition-all`}
					>
						{location.pathname === page.url ? (
							<page.icons.solid className='h-5 w-5 duration-100 transition-all' />
						) : (
							<page.icons.outline className='h-5 w-5 duration-100 transition-all' />
						)}
						<span
							className={`text-xs capitalize ${
								location.pathname === page.url
									? 'visible opacity-100'
									: 'hidden opacity-0'
							} duration-100 transition-all`}
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
