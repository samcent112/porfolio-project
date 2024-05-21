import Layout from "../components/Layout";
import { data } from "../data/data";
/*
  File name: Services.jsx
  Student Name: Festus Asiyanbi
  Student ID: 301270589
*/
const Services = () => {
  return (
    <Layout>
      <section id="services" className="services w-full flex flex-col items-center justify-center">
      <h2 className="section-title font-bold text-[35px] mb-10">Services</h2>
      <div className="container w-[70%] flex items-start justify-center flex-grow gap-x-10">
        {data.services.map((service, index) => (
        <div key={index} className="service w-[30%] outline outline-[#dddadd] outline-1 h-[220px] p-2 flex flex-col gap-y-5 rounded-lg shadow-lg shadow-[#000000] items-center">
          <h3 className="service-title font-bold text-regular_brown">{service.service_title}</h3>
          <p className="service-description text-[12px]">{service.description}</p>
        </div>
        ))}
      </div>
    </section>
    </Layout>
  );
};

export default Services;
