"use client";

import {useState} from "react";

export default function Page() {
    const [items] = useState(['java', 'php', 'c++']);
    return (
        <div>
            {items.map((item) => <div key={item}>{item}</div>)}
        </div>
    );
}