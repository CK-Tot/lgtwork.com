import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT US' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Helping businesses evolve with smart digital tools since 2021' />
              <p className='desc-p'>LgtWork was founded on the principle that digital solutions should be as efficient as they are innovative. Our name, a nod to “light work,” reflects our commitment to delivering fast, high-quality tech solutions that empower businesses to thrive in a rapidly evolving digital landscape. Every element of our brand—from our glowing logo to our forward-thinking messaging—is designed to inspire confidence and signal a new era of tech innovation.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>3+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>30+</h1>
                  <h3>Successful cases</h3>
                </div>
               
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.svg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>To empower businesses by delivering agile, innovative, and high-quality digital solutions that turn ideas into scalable realities.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
