import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <div key={service.id}>
          <img src={service.imgURL} alt={service.label} width={100} height={100}/>
          <p className="text-slate-gray text-sm">{service.label}</p>
          <p className="text-slate-gray text-sm">{service.subtext}</p>
        </div>
      ))}
    </section>
  )
}

export default Services