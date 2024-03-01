'use client'

import { ReactNode, useEffect, useState } from "react";

export function Hydrate({ children }: { children: ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    return isMounted ? <>{children}</> : <span>Carregando</span>;
}   