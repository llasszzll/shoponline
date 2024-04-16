import { ReactNode } from "react";

export function Pageheader({children}: {children: ReactNode}) {
    return <h1 className="text-4xl mb-4">{children}</h1>
}