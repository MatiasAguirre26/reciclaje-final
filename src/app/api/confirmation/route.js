import{headers} from "next/headers";

export async function POST(req) {
   try {
    const body = await req.json();
    const headersList = headers();
    const authorization = headersList.get('Authorization');
    console.log('authorization:', authorization)
      const response = await fetch(`${process.env.BACKEND_API_URL}/confirmation`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Authorization": authorization,
         },
         body: JSON.stringify(body),
      });

      console.log('response:', response)

      if (response.ok) {
         return response.json();
      } else {
         const errorData = await response.json();
         throw new Error(errorData.message);
      }
   } catch (error) {
      console.error("Error:", error);
      throw new Error("Hubo un problema al enviar los datos. Inténtalo de nuevo.");
   }
}