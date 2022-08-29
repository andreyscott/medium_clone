/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Form() {
    return (
      <>
  
        <div className=" px-4 lg:px-8  sm:mt-0">
            {/* contact our team  */}
        
          <div className=" ">
            <div className="mt-5 shadow rounded pt-10 md:mt-0 md:col-span-2">
                <div className="flex flex-col pl-2 mb-8 ">
          <p className=" mb-0 text-4xl  text-[#5e1fff] mt-0 font-light text-left ">
          Drop us a line
          </p>
</div>
              <form action="#" method="POST">
                <div className=" overflow-hidden ">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" 
                        className="block  text-[#989ba2] text-sm font-normal uppercase  mb-1 ">
                          First name:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          placeholder="John"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" 
                        className="block  text-[#989ba2] text-sm font-normal uppercase  mb-1 ">
                          Last name:
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          placeholder="Doe"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      <div className="col-span-6 ">
                        <label htmlFor="email-address"
                         className="block  text-[#989ba2] text-sm font-normal uppercase  mb-1 ">
                        Email:
                        </label>
                        <input
                          type="email"
                          required
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
   

                      <div className="col-span-6">
                        <label htmlFor="street-address" 
                        className="block text-[#989ba2] text-sm font-normal uppercase  mb-1 ">
                         Message:
                        </label>
                        <textarea
                          type="text"
                          name="text"
                          id="text"
                          autoComplete="text"
                          className="mt-1 h-32  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                    
            
                    </div>
                  </div>
                  <div className="px-4 py-3 justify-center items-center text-center bg-gray-50 sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md w-96 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    SEND EMAIL
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
  
      </>
    )
  }
  