import React from 'react'
import Airlift from "../assets/Airlift-A.jpeg";
import Tel from "../assets/Telenor.jpeg"
import trax from "../assets/Trax.jpeg"
import IMF from "../assets/IMF.jpeg"
import Dbank from "../assets/Dbank.png"
import DGYR from "../assets/Dastgyr.jpeg"
import OLI from "../assets/OLI.jpeg"
import INA from "../assets/INA.png"
import TLI from "../assets/TLI.jpeg"
const Blog = () => {
    const techs=[
        {
            id:1,
            src:Dbank,
            title: "Pakistan's Dbank secures backing of Sequioa in $17.6m seed round",
            style : "shadow-purple-500",
            date:'28 July, 2022',
            pd:'mt-6',
            download:"../DBA.pdf"
        },

        {
            id:2,
            src:IMF,
            title: "IMF cuts global growth outlook amid US, China slowdowns",
            style : "shadow-blue-500",
            date:'26 July, 2022',
            pd:'mt-6',
            download:"../IMF.pdf"
            
        },
        {
        
            id:3,
            src:Airlift,
            title: "Story of Airlift and future of E-commerce in Pakistan",
            style : "shadow-red-800",
            pd: "mt-11",
            date:'12 July, 2022',
            download:"../ALFT.pdf"

        },

        {
            id:4,
            src:Tel,
            title: "Telenor Impairment: Has the group lost hope?",
            style : "shadow-blue-800",
            pd: 'mt-11', 
            date: '15 June, 2022',
            download:"../TEL.pdf"
        },

        {
            id:5,
            src:DGYR,
            title: "B2B marketplace Dastgyr announces $37m Series-A raise as it widens services beyond kiryana stores",
            style : "shadow-yellow-400",
            date:'14 June, 2022',
            download:"../DSTG.pdf"
        },
        {
            id:6,
            src:trax,
            title: "Logistics company Trax lays off employees as costs rise, volumes dip",
            style : "shadow-green-800",
            pd: 'mt-5',
            date:'10 June, 2022',
            download:"../TRAX.pdf"
        },

       

        

       
        {
        id:7,
        src:OLI,
        title: "Global crude oil prices rise up to 5.27pc for fourth week",
        style : "shadow-blue-400",
        date:'16 Jan, 2022',
        pd:'mt-7',
        download:"../OIL.pdf"
    },

    {
        id:8,
        src:INA,
        title: "Indian court halts Amazon, Future arbitration in blow to US giant",
        style : "shadow-red-800",
        date:"5 Jan, 2022",
        pd:'mt-1',
        download:"../INDA.pdf"

    },

    {
        id:9,
        src:TLI,
        title: "Turkish lira slides almost 8pc after intervention-driven surge",
        style : "shadow-pink-400",
        date:'27 Dec, 2021',
        pd:'mt-1',
        download:"../TURKL.pdf"
    },
    ]
  return (

    <div name = "Blog" id="Blog" className='bg-gradient-to-r from-red-400 to-pink-300 w-full max-h-full'>
        <div className='max-w-screen-md mx-auto p-4 flex flex-col justify-center w-full h-full text-black'>
            <div >
                <p className='flex flex-row justify-center items-center text-7xl font-bold border-b-4 border-yellow-500'>
                    Economic Journal
                </p>
                <p className='text-white py-4'>
                    
                </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({id, src, title, style, pd, date,download}) =>(
                        
                        
                        <div key={id}
                        className={`shadow-md  hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} 
                    alt="" 
                    size={30}
                    className='flex flex-row justify-center items-center w-26 h-44 mx-auto'/>
                    
                    
                    
                        <p className=' mt-6 '>{title}</p>
                        
                        <button className={` ${pd} text-white rounded-md font-bold bg-gray-800 mx-auto`}>
                            <a href={`${download}`}  download={true} >
Download
                            </a>
                            
                        </button>
                        <div className='flex flex-row items-end justify-end text-xs px-2 py-1'>
                            {date}
                        </div>
                    
                        </div>
                        
                    
                        


                    
                    
     
                        
                        
                        
                        
                        
                        
                        
                        ))}
                
                        


                    
                    
                
               
            </div>
        </div>
    </div>
  );
};

export default Blog