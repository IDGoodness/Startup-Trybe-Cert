import { useCallback, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import logo1 from "../../assets/startuptribelogo3.png";
import logo2 from "../../assets/startuptribelogo2.png";
import signature from "../../assets/signature.png";

const Course1 = () => {
  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-certificate.png";
        link.href = dataUrl;
        link.click();
      })
      .catch(() => {
        alert(
          "An error occurred while generating your certificate. Please try again."
        );
      });
  }, [ref]);

  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    setFormData({
      name: storedName || "",
    });
  }, []);

  return (
    <>
      <div className="min-w-[1000px] flex justify-center items-center min-h-screen">
        <div
          className="flex flex-col justify-center items-center bg-white relative"
        >
          {/* <img src={watermark} alt="genes" className='absolute w-[1000px] -mt-52 h-[800px] opacity-30 z-0 ' /> */}
          <div ref={ref} className="relative bg-white w-[1000px] h-[600px] m-10 border border-blue-100 shadow-lg shadow-blue-100 flex overflow-hidden">
            <div className="flex flex-col mx-auto z-10 ">
              <div className="flex text-center mx-auto mt-5 ">
                <p className="flex flex-row ">
                  <img src={logo1} alt="logo" className="w-[60px]" />
                  <img src={logo2} alt="" className="w-[100px] " />
                </p>
              </div>

              <div className="text-center mx-auto">
                <p className="uppercase font-semibold text-7xl text-blue-800">
                  certificate
                </p>
                <p className="uppercase text-blue-800 italic text-4xl ">
                  of participation
                </p>
                <p className="text-center text-lg font-bold mt-2">
                  This Certificate Is Proudly Presented to
                </p>
              </div>

              <div className="text-center mx-auto pt-10 pb-10 w-[1000px] h-[200px]">
                <p className="text-4xl font-semibold border-b-2 mx-[200px] mb-1 border-blue-800 ">
                  {formData.name}
                </p>
                <p className="mx-28 pt-5 text-md ">
                  for successfully participating in the fully funded masterclass
                  on: CRITICAL AND INNOVATIVE THINKING FOR PERSONAL AND
                  ORGANISATIONAL GROWTH. This program provided participants with
                  valuable knowledge and insight into applying critical and
                  innovative thinking skills to enhance problem-solving,
                  creativity, decision-making, and overall personal and
                  organisational development.
                </p>
              </div>

              <div className="flex justify-between mx-28">
                <div className="">
                  <p className="border-b border-black w-[140px] mt-20">
                    Date: 08 / 11 / 2025
                  </p>
                </div>

                <div className="-mt-5">
                  <p className="border-b border-black w-52">
                    <img
                      src={signature}
                      alt="signature"
                      className="w-[200px] h-[150px] -mb-12"
                    />
                  </p>
                  <p className="text-lg text-center font-semibold">
                    Olaleke Francis
                  </p>
                  <p className="text-sm text-center font-medium">
                    Founder/CEO Startup Trybe
                  </p>
                </div>
              </div>

              {/* <div className="w-[150px] absolute top-8 left-14">
                  <img src={award1} alt="award" />
              </div> */}
            </div>

            <div>
              <img
                src={logo1}
                alt="border"
                className="w-[1000px] h-auto absolute -top-[700px] -left-[750px] z-0"
              />
              <img
                src={logo1}
                alt="border"
                className="w-[1000px] h-auto absolute -bottom-[700px] -left-[750px] z-0"
              />
              <img
                src={logo1}
                alt="border"
                className="w-[1000px] h-auto absolute -top-[700px] -right-[750px] z-0"
              />
              <img
                src={logo1}
                alt="border"
                className="w-[1000px] h-auto absolute -bottom-[700px] -right-[750px] z-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center -mt-9">
        <button
          className="bg-blue-600 p-2 rounded-xl hover:bg-bluex-700 shadow-lg shadow-blue-100 cursor-pointer text-white z-10"
          onClick={onButtonClick}
        >
          Download Certificate
        </button>
      </div>
    </>
  );
};

export default Course1;
