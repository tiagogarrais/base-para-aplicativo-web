import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function AcessoComLogin() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Você está autenticado com o seguinte e-mail: {session.user.email} <br />
        <button onClick={() => signOut()}>Desconectar</button>
        <p>
          <Link href="/">Voltar para a página inicial</Link>
        </p>
      </>
    );
  }
  return (
    <>
      Você não está autenticado <br />
      <button onClick={() => signIn()}>Entrar</button>
      <br />
      <p>
        <Link href="/">Voltar para a página inicial</Link>
      </p>
    </>
  );
}
