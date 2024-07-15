import connect from '@/app/lib/db';
import { NextResponse } from 'next/server';
import Code from '@/app/lib/models/codes';
export const GET = async () => {
  try {
    //connecting to mongodb atlas
    await connect();
    //fetching codes from mongodb
    const Codes = await Code.find(); 
    return new NextResponse(JSON.stringify(Codes), { status: 200 }); // Return Codes as JSON
  } catch (error) {
    console.error('Error fetching Codes:', error.message);
    return new NextResponse(`Error in fetching Codes: ${error.message}`, { status: 500 });
  }
};

export const POST = async (request) => {
    try {
      //connect to mongodb atlas 
      await connect();
  
      // Parse the data
      const body = await request.json();
  
      // Create a new Code document 
      const newCode = new Code({
        link: body.link,
        date: body.date,
        difficulty: body.difficulty,
        topics: body.topics
      });
  
      // Saving the new code in the database
      await newCode.save();
  
      return new NextResponse(JSON.stringify({ message: 'Code created', Code: newCode }), { status: 200 });
    } catch (error) {
      console.error('Error creating Code:', error.message);
      return new NextResponse(`Error creating Code: ${error.message}`, { status: 500 });
    }
  };