import React from 'react'
import SidebarMenu from "./SidebarMenu";

export default function Header() {
    return (
        <div>
            <header className="flex items-center p-4 shadow-sm">
                <SidebarMenu />
                <h1 className="ml-4 text-lg font-semibold text-sky-400">
                    TOKIA-LOH
                </h1>
            </header>
            <hr />
        </div>
    )
}
