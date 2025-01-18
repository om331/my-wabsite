// app/api/slider/route.ts
export async function GET() {

  const arr = ["f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg", process.env.NEXT_PUBLIC_DB_HOST];


  return new Response(JSON.stringify(arr), {
    status: 200,
    
  });
}




  
