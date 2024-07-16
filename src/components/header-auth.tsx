'use client';

import Link from "next/link";

import {
    NavbarItem, Button, 
    Avatar, Popover, 
    PopoverTrigger, PopoverContent
} from '@nextui-org/react'

import { useSession } from "next-auth/react";
import * as actions from '@/actions';

export default function HeaderAuth() {
    const session = useSession();

    let authContent: React.ReactNode;

    if(session.status === 'loading') {
        authContent = null;
    }

    else if(session.data?.user) {
        authContent = <>
        <Popover placement="bottom">
            <PopoverTrigger>
            <Avatar src= {session.data.user.image || ''}/>
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

    return authContent

}