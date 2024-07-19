"use client";
import { Button, Textarea, Popover, PopoverContent, PopoverTrigger, Input } from "@nextui-org/react";
import * as actions from "@/actions"
import { useFormState } from "react-dom"
import FormButton from "@/components/common/form-button";

export default function PostCreateForm() {
    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary" >New</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={actions.createPost}>
                    <div className="flex flex-col gap-4 p-4 w-80" >
                        <h3 className="text-lg" >Create a post</h3>

                        <Input name="title" label="Title" labelPlacement="outside" placeholder="title"/>

                        <Input name="content" label="Content" labelPlacement="outside" placeholder="content"/>

                        <FormButton>Create</FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}