"use client";
import { useForm } from "react-hook-form";
import { SignupData, signupSchema } from "@/lib/validation/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSignup = (formData: SignupData) => {
    console.log(formData);
  };

  return (
    <Card className="font-secondary" {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSignup)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                {...register("full_name")}
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
              {errors?.full_name && (
                <p className="text-red-500">{errors?.full_name?.message}</p>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...register("email")}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              {errors?.email && (
                <p className="text-red-500">{errors?.email?.message}</p>
              )}
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                {...register("password")}
                id="password"
                type="password"
                required
              />
              {errors?.password && (
                <p className="text-red-500">{errors?.password?.message}</p>
              )}
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input
                {...register("confirm_password")}
                id="confirm-password"
                type="password"
                required
              />
              {errors?.confirm_password && (
                <p className="text-red-500">
                  {errors?.confirm_password?.message}
                </p>
              )}
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">
                  {isSubmitting ? "Please wait...." : "Create Account"}
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="#">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
