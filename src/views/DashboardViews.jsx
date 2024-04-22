import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from "../services/firebase/config";
import { ICONS } from "../services/utils/icon";
const DashboardViews = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dbRef = ref(database);
  useEffect(() => {
    setIsLoading(true);
    get(child(dbRef, `devices`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const devicesArrayWithKeys = Object.entries(snapshot?.val()).map(
            ([key, value]) => ({ key, ...value })
          );
          setData(devicesArrayWithKeys);
          setIsLoading(false);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(data);
  return (
    <main className="container m-auto flex flex-col gap-8 px-4 md:px-8 py-48">
      {data?.map((d) => {
        return (
          <section key={d.id} className="flex flex-col gap-4">
            <div className="relative flex justify-between items-center">
              <h1 className="capitalize text-2xl font-bold text-red-500">
                {d.key.replace("_", " ")}
              </h1>
            {d?.logs?.status === 0 ? <div className="text-blue-500 bell-icon" dangerouslySetInnerHTML={{__html: ICONS.BELL_ICON}}></div> : <div className="text-blue-500" dangerouslySetInnerHTML={{__html: ICONS.WIFI_ICON}}></div>}
            </div>
            <article className="text-xl flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="w-full md:w-1/2 px-4 py-8 border border-red-300 rounded-md">
                <p className="flex justify-between items-center">
                  <span className="text-emerald-500">Độ ẩm</span>
                  <span className="text-red-500">
                    {d?.logs?.["Do Am"]?.value || "Đang cập nhật..."}
                  </span>
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4 py-8 border border-red-300 rounded-md">
                <p className="flex justify-between items-center">
                  <span className="text-emerald-500">Nhiệt độ</span>
                  <span className="text-red-500">
                    {d?.logs?.["Temp"]?.value || "Đang cập nhật..."}
                  </span>
                </p>
              </div>
            </article>
          </section>
        );
      })}
    </main>
  );
};

export default DashboardViews;
