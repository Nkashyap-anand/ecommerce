import React from 'react';

const Home = () => {
	return (
		<>
			HeroBanner
			<div className='products-heading'>
				<h2>best selling products</h2>
				<p>speakers of many variations</p>
			</div>
			<div className='products-conatiners'>
				{['P1', 'P2'].map((product) => product)}
			</div>
			Footer
		</>
	);
};

export default Home;
