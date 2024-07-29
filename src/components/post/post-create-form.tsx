"use client";
import { Button, Textarea, Input } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

import * as actions from "@/actions"
import { useFormState } from "react-dom"
import FormButton from "@/components/common/form-button";

interface PostCreateFormProps {
    slug: string
}

export default function PostCreateForm({slug}: PostCreateFormProps) {

    const [formState, action] = useFormState(actions.createPost.bind(null, slug), {
        errors: {}
    })
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Button color="primary" onPress={() => { onOpen() }} >New</Button>
            <Modal 
            size="2xl" 
            isOpen={isOpen} 
            onClose={onClose} 
            >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Create a post</ModalHeader>
                <ModalBody>
                <form action={action}>
                        <div className="flex flex-col gap-4 p-4" >
                            <Input
                                name="title" 
                                label="Title" 
                                labelPlacement="outside" 
                                placeholder="Title"
                                isInvalid={!!formState.errors.title}
                                errorMessage={formState.errors.title?.join(', ')}
                            />
                            <Textarea 
                                name="content" 
                                label="Content" 
                                labelPlacement="outside" 
                                placeholder="Content"
                                isInvalid={!!formState.errors.content}
                                errorMessage={formState.errors.content?.join(', ')}
                                minRows={6}
                                />

                            {formState.errors._form ? <div className="bg-red-100 p-2 border rounded border-red-400 text-red-600 text-xs">{formState.errors._form.join(', ')}</div> : <></> }
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                        Close
                    </Button>
                    <FormButton>Publish</FormButton>
                    {/* <Button color="primary" onPress={onClose}>
                        Action
                    </Button> */}
              </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    </>
    )
}