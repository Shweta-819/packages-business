import React from 'react';

import LogoSvg from './logo.svg';
import styles from './styles.module.css';

import packageJSON from '@/package.json';

function Hero() {
	return (
		<div className={styles.container}>
			<div className={styles.logo_container}>
				<LogoSvg className={styles.logo} />
				<p className={styles.version}>
					v
					{' '}
					{packageJSON.version}
				</p>
			</div>
			<p className={styles.description}>
				Resources and Documents for all things Cogoport
			</p>
		</div>
	);
}

export default Hero;
