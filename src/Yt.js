import React from 'react';

const Yt = () => {
  const handleClick = () => {
    for (let i = 0; i < 60; i++) {
      const randomSearch = Math.random().toString(30).substring(2);
      window.open(`https://www.bing.com/search?q=${randomSearch}`, '_blank');
    }
  }

  return (
    <button onClick={handleClick}>Open 30 Bing Search Tabs</button>
  );
}

export default Yt;