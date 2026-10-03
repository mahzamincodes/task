"use client";
// import {HardDrive, Persons} from "@gravity-ui/icons";
import { toast } from "@heroui/react";
import { changePassword, updateUser } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";

export default function Basic() {
    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const userData = Object.fromEntries(formData.entries());
        console.log("in the form data", userData);

        // alert("Form submitted successfully!");

        // Update user Name
        const resData = await updateUser({
            name: userData.name,
        });
        console.log("After submit user profile", resData);

        // Update Password
        const { data, error } = await changePassword({
            currentPassword: userData.currentPassword, // required, The current user password
            newPassword: userData.newPassword, // required, The new password to set
            revokeOtherSessions: true, // When set to true, all other active sessions for this user will be invalidated
        });
        console.log("After change password", data, error);
    };

    return (
        <Form className="w-full max-w-96" onSubmit={handleUpdateUser}>
            <Fieldset>
                <Fieldset.Legend>Profile Settings</Fieldset.Legend>
                <Description>Update your profile information.</Description>

                <FieldGroup>
                    {/* Name */}
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }

                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>

                    {/* password */}
                    <TextField name="currentPassword" type="password">
                        <Label>Current Password</Label>
                        <Input />
                    </TextField>

                    <TextField name="newPassword" type="password">
                        <Label>New Password</Label>
                        <Input />
                    </TextField>
                </FieldGroup>

                <Fieldset.Actions>
                    <Button
                        type="submit"
                        className="text-success-soft-foreground"
                        size="sm"
                        variant="tertiary"
                        onPress={() => {
                            const id = toast.success(
                                "You have upgraded your plan",
                                {
                                    actionProps: {
                                        children: "Billing",
                                        className:
                                            "bg-success text-success-foreground",
                                        onPress: () => toast.close(id),
                                    },
                                    description:
                                        "You can continue using HeroUI Chat",
                                },
                            );
                        }}
                    >
                        <FloppyDisk />
                        Save changes
                    </Button>

                    {/* <Button type="submit">
                        <FloppyDisk />
                        Save changes
                    </Button> */}

                    <Button type="reset" variant="secondary">
                        Cancel
                    </Button>
                </Fieldset.Actions>
            </Fieldset>
        </Form>
    );
}
