"use client";

import { requestPasswordReset } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    toast,
} from "@heroui/react";

export default function forgotPasswordPAge() {
    const handleForgotPassword = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        console.log("Userdata before submit",userData);
        
        const resData = await requestPasswordReset({
            email: userData.email,
            redirecTo: "http://localhost:3000/reset-password"
        })
        toast.success("An email is send. Please cheak")
        console.log("Userdata after submit", resData);
    };

    return (
        <>
            <h2>Forgot Password</h2>
            <Form
                className="flex w-96 flex-col gap-4"
                onSubmit={handleForgotPassword}
            >
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                value,
                            )
                        ) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </>
    );
}
