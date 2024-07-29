'use-client';
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
import React from "react";

interface FormButtonProps {
    children: React.ReactNode,
    color?: ''
}

export default function FormButton({children, color}: FormButtonProps) {
    const {pending} = useFormStatus()

    return (
        <Button type="submit" isLoading={pending} color={color || 'primary'}>
            {children}
        </Button>
    )
}