import React from "react";

import AppLayout from "../components/ui/AppLayout";
import LoginForm from "../components/content/LoginForm";
import Home from "../components/content/Home";
import Menu from "../components/common/Menu";
import MyPage from "../components/content/MyPage";
import AddPost from "../components/content/AddPost";
import Statistics from "../components/content/Statistics";
import Setting from "../components/content/Setting";

const Main = () => {
  return (
    <AppLayout>
      {/* <Home /> */}
      {/* <LoginForm /> */}
      {/* <AddPost /> */}
      {/* <MyPage /> */}
      {/* <Statistics /> */}
      <Setting />
      <Menu />
    </AppLayout>
  );
};

export default Main;
