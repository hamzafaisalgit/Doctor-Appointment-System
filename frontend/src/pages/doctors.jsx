import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        doctors.filter(
          (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase(),
        ),
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors speciality</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Speciality Filter Section */}
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          {specialities.map((item, index) => (
            <p
              key={index}
              onClick={() =>
                speciality === item
                  ? navigate("/Doctors")
                  : navigate(`/Doctors/${item}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer
                ${
                  !speciality
                    ? "bg-indigo-100 text-black"
                    : speciality === item
                      ? "bg-indigo-100 text-black"
                      : "bg-white text-gray-600"
                }`}
            >
              {item}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 sm:px-0">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={item.image} alt="" />

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>

                <p className="text-gray-800 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
