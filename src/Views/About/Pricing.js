import React from "react";

const PRICES = [
	{ label: 'Frontend', cost: 20, items: ['HTML & CSS', 'JavaScript ES6', 'ReactJS'], icon: 'ion-hammer' },
	{ label: 'Backend', cost: 20, items: ['GoLang', 'Pyhon & Django', 'Postgres SQL'], icon: 'ion-hammer' },
	{ label: 'DevOps', cost: 20, items: ['Docker', 'Kubernetes', 'Git'], icon: 'ion-hammer' },
]

function Pricing() {

  const prices = PRICES.map((price, index) => (
		<div className="col-md-4" key={index}>

			<div className="p-table">

				<div className="header">
					<h4>{price.label}</h4>
					<div className="price">
						{/* <span className="currency">$</span> */}
					  <span className="amount"><i className={price.icon} /></span>
						{/* <span className="period">/hr</span> */}
					</div>
				</div>

				<ul className="items">
					{price.items.map((item, itemIndex) => (
						<li key={itemIndex}>
							{item}
						</li>
					))}
				</ul>

				<a href={`#price-${index}`} className="btn-material">More</a>
			</div>

		</div>
  ))

  return(
    <div className="block pricing-block">
          
			<div className="section-header">
				<h2>Tools</h2>
				<p>I am most effecient with the following tools</p>
			</div>
			
			<div className="row">
				{prices}
			</div>
		</div>
  );
}

export default Pricing;
