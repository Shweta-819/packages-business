import React from 'react';

import styles from './styles.module.css';

function App({ Component, pageProps }) {
	return (
		<main className={styles.container}>
			<Component {...pageProps} />
		</main>
	);
}

export default App;
