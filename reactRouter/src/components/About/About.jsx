import React from "react";

function About(){
    return(
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image" />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">React development is carried out by passionate developers</h2>
                        <p className="mt-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum quisquam maxime obcaecati laudantium maiores at ad quia blanditiis, accusantium modi rem ipsum quaerat tenetur, veritatis odio veniam nulla quasi!</p>
                        <p className="mt-4 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt earum fugit facilis accusantium ipsa! Deserunt accusantium eos tempore dolor quibusdam, voluptatum exercitationem eius voluptate optio aliquid ut excepturi illo corporis?</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About