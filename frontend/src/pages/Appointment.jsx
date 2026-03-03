import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../componenets/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currency } = useContext(AppContext);
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTIme] = useState("");

  const getAvaialableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentdate = new Date(today);
      currentdate.setDate(today.getDate() + i);

      // setting end time of the Date
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting Hours
      if (today.getDate() === currentdate.getDate()) {
        currentdate.setHours(
          currentdate.getHours() > 10 ? currentdate.getHours() + 1 : 10,
        );
        currentdate.setMinutes(currentdate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentdate.setHours(10);
        currentdate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentdate < endTime) {
        let formatted = currentdate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add slot to array
        timeSlots.push({
          datetime: new Date(currentdate),
          time: formatted,
        });

        currentdate.setMinutes(currentdate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    const foundDoc = doctors.find((doc) => doc._id === docId);
    setDocInfo(foundDoc);
  }, [doctors, docId]);

  useEffect(() => {
    getAvaialableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log();
  }, [docSlots]);

  if (!docInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="prim w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt=""
          />
        </div>
        <div className=" flex-1 border border-gray-400 rounded-lg p-8 py-7  bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>

          <div>
            <p className="flex items-center gap-1 text-sm font-medium mt-3 text-gray-900">
              About
              <img src={assets.info_icon} alt="" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">
              {docInfo.about}
            </p>
          </div>
          <p className="text-gray-500 mt-4 font-medium">
            Appointment fee:{" "}
            <span className="text-gray-600">
              {currency}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>

      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {docSlots?.length > 0 &&
            docSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "prim text-white" : "border border-gray-200"}`}
              >
                <p className="">
                  {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                </p>
                <p>{item[0] && item[0].datetime.getDay()}</p>
              </div>
            ))}
        </div>
        <div className="flex items-center gap-3 overflow-x-scroll w-full mt-4">
          {docSlots.length > 0 &&
            docSlots[slotIndex].map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTIme(item.time)}
                className={`text-sm font-light shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "prim white"
                    : "text-gray-400 border border-gray-300"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        <button className="prim white text-sm font-light px-14 py-3 rounded-full my-6 cursor-pointer">
          Book an Appointment
        </button>
      </div>

      {/* Related Doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;
