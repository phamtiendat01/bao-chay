import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from "../services/firebase/config";
import { ICONS } from "../services/utils/icon";
import AlertString from "../components/(ui)/alert_string";
const DashboardViews = () => {
  const [data, setData] = useState();
  const [curDate, setCurDate] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dbRef = ref(database);
  const date = new Date();
  useEffect(() => {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    const intervalId = setInterval(() => {
      setCurDate(
        `${day > 9 ? day : `0${day}`}/${
          month + 1 > 9 ? month + 1 : `0${month + 1}`
        }/${year} ${hour > 9 ? hour : `0${hour}`}:${
          min > 9 ? min : `0${min}`
        }:${sec > 9 ? sec : `0${sec}`}`
      );
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [date]);
  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
    const intervalFetchData = setInterval(() => {
      console.log("refetch");
      fetchData();
    }, 10000);
    return () => {
      clearInterval(intervalFetchData);
    };
  }, []);
  // console.log(data);
  return (
    <main className="container m-auto flex flex-col gap-8 px-4 md:px-8 py-48">
      <section className="w-full flex justify-end">
        <p className="text-lg font-bold">{curDate}</p>
      </section>
      {data?.map((d) => {
        return (
          <section key={d.id} className="flex flex-col gap-4">
            <div className="relative flex flex-col md:flex-row gap-2 justify-between md:items-center">
              <h1 className="capitalize text-2xl font-bold text-red-500">
                {d.key.replace("_", " ")}
              </h1>
              { d?.logs?.["Temp"]?.value && <div className="w-full md:absolute md:h-full md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex md:justify-center md:items-center justify-end">
                  <AlertString temp={d?.logs?.["Temp"]?.value} />
                </div>}
            </div>
            <article className="text-xl flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <div className="w-full flex justify-end">
                  <svg
                    className="w-6 h-6 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21.5C16.1012 21.5 19.5 18.4372 19.5 14.5714C19.5 12.1555 18.2672 9.71249 16.8732 7.70906C15.4698 5.69214 13.8515 4.04821 12.9778 3.21778C12.4263 2.69364 11.5737 2.69364 11.0222 3.21779C10.1485 4.04821 8.53016 5.69214 7.1268 7.70906C5.73282 9.71249 4.5 12.1555 4.5 14.5714C4.5 18.4372 7.8988 21.5 12 21.5Z"
                      stroke="currentColor"
                    />
                    <path
                      d="M12 18C11.4747 18 10.9546 17.8965 10.4693 17.6955C9.98396 17.4945 9.54301 17.1999 9.17157 16.8284C8.80014 16.457 8.5055 16.016 8.30448 15.5307C8.10346 15.0454 8 14.5253 8 14"
                      stroke="currentColor"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="px-4 py-8 border border-red-300 rounded-md">
                  <p className="flex justify-between items-center">
                    <span className="text-emerald-500">Độ ẩm</span>
                    <span className="text-red-500">
                      {d?.logs?.["Hum"]?.value || "Đang cập nhật..."}
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <div className="w-full flex justify-end">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13,15.28V8.5a1,1,0,0,0-2,0v6.78A2,2,0,0,0,10,17a2,2,0,0,0,4,0A2,2,0,0,0,13,15.28ZM16.5,13V5.5a4.5,4.5,0,0,0-9,0V13a6,6,0,0,0,3.21,9.83A7,7,0,0,0,12,23,6,6,0,0,0,16.5,13Zm-2,7.07a4,4,0,0,1-5.32-6,1,1,0,0,0,.3-.71V5.5a2.5,2.5,0,0,1,5,0v7.94a1,1,0,0,0,.3.71,4,4,0,0,1-.28,6Z" />
                  </svg>
                </div>
                <div className="px-4 py-8 border border-red-300 rounded-md">
                  <p className="flex justify-between items-center">
                    <span className="text-emerald-500">Nhiệt độ</span>
                    <span className="text-red-500">
                      {d?.logs?.["Temp"]?.value || "Đang cập nhật..."}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </section>
        );
      })}
    </main>
  );
};

export default DashboardViews;
