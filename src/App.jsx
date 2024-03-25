import { Suspense, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/common/header";
import { Outlet } from "react-router-dom";
import Loading from "./components/(ui)/loading";
import { database } from "./services/firebase/config";
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Outlet />
    </Suspense>
  );
}

export default App;
