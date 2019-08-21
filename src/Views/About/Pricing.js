import React from "react";

const PRICES = [
	{ label: 'Basic', cost: 20, items: ['Web Designing', 'Web Development', 'App Development'] },
	{ label: 'Basic', cost: 20, items: ['Web Designing', 'Web Development', 'App Development'] },
	{ label: 'Basic', cost: 20, items: ['Web Designing', 'Web Development', 'App Development'] },
]

function Pricing() {

  const prices = PRICES.map((price, index) => (
		<div className="col-md-4" key={index}>

			<div className="p-table">

				<div className="header">
					<h4>{price.label}</h4>
					<div className="price">
						<span className="currency">$</span>
						<span className="amount">{price.cost}</span>
						<span className="period">/hr</span>
					</div>
				</div>

				<ul className="items">
					{price.items.map((item, itemIndex) => (
						<li key={itemIndex}>
							{item}
						</li>
					))}
				</ul>

				<a href={`#price-${index}`} className="btn-material">Sign Up</a>
			</div>

		</div>
  ))

  return(
    <div className="block pricing-block">
          
			<div className="section-header">
				<h2>Pricing</h2>
				<p>I provide different packages for my services</p>
			</div>
			
			<div className="row">
				{prices}
			</div>
		</div>
  );
}

export default Pricing;
