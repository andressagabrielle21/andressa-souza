/**
 * API Route: GET /api/repos
 *
 * Busca os repositórios públicos do GitHub no servidor (server-side),
 * usando o GITHUB_TOKEN para aumentar o rate limit de 60 para 5.000 req/hora.
 *
 * Como configurar:
 * 1. Crie um token em: https://github.com/settings/tokens (classic token, sem escopos necessários para repos públicos)
 * 2. Crie o arquivo .env.local na raiz do projeto (nunca comite esse arquivo)
 * 3. Adicione: GITHUB_TOKEN=ghp_seu_token_aqui
 * 4. Reinicie o servidor de desenvolvimento
 *
 * Importante: o .env.local NUNCA é exposto para o cliente — o token fica seguro no servidor.
 */
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const headers = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "andressa-souza-portfolio",
    };

    // Se o token estiver configurado no .env.local, usa autenticação
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      "https://api.github.com/users/andressagabrielle21/repos?sort=created&direction=desc&per_page=30",
      { headers }
    );

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      console.error("[/api/repos] GitHub API respondeu com erro:", response.status, errorBody);
      return res.status(response.status).json({
        error: "Falha ao buscar dados do GitHub.",
        message: errorBody.message || `Status ${response.status}`,
      });
    }

    const data = await response.json();

    // Cache de 1 hora no CDN (Vercel), mas permite revalidar em background
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=600");

    return res.status(200).json(data);
  } catch (err) {
    console.error("[/api/repos] Erro interno:", err);
    return res.status(500).json({
      error: "Erro interno do servidor.",
      message: err.message,
    });
  }
}
