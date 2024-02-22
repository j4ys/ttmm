import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import GoogleLogo from "../../assets/icons/google.svg?react";
import TtmmInfoHoverCard from "../shared/ttmm-hovercard";

const SignInPage = () => {
  return (
    <div className="flex h-full w-screen items-center justify-center">
      <Card className="h-fit w-[350px]">
        <CardHeader>
          <CardTitle className="self-center">
            <TtmmInfoHoverCard>TTMM</TtmmInfoHoverCard>
          </CardTitle>
          <CardDescription className="self-center">
            Sign in with Goolgle to start splitting bills
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <Button>
              <GoogleLogo className="fill-secondary mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end text-center text-sm italic">
          By signing in you agree to the terms of the TTMM 😜
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;
