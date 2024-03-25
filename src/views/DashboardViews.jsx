import React, { useEffect, useMemo, useState } from "react";
import StatsBox from "../components/(ui)/statsbox";
import Chart from "../components/(ui)/chart";
import {
  MdInsertChartOutlined,
  MdOutlineVideoCameraBack,
} from "react-icons/md";
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from "../services/firebase/config";
const DashboardViews = () => {
  const [data, setData] = useState();
  const [dataCurDay, setDataCurDay] = useState();
  const dbRef = ref(database);
  useEffect(() => {
    get(child(dbRef, `devices`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          const devicesArrayWithKeys = Object.entries(snapshot?.val()).map(
            ([key, value]) => ({ key, ...value })
          );

          setData(devicesArrayWithKeys);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const renderedData = useMemo(() => {
    return (
      data?.length > 0 &&
      data?.map((d) => {
        return <StatsBox key={d.id} logs={d.logs} name={d.name} />;
      })
    );
  }, [data]);
  const optionsData = useMemo(() => {
    return (
      data?.length > 0 &&
      data?.map((d) => {
        return (
          <option className="p-2" key={d.id} value={d.id}>
            {d.name || d.key}
          </option>
        );
      })
    );
  }, [data]);
  return (
    <main className="flex flex-col gap-[48px] items-center px-4 py-32">
      <section className="container flex justify-between items-center">
        <select
          name="currDay"
          id="currDay"
          className="p-2 rounded-md text-gray-700 cursor-pointer outline-none"
        >
          {optionsData}
        </select>
        <p className="text-end text-2xl font-bold">03/23/2024 : 16:00</p>
      </section>
      <section className="container grid grid-cols-4 gap-[24px]">
        {renderedData}
      </section>
      <section className="container flex flex-col gap-[24px]">
        <div className="flex items-center gap-[24px]">
          <button
            className="relative py-2 flex items-center gap-2"
            // onClick={() => setCurrData('data')}
          >
            <MdInsertChartOutlined />
            <p>Biểu đồ dữ liệu</p>
            <span
              style={{ transition: "width 0.2s ease" }}
              className={`absolute bottom-0 w-ful h-[2px] bg-orange-500`}
            ></span>
          </button>
          {/* <button
            className='relative py-2 flex items-center gap-2'
            onClick={() => setCurrData('camera')}
          >
            <MdOutlineVideoCameraBack />
            <p>Camera</p>
            <span
              style={{ transition: 'width 0.2s ease' }}
              className={`absolute bottom-0 ${
                currData === 'camera' ? 'w-full' : 'w-0'
              } h-[2px] bg-orange-500`}
            ></span>
          </button> */}
        </div>
        <div className="bg-gray-700 px-4 py-8 rounded-xl h-max overflow-hidden">
          {data?.length > 0 && <Chart data={data} />}
        </div>
      </section>
    </main>
  );
};

export default DashboardViews;
