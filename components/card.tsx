import React from 'react'

//create a type for href 

interface Props {
    href: string;
    children: React.ReactNode;
}

const callouts = [
    {
      date: 'JULY 4, 2016',
      name: 'Concept design of Trigan Metaverse has begun!',
      imageSrc: 'https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b4fc4536e470d71277705b_triganconcept-03.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.',
          href: '#',
    },
    {
        date: 'JULY 4, 2016',
        name: ' Our team is growing day by day',
        imageSrc: 'https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b4fd423eba995c7f94c92f_Image3.png',
        imageAlt: '.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.',
            href: '#',
      },
      {
        date: 'JULY 4, 2016',
        name: '  How to show and hide content with Webflow click interactions',
        imageSrc: 'https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b42d69bf74cfabd920f5da_Photo-5.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.',
            href: '#',
      },
      {
        date: 'JULY 4, 2016',
        name: 'Writing funny: how to improve your website UX with humor',
        imageSrc: 'https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b42d69bf74cf861c20f5de_Photo-3.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.',
            href: '#',
      },
      {
        date: 'JULY 4, 2016',
        name: '     9 landing page design tips that improve UX and conversions',
        imageSrc: 'https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b4fd723eba99858494c977_Image2.png',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.',
            href: '#',
      },
      {
        date: 'JULY 4, 2016',
        name: 'Concept design of Trigan Metaverse has begun!',
        imageSrc: 'https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b4fc4536e470d71277705b_triganconcept-03.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.',
            href: '#',
      },
  ]

// export const Card = () => {

//   return (
    // create a function that pass  the data type of href to the props
    const Card = ({ href, children }: Props) => {
        return (
   <>
       <div className="mt-6 mb-20 pb-12 space-y-12 lg:space-y-6  lg:grid lg:grid-cols-3 lg:gap-x-6">
          {callouts.map((callout) => (
<div key={callout.name}  className="overflow-hidden shadow-lg rounded-sm h-90 w-96  cursor-pointer m-auto">
    {/* a  */}
    <div
    //  href="#" 
    className="w-full block overflow-hidden group-hover:opacity-7 h-full">
        <div className=" hover:opacity-50">
        <img alt={callout.imageAlt} src={callout.imageSrc} className="max-h-40 w-full object-cover"/>
     </div>
        <div className="bg-white dark:bg-gray-800 w-full px-1 py-3">
            {/* //create date here */}
            <div className=" mb-2 text-[#bdbdbd] text-xs uppercase">{callout.date}</div>
            <p className=" text-[#5e1fff] mb-4 text-base block font-medium">
            {/* Concept design of Trigan Metaverse has begun! */}
            {callout.name}
            </p>
       
            <p className=" text-black dark:text-gray-300 text-sm ">
                 {callout.description}
            </p>
        </div>
    </div>
</div>
            ))}
</div>

    <div className="mt-6  pb-6 space-y-12 lg:space-y-6  lg:grid lg:grid-cols-3 lg:gap-x-6">
          {callouts.map((callout) => (
<div key={callout.name}  className="overflow-hidden shadow-lg rounded-sm h-90 w-96  cursor-pointer m-auto">
    {/* a  */}
    <div  className="w-full block overflow-hidden group-hover:opacity-7 h-full">
        <div className=" hover:opacity-50">
        <img alt={callout.imageAlt} src={callout.imageSrc} className="max-h-40 w-full object-cover"/>
     </div>
        <div className="bg-white dark:bg-gray-800 w-full px-1 py-3">
            {/* //create date here */}
            <div className=" mb-2 text-[#bdbdbd] text-xs uppercase">{callout.date}</div>
            <p className=" text-[#5e1fff] mb-4 text-base block font-medium">
            {/* Concept design of Trigan Metaverse has begun! */}
            {callout.name}
            </p>
       
            <p className=" text-black dark:text-gray-300 text-sm ">
                {callout.description}
            </p>
        </div>
    </div>
</div>
            ))}
</div>
</>

  )
}