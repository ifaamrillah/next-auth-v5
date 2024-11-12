import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { BackButton } from "./back-button";

export const AuthErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oops! Something went wrong!" />
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive size-10" />
      </CardContent>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};
