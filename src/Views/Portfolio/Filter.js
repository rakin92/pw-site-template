import React from 'react';

function Filter({ filterList, filterToggle}) {
  const filters = filterList.map((filter, index) => (
    <li key={index}>
      <a href={`#filter-${index}`} className={filter.active ? 'active' : 'inactive'} onClick={() => filterToggle(filter.id)}>
        {filter.name}
      </a>
    </li>
  ));
  return(
    <ul className="portfolio-filters">
      {filters}
    </ul>
  );
}

export default Filter;
