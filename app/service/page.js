import React from 'react';
import Service from '@/components/Service'

export const metadata = {
    title: "About Us | Anolipi",
    description: "About Us Anolipi",
  };

const page = () => {
    return (
        <div className='-mt-16 mb-16'>
            <Service />
        </div>
    );
};

export default page;