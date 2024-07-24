import Link from "next/link";

import {
    Navbar, NavbarBrand,
    NavbarItem, NavbarContent,
} from '@nextui-org/react'
import HeaderAuth from "./header-auth";
import SearchInput from "./search-input";
import { Suspense } from "react";

export default  function Header() {

    return (
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href="/" className="font-bold">BluIt</Link>
            </NavbarBrand>

            <NavbarContent justify="center">
                <NavbarItem>
                    <Suspense>
                        <SearchInput></SearchInput>
                    </Suspense>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" >
                {
                    <HeaderAuth/>
                }
            </NavbarContent>
        </Navbar>
    )
}