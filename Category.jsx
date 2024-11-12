import React from 'react';

export default function Category({ finalCategory, setCategoryName }) {

  let categories = Array.isArray(finalCategory) ? finalCategory : [];

  let cat = categories.map((value, index) => {

    return (
      <li onClick={()=>setCategoryName(value.name || value.slug)} key={index} className='bg-[#eae8e8] rounded p-[7px] text-gray-700 cursor-pointer text-[15px] font-system-ui font-[400] mb-2'>
        {value.name || value.slug || value.url}
      </li>
    );
  });

  return (
    <divalue>
      <h3 className='text-[25px] font-[500] pb-[12px] my-[-11px]'>Product Categories</h3>
      <ul>{cat}</ul>
    </divalue>
  );
}
