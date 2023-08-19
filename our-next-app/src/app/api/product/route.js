import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
export async function GET(request) {
    console.log("Hey")
  revalidatePath('/')
  return NextResponse.json({ revalidated: true, now: Date.now()})
}