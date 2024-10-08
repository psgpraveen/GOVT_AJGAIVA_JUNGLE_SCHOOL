import React from 'react'

const Index = () => {
    return (
        <div>
            <div className="p-12 h-[24rem] lg:h-[38rem] overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white my-6 font-[sans-serif]">

                <div className="z-10 relative h-full max-md:min-h-[20rem]">
                    <iframe src="https://maps.google.com/maps?q=VMVC+PC4,+Distt,+Bangalwa,+Ajgaiba+Jangal,+Uttar+Pradesh+272182,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0"
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Index
