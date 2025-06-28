import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"About"} text2={"US"} />     
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt='About Us' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Fashion brands embody a unique blend of design, identity, and business, aiming to captivate consumers through clothing and accessories. These brands establish a distinctive presence by crafting a brand identity that reflects their core values and aesthetic, setting them apart in the competitive marketplace.</p>
            <p> Fashion brands navigate the evolving landscape by understanding consumer preferences, leveraging trends, and ultimately, shaping how individuals express themselves through style. </p>
            <b className='text-gray-800'>Our Mission</b>
            <p> It often focuses on providing stylish, high-quality products that empower self-expression, while also potentially addressing social or environmental impact. Ultimately, a well-defined mission statement helps build customer trust and loyalty.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-700'>“At [Brand Name], we are committed to pushing the boundaries of style and innovation. We seek to empower individuals through high-quality, sustainable fashion that respects our planet and those who inhabit it. Our mission is to make our customers feel confident, stylish, and responsible every time they wear our designs.”</p>
        </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-700'>“At [Brand Name], we are committed to pushing the boundaries of style and innovation. We seek to empower individuals through high-quality, sustainable fashion that respects our planet and those who inhabit it. Our mission is to make our customers feel confident, stylish, and responsible every time they wear our designs.”</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-700'>Exceptional service for fashion brands involves more than just selling clothes; it's about creating an immersive and personalized experience that resonates with customers. This includes offering seamless online and in-store shopping, providing expert styling advice, and building a strong brand identity through storytelling and consistent communication.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
