import React from 'react'

export default function SideBar() {
    const menuItems = [
        { name: "About", link: "/about" },
        { name: "Projects", link: "/projects" },
        {name: "Skills", link: "/skills" },
        {name: "Education", link: "/edu" },
        { name: "Contact", link: "/contact" },
    ];
  return (
    <div className="flex flex-col items-left justify-start bg-blue-600 h-screen w-fit py-6 pl-8 pr-15 fixed top-0 left-0 shadow-blue-900 shadow-xl rounded-lg">
<div className="uppercase font-bold py-6 text-white text-lg">Ettu Habeeb</div>
{menuItems.map((item, index) => (
    <a key={index} href={item.link} className="text-white uppercase py-2 hover:text-blue-300">
        {item.name}
    </a>
))}
<div className="flex-1"></div>
<button className="bg-white text-blue-600 hover:text-blue-700 py-2 px-12 font-bold uppercase hover:cursor-pointer">
    hire me 
</button>
    </div>
  )
}
