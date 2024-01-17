import {headers} from "next/headers";
import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";


export async function GET(req, res){
    try{
        let headerList = headers();
        let id = parseInt(headerList.get("id"))


        const prisma=new PrismaClient();
        const result = await prisma.comments.findMany({
            where:{userID: id},
            include:{
                news_list:{select:{
                    title:true
                    }}
            }
        })



        return NextResponse.json({status:"success",data:result})

    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})

    }

}

export async function POST(req, res){
    try {
        let headerList = headers();
        let id = parseInt(headerList.get("id"))

        const reqBody= await req.json();
        reqBody.userID=id;

        const prisma=new PrismaClient();
        const result = await prisma.comments.create({
            data:reqBody
        })
        return  NextResponse.json({status:"success",data:result})

    }
    catch (e) {

        return  NextResponse.json({status:"fail",data:e})

    }
}


export async function DELETE(req,res){
    try {
        let headerList = headers();
        let userID = parseInt(headerList.get('id'))

        let reqBody=await req.json();

        const prisma=new PrismaClient();
        const result = await prisma.comments.deleteMany({
            where :{
                AND:[
                    {userID: userID},
                    {id:parseInt(reqBody['id'])}
                ]
            }
        })




        return  NextResponse.json({status:"success",data:result})

    }
    catch (e) {

        return  NextResponse.json({status:"fail",data:e})

    }
}