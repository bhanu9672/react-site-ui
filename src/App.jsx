import './App.css';
import styles from "./style";

import { Navbar,Billing,CardDeal,Business,Clients,CTA,Stats,Footer,Testimonials,Hero } from './Componets';

function App() {

	return (
		<>
		<div className="bg-primary w-full overflow-hidden">
			<div className={` ${styles.paddingY}  ${styles.flexCenter}`}>
				<div className={ `${styles.boxWidth}` }>
				<Navbar />
				</div>
			</div>
		</div>
		<div className={ `bg-primary ${styles.flexStart}` }>
			<div className={ `${ styles.boxWidth }` }>
               <Hero />
			</div>
		</div>
		<div className={ `bg-primary ${ styles.paddingY } ${styles.flexStart}` }>
			<div className={ `${ styles.boxWidth }` }>
               <Stats />
			   <Business />
			   <Billing /> 
			   <CardDeal  />
			   <Testimonials /> 
			   <Clients /> 
			   <CTA /> 
			   <Footer /> 
			</div>
		</div>
		</>
	)
}

export default App
