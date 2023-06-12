import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Content from './components/Content'

import styles from './assets/styles/scss/app.module.scss'

function App() {
	return (
		<div className={styles.root}>
			<Sidebar />
			<Header />
			<Content />
		</div>
	)
}

export default App
