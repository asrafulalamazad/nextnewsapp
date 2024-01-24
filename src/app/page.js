import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import Hero from "@/components/Hero";

async function getData(){
    let Slider= (await (await fetch(`${process.env.HOST}/api/news/type?type=Slider`)).json())['data']
    let Featured= (await (await fetch(`${process.env.HOST}/api/news/type?type=Featured`)).json())['data']
    let Popular = (await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json())['data']
    let Latest = (await (await fetch(`${process.env.HOST}/api/news/latest`)).json())['data']
    return {Slider:Slider,Featured:Featured,Popular:Popular,Latest:Latest}
}

const Page =async () => {
    const data = await getData();


    return (
        <PlainLayout>
          <Hero featured={data['Featured']} slider={data['Slider']}  />
        </PlainLayout>
    );
};

export default Page;