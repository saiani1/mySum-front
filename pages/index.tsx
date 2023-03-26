import React from "react";

import AppLayout from "../components/ui/AppLayout";
import LoginForm from "../components/content/LoginForm";
import Home from "../components/content/Home";
import Menu from "../components/common/Menu";

const Main = () => {
  return (
    <AppLayout>
      <Home />
      {/* <LoginForm /> */}
      <Menu />
    </AppLayout>
  );
};

export default Main;
