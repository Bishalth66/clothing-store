"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/authClient";
import { loginSchema, LoginData } from "@/lib/validation/login";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
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

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router =useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onLogin = async(formData: LoginData) => {
    
   const {data,error} = await authClient.signIn.email({
    email:formData.email,
    password:formData.password,
   });
   if(!error) router.push('/dashboard');
  };

  return (
    <div
      className={cn("flex flex-col gap-6 font-secondary", className)}
      {...props}
    >
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onLogin)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              {errors?.email && (
                <p className="text-red-500">{errors?.email?.message}</p>
              )}
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                  required
                />
                {errors?.password && (
                  <p className="text-red-500">{errors?.password?.message}</p>
                )}
              </Field>
              <Field>
                <Button type="submit">
                  {isSubmitting ? "Please wait..." : "Login"}
                </Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
