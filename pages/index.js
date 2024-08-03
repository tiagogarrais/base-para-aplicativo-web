import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <h1>Base para aplicativo Web</h1>
      <p>
        Com esta instalação básica você pode construir seus aplicativos Web com
        páginas e rotas de API públicas e/ou que só podem ser acessadas após a
        identificação por meio de login.
      </p>
      <p>
        Esta é uma página pública e pode ser acessada por qualquer pessoa, sem
        restrições.
      </p>
      <p>
        <Link href="/acesso-com-login">
          Clique aqui para acessar a área protegida
        </Link>
      </p>
      <p>
        <Link href="/api/restrito">
          Clique aqui para acessar a API protegida
        </Link>
      </p>
    </>
  );
}
