import React from 'react';
import { motion } from 'framer-motion';

export interface PageProps {
	children: React.ReactNode;
	className?: string;
}

const Page: React.FC<PageProps> = ({ children, className = '' }) => {
	return (
		<motion.div
			className={`page ${className}`}
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
				transition: {
					duration: 0.3,
					ease: 'easeIn',
				},
			}}
			exit={{
				opacity: 0,
				transition: {
					duration: 0.3,
					ease: 'easeOut',
				},
			}}
		>
			{children}
		</motion.div>
	);
};

export default Page;
