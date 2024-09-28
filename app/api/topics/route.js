import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic"; // Import Topic model
import { NextResponse } from "next/server"; // Import NextResponse

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, description });

    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    console.log("Error associated with POST:", error); // Log the error
    return NextResponse.json({ error: "Failed to create topic" }, { status: 500 }); // Return a response
  }
}

export async function GET(request){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics});
}

