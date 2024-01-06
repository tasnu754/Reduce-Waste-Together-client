
const Section = () => {
    return (
      <div className=" py-10">
        <div className="w-[95%] mx-auto my-4 ">
          <h2 className="text-5xl font-bold text-center py-10 text-[#1D2671]">
            Our Satisfied Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 gap-2 h-[1200px]">
            <div
              className="md:row-span-2 bg-cover box-border"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/3yW5cr6/podmatch-Cg-CH4-V4c-NGk-unsplash.jpg)",
              }}
            ></div>
            <div
              className="bg-cover box-border"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/rx5TgzV/usman-yousaf-y-IOVi-GQmj-J4-unsplash.jpg)",
              }}
            ></div>
            <div
              className=" bg-cover box-border"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/TwxFVjd/ben-den-engelsen-YUu9-UAc-OKZ4-unsplash-1.jpg)",
              }}
            ></div>
            <div
              className="bg-cover box-border "
              style={{
                backgroundImage:
                  "url( https://i.ibb.co/pj1NDFq/gift-habeshaw-KBv5d-EN3-Qt-Y-unsplash.jpg)",
              }}
            ></div>
            <div
              className="bg-cover box-border md:row-span-2"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/s6kNKwm/vicky-hladynets-uya-TT9u6-Av-I-unsplash.jpg)",
              }}
            ></div>
            <div
              className="bg-cover box-border md:col-span-2"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/gt517n9/andrea-rico-y-Hht-T7-A1-Xg-unsplash.jpg)",
                        }}

            ></div>
          </div>
        </div>
      </div>
    );
};

export default Section;