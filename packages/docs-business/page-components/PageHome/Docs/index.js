import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

const docs = [
	{
		key         : 'icons',
		icon        : '⭐',
		name        : 'Icons',
		description : 'Simple, beautiful and pixel perfect SVG icons',
		href        : '/icons',
	},
	{
		key         : 'utils',
		icon        : '🔧',
		name        : 'Utilities',
		description : 'Simple utility functions written in JavaScript',
		href        : '/utils',
	},
	{
		key         : 'components',
		icon        : '🧩',
		name        : 'Components',
		description : 'Robust and reusable components written in React',
		href        : '/components',
	},
];

function Docs() {
	return (
		<div className={styles.container}>
			{docs.map((doc) => (
				<Link key={doc.key} href={doc.href}>
					<div className={styles.card_container}>
						<div className={styles.card_icon_container}>
							{doc.icon}
						</div>
						<div className={styles.card_content_container}>
							<h2 className={styles.card_title}>{doc.name}</h2>
							<p className={styles.card_description}>{doc.description}</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default Docs;
