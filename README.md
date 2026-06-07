# SEO Partners

## Visão do projeto

SEO Partners é a fundação de um SaaS de marketing digital e SEO voltado para gerenciamento de clientes e operações internas. Esta base foi preparada para desenvolvimento com arquitetura modular, utilizando o App Router do Next.js e foco em RBAC, Supabase e integração com APIs.

## Stack

- Next.js App Router
- React
- TypeScript
- Bootstrap
- Supabase
- Axios
- Zod

## Estrutura de pastas

- `src/app` - rotas e layout global do Next.js
- `src/assets/img` - imagens e ativos estáticos
- `src/components` - componentes de interface reutilizáveis
- `src/contexts` - providers de contexto do aplicativo
- `src/dashboard` - área de dashboard e domain-specific components
- `src/hooks` - hooks customizados
- `src/layouts` - layouts públicos e de dashboard
- `src/sections` - seções de página e composição de telas
- `src/services` - serviços de API e integração
- `src/styles` - estilos globais e específicos de layout
- `src/types` - definições de tipos TypeScript e RBAC
- `src/utils` - constantes, helpers e formatadores

## Padrão de desenvolvimento

1. **Manter a estrutura**: o app segue o padrão App Router do Next.js com arquivos de layout e page.
2. **Separar responsabilidades**: serviços, contextos, hooks e componentes possuem suas próprias pastas.
3. **RBAC preparado**: tipos de roles e permissions criados para futuras regras de acesso.
4. **Sem telas ainda**: esta etapa é apenas fundação, sem implementação de páginas ou rotas de dashboard.
5. **Configuração de ambiente**: use `.env.local` para variáveis reais; mantenha `.env.local.example` no repositório.

## Como usar

- Instale dependências: `npm install`
- Rode o projeto: `npm run dev`
- Popule `.env.local` com as variáveis definidas em `.env.local.example`
