import React from 'react';
import Service from '@/components/Service'

export const metadata = {
    title: "Our Services | Anolipi",
    description: "Discover the range of digital marketing services offered by Anolipi Digital, designed to help your brand grow and succeed.",
};

const page = () => {
    return (
        <div className='-mt-16 mb-16'>
            <Service />
        </div>
    );
};

export default page;