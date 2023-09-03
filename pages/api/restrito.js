import { getServerSession } from "next-auth/next"
import { authOptions } from "./[...nextauth].js"

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    res.send({
      content:
        "Este conteúdo é protegido. Você está logado e por isso tem acesso.",
    })
  } else {
    res.send({
      error: "Você precisa estar logado para ver o conteúdo desta página.",
    })
  }
}