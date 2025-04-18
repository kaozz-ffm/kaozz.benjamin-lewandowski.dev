<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'
import { toast } from 'vue-sonner'

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

const formSchema = toTypedSchema(z.object({
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(500),
    agree: z.boolean().refine((value) => value, { message: 'You must agree to the terms and conditions' })
}))

const { isFieldDirty, handleSubmit } = useForm({
    validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
    toast({
        title: 'You submitted the following values:',
        description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
    })
})
</script>

<template>
    <footer class="bg-slate-200 w-full flex justify-center">
        <div class="flex flex-col md:flex-row justify-between gap-8 w-full py-4-32-clamp max-w-8xl mx-auto px-4-16-clamp">
            <aside class="md:order-2 flex flex-col gap-2">
                <div>
                    <p>Social:</p>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <p>Contact:</p>
                    <ul>
                        <li>
                            <a href="#"><Icon name="lucide:envelope" /></a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
            </aside>
            <Form class="md:order-1 space-y-6 w-full md:max-w-2/3" @submit="onSubmit">
                <FormField v-slot="{ componentField }" name="firstname" :validate-on-blur="!isFieldDirty">
                    <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="shadcn" v-bind="componentField" />
                        </FormControl>
                        <FormDescription>
                            Your first name.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="lastname" :validate-on-blur="!isFieldDirty">
                    <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="shadcn" v-bind="componentField" />
                        </FormControl>
                        <FormDescription>
                            Your last name.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="email" :validate-on-blur="!isFieldDirty">
                    <FormItem>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="shadcn" v-bind="componentField" />
                        </FormControl>
                        <FormDescription>
                            Your e-mail address.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="message" :validate-on-blur="!isFieldDirty">
                    <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Textarea type="email" placeholder="shadcn" v-bind="componentField" />
                        </FormControl>
                        <FormDescription>
                            Your Message.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ value, handleChange }" type="checkbox" name="agree">
                    <FormItem class="flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4 shadow">
                        <FormControl>
                            <Checkbox :model-value="value" @update:model-value="handleChange" />
                        </FormControl>
                        <div class="space-y-1 leading-none">
                            <FormLabel>Use different settings for my mobile devices</FormLabel>
                            <FormDescription>
                                You can manage your mobile notifications in the
                                <a href="/examples/forms">mobile settings</a> page.
                            </FormDescription>
                            <FormMessage />
                        </div>
                    </FormItem>
                </FormField>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    </footer>
</template>
