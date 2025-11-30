import React from 'react';
import Sidebar from '../components/Sidebar';

const Home = ({
                  children,
                  topPanel,
                  bottomPanel,
                  rightPanel
              }) => {
    return (
        <div className="w-full font-apercu-pro bg-white grid grid-cols-1 lg:grid-cols-[auto_1fr] overflow-hidden">
            <div className="lg:block">
                <Sidebar />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] min-w-0 max-w-full">

                <div className="flex flex-col min-w-0 max-w-full p-2 lg:p-4">


                    <div className="block lg:hidden mb-4">
                        {topPanel}
                    </div>


                    <div className="flex-1 min-w-0 max-w-full overflow-hidden">
                        {children}
                    </div>


                    <div className="block lg:hidden space-y-4 mt-4">
                        {bottomPanel}
                    </div>
                </div>

                <div className="hidden xl:flex flex-col bg-white py-4 px-5 space-y-4  ">
                    {rightPanel}
                </div>
            </div>
        </div>
    );
};

export default Home;