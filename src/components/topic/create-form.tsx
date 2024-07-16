'use client';

import * as actions from "@/actions"
import { Input, Popover, PopoverTrigger, PopoverContent, Button, Textarea } from "@nextui-org/react"
import { useFormState } from "react-dom";


export default function CreateTopicForm() {

    const [formState, action] = useFormState(actions.createTopic, {errors: {}})

    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary" >New Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className="flex flex-col gap-4 p-4 w-80" >
                        <h3 className="text-lg" >Start a Topic!</h3>
                        <Input 
                            name="name"
                            label="Name" 
                            placeholder="Name" 
                            labelPlacement="outside"
                            isInvalid={!!formState.errors.name}
                            errorMessage={formState.errors.name?.join(', ')}
                            />
                        <Textarea 
                            name="description"
                            label="Description" 
                            placeholder="Describe your topic" 
                            labelPlacement="outside"
                            isInvalid={!!formState.errors.description}
                            errorMessage={formState.errors.description?.join(', ')}
                            />

                        {formState.errors._form ? <div className="bg-red-100 p-2 border rounded border-red-400 text-red-600 text-xs">{formState.errors._form.join(', ')}</div> : <></> }
                        <Button type="submit" >Submit</Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}