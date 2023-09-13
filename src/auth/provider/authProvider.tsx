import React, { FC, useState } from "react";
import { Modal } from "../../components/Modal";
import { LoginForm } from "../../components/LoginForm";
import { authService } from "../authService";
import { RequestLoginData } from "../types";
import { AuthContext } from "./context";
import { useToast } from "@shadcn/components/ui/use-toast";
import { ToastAction } from "@shadcn/components/ui/toast";

interface Props {
  children: React.ReactNode;
}
export const AuthProvider: FC<Props> = ({ children }) => {
  const { toast } = useToast();
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleLogin = async (credentials: RequestLoginData) => {
    const { access_token } = await authService.login(credentials);

    if (!access_token) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Unauthorized Access (401)",
        description: "User not found",
        action: <ToastAction altText="Ok">Ok!</ToastAction>,
      });
      return setIsloggedIn(false);
    }

    setIsloggedIn(true);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading }}>
      {!isLoggedIn ? (
        <Modal
          title="Welcome to Iceberg Search! Please log in to access the system."
          description="This session is one-time only, and we do not store your data for
            added security and privacy. Please log in to access the system."
        >
          <LoginForm onLogin={handleLogin} />
        </Modal>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
