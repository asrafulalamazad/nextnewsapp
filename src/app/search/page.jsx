import NewsList from "@/components/NewsList";
import PopularList from "@/components/PopularList";
import PlainLayout from "@/components/master/Plain-Layout";


async function getData(keyword){
    let Popular = (await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json())['data']
    let News= (await (await fetch(`${process.env.HOST}/api/news/search?keyword=${keyword}`)).json())['data']
    return {News:News,Popular:Popular}
}

const Page = async (props) => {
    let keyword = props.searchParams['keyword']
    const data = await getData(keyword)

    return (

        <PlainLayout>
            <div className="container mt-5">
                <hr className=""/>
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
                        <NewsList latest={data['News']}/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
                        <PopularList popular={data['Popular']}/>
                    </div>
                </div>
            </div>



        </PlainLayout>
    );
};
export default Page;