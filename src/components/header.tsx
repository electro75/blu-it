import Link from "next/link";

import {
    Navbar, NavbarBrand,
    NavbarItem, NavbarContent,
    Input, Button, 
    Avatar, Popover, 
    PopoverTrigger, PopoverContent
} from '@nextui-org/react'

import { auth } from "@/auth";
import * as actions from '@/actions';

export default async function Header() {
    const session = await auth();

    let authContent: React.ReactNode;

    if(session?.user) {
        authContent = <>
        <Popover placement="bottom">
            <PopoverTrigger>
            <Avatar src= {session.user.image || ''}/>
            </PopoverTrigger>
            <PopoverContent>
                <div className="p-2" >
                    <form action={actions.signOut}>
                        <button type="submit" >Sign Out</button>
                    </form>
                </div>
            </PopoverContent>
        </Popover>
        
        </>

        
    } else {
        authContent = <>
        <NavbarItem>
            <form action={actions.signIn} >
                <Button type="submit" color="secondary" variant="bordered">Sign In</Button>
            </form>
        </NavbarItem>
        <NavbarItem>
            <form action={actions.signIn}>
                <Button type="submit" color="primary" variant="flat">Sign Up</Button>
            </form>
        </NavbarItem>
        </>
    }

    return (
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href="/" className="font-bold">BluIt</Link>
            </NavbarBrand>

            <NavbarContent justify="center">
                <NavbarItem>
                    <Input></Input>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" >
                {
                    authContent
                }
            </NavbarContent>
        </Navbar>
    )
}