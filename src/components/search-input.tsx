'use client';
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from '@/actions'

export default function SearchInput() {
    const searchParams = useSearchParams();
    
    return (
        <form action={actions.search} >
            <Input 
                defaultValue={searchParams.get('term') || ''} 
                name="term" 
                placeholder="What are you loking for?" 
                isClearable={true}
                size="md"
                classNames={{
                    inputWrapper:["h-10 py-1"]
                }}
                onClear={() => {}}
                />
        </form>
        
    )
}