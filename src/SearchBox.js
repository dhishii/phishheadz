import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa1'>
            <input style={{ fontFamily: 'monaco'}}
                className='pa1'
                type='search' 
                placeholder='search phish'
                onChange={searchChange}
            />
        </div>
        
    );
}

export default SearchBox;