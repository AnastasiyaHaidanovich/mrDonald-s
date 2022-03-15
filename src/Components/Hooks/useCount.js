import { useState } from 'react';

export const useCount = (openItem) => {
    const savedCount = openItem.count ? openItem.count : 1;
    const [count, setCount] = useState(savedCount);

    const onChange = e => setCount(e.target.value);

    return { count, setCount, onChange };
};