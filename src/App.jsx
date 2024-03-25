import { Suspense, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/common/header";
import { Outlet } from "react-router-dom";
import Loading from "./components/(ui)/loading";
import { db } from "./services/firebase/config";
import { collection, getDocs } from "firebase/firestore/lite"; // Import from firestore/lite
function App() {
  // const { t, i18n } = useTranslation("translation");
  // const handleChangeLang = useCallback(
  //   (lang) => {
  //     i18n.changeLanguage(lang);
  //     localStorage.setItem("bao-chay", lang);
  //   },
  //   [i18n]
  // );
  useEffect(() => {
    async function getDevices() {
      try {
        const devicesCol = collection(db, 'devices');
        const deviceSnapshot = await getDocs(devicesCol);
        const devicesList = deviceSnapshot.docs.map(doc => doc.data());
        console.log(devicesList);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    }
    getDevices();
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Outlet />
    </Suspense>
  );
}

export default App;
