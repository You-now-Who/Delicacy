import React from 'react';

const Home = () => {
    return (
      <>
        <div className="flex w-full flex-col items-center justify-center rounded-lg pt-8 pb-5">
          {" "}
          <div>
            {" "}
            {/* <svg
              xmlns="https://icons8.com/icon/cA9NDFTFTrfI/cheesecake"
              className="h-8 w-8 fill-current text-gray-500"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M0 3.75A.75.75 0 01.75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.496 4.496 0 0115.75 3h7.5a.75.75 0 01.75.75v15.063a.75.75 0 01-.755.75l-7.682-.052a3 3 0 00-2.142.878l-.89.891a.75.75 0 01-1.061 0l-.902-.901a3 3 0 00-2.121-.879H.75a.75.75 0 01-.75-.75v-15zm11.247 3.747a3 3 0 00-3-2.997H1.5V18h6.947a4.5 4.5 0 012.803.98l-.003-11.483zm1.503 11.485V7.5a3 3 0 013-3h6.75v13.558l-6.927-.047a4.5 4.5 0 00-2.823.971z"
              ></path>
            </svg> */}
          </div>{" "}
          <div className="mt-8 text-center">
            {" "}
            <h1 className="text-5xl font-bold">Delicacy</h1>{" "}
            <p className="mx-auto mt-6 text-xl text-gray-500">
              An application to help you make better food choices.
            </p>{" "}
          </div>{" "}
          <button className="mt-8 block rounded-lg  bg-green-600 py-1.5 px-4 font-medium text-white transition-colors hover:bg-green-700 active:bg-green-800 disabled:opacity-50">
            Get started
          </button>{" "}
        </div>

        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-5">
      <div className="p-4 lg:w-1/3">

        {/* Add an image of food */}

        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          
          <img className="w-full mb-5 rounded-md" src="https://media.discordapp.net/attachments/941363255874584617/1066635741511286794/photo-1512621776951-a57141f2eefd.png" alt="Mountain"/>

          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Make healthier food choices</h1>
          <p className="leading-relaxed mb-3"><strong>Delicacy</strong> allows you to make healthier and better food choices for yourself and your loved ones to stay fit</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLineCap="round" strokeLineJoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          
          <img className="w-full mb-5 rounded-md" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg" alt="Mountain"/>

          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Don't miss out on taste!</h1>
          <p className="leading-relaxed mb-3">Who said healthy food had to taste boring? With <strong>Delicacy</strong>, never make a meal boring again!</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLineCap="round" strokeLineJoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

          <img className="w-full mb-5 rounded-md" src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-yetsom-beyaynetu.jpg" alt="Mountain"/>            
          
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Explore new recipes.</h1>
          <p className="leading-relaxed mb-3">Don't be stuck to the same old food! With <strong>Delicacy</strong>, explore different cunsines and food brought to you from all around the world.</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLineCap="round" strokeLineJoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    );
}

export default Home;
