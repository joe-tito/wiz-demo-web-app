
import { NextResponse } from 'next/server';
import dbConnect from "@/lib/db";
import Reason from "@/models/Reason";

export async function GET() {

    // console.log(process.env.MONGODB_URI);

    await dbConnect();

    const reasons = await Reason.find({});

    return NextResponse.json({ reasons: reasons });
}