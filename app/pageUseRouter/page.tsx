"use client";

import  {useRouter} from "next/navigation";

export default function Page() {
    const route = useRouter();
    return(
        <button onClick={() => route.push("/dashboard")}>Dashboard</button>
    );
}