export async function GET(req: Request) {
    const {method} = req;

    return new Response(JSON.stringify("you are using "+method), {
      status: 200,
    });
  }
  
  export async function POST(req: Request) {
    const {name} = await req.json();
    return new Response(JSON.stringify("form submitted " + name), {
      status: 200,
    });
  }