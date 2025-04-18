import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p>We design and develop digital solutions that help businesses grow and stand out. Our team combines creative thinking with technical precision to bring your ideas to life—efficiently and effectively.</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
