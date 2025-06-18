# Changelog
Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), e este projeto adere ao [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## [Releases]

## [0.1.0] - 15-06-2025

### Added

- Estrutura inicial com Next.js 15, TypeScript e App Router
- Configuração de ambiente (`.env.local`) e ESLint
- Instalação e setup do SASS e Axios (com `baseURL` via `.env`)
- Biblioteca de ícones Lucide React

#### Layout
- Header com logo e botão de favoritos
- Template base com layout responsivo
- Redirecionamento automático da home `/` para `/list-countries`

#### Componentes de UI
- **Button**
  - Variações (primary, danger, icon)
  - Ícones (left/right), estado selecionado e badge
  - Estilizado com SASS Modules
- **Input**
  - Suporte a ícones (left/right)
  - Estilização com foco e hover

#### Páginas
- Estrutura inicial da lista de países com campo de busca
- Estrutura inicial do sistema de favoritos
- Página `/list-countries` como entrada principal

#### Estilização
- Sistema de variáveis CSS para temas e cores
- Layout responsivo com SASS Modules
- Animações suaves, sombras e foco em acessibilidade

