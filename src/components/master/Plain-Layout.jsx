import React from 'react';
import AppNavBar from "@/components/master/AppNavBar";
import Footer from "@/components/master/Footer";

// async function getData(){
//     let socials= (await (await fetch(`${process.env.HOST}/api/social`)).json())['data']
//     let categories=(await (await fetch(`${process.env.HOST}/api/categories`)).json())['data']
//
//     return {socials:socials,categories: categories }
// }
async function getData() {
    let socials= (await (await fetch(`${process.env.HOST}/api/social`)).json())['data']
    let categories=(await (await fetch(`${process.env.HOST}/api/category`)).json())['data']
    return {socials:socials,categories:categories}
}



const PlainLayout = async (props) => {
    const data = await getData();
    return (
        <>
            <AppNavBar data={data} />
            {props.children}
            <Footer data={data}/>

        </>
    );
};

export default PlainLayout;