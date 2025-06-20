# Changelog
Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), e este projeto adere ao [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## [Releases]

## [0.1.0]

### Added

- Estrutura inicial com Next.js 15, TypeScript e App Router
- Configuração de ambiente (`.env.local`) e ESLint
- Instalação e setup do SASS e Axios (com `baseURL` via `.env`)
- Biblioteca de ícones Lucide React

#### Layout
- Header com logo e botão de favoritos
- Template base com layout responsivo
- Redirecionamento automático da home `/` para `/countries`

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
- Página `/countries` como entrada principal

#### Estilização
- Sistema de variáveis CSS para temas e cores
- Layout responsivo com SASS Modules
- Animações suaves, sombras e foco em acessibilidade

## [0.2.0]

### Added

#### Sistema de Países
- **API Integration**: Integração completa com REST Countries API
  - Configuração do Axios com baseURL via variáveis de ambiente
  - Funções `getCountries()` e `getCountryByCode()` com tratamento de erros
  - Tipagem TypeScript para respostas da API
- **Lista de Países**: Página `/countries` funcional
  - Campo de busca com debounce de 300ms
  - Grid responsivo de cards de países
  - Estados de loading, erro e lista vazia
  - Redirecionamento para detalhes do país ao clicar no card

#### Sistema de Favoritos
- **Context API**: Gerenciamento de estado global com `FavoritesProvider`
  - Persistência no localStorage
  - Adição e remoção de favoritos
  - Sincronização automática entre abas
- **Página de Favoritos**: `/favorites` com funcionalidade completa
  - Lista de países favoritados
  - Estado vazio com mensagem amigável
  - Remoção de favoritos com ícone de lixeira
  - Data de adição formatada

#### Detalhes de País
- **Página de Detalhes**: `/country/[code]` dinâmica
  - Carregamento de dados específicos do país
  - Exibição de informações completas (capital, região, população, área, idiomas)
  - Estados de loading e erro
  - Layout responsivo com bandeira e informações

#### Hooks Personalizados
- **useCountryList**: Context para gerenciar lista de países
  - Estados de loading, data e erro
  - Debounce automático para busca
  - Delay mínimo de 1 segundo para melhor UX
- **useFavorites**: Context para gerenciar favoritos
  - CRUD completo de favoritos
  - Persistência automática
  - Tipagem TypeScript
- **useDebounce**: Hook utilitário para debounce de valores

#### Componentes
- **CountryCard**: Card individual de país
  - Bandeira, nome, capital, população
  - Botão de favorito com estado visual
  - Ícones informativos (MapPin, Users)
  - Interação completa (clique e favorito)
- **CountryList**: Grid responsivo de países
  - Renderização otimizada
  - Props para callbacks de interação
- **CountryDetail**: Página de detalhes completa
  - Layout com bandeira e informações
  - Formatação de números (população, área)
  - Lista de idiomas
- **FavoriteCard**: Card de país favorito
  - Informações essenciais
  - Data de adição formatada
  - Botão de remoção
- **FavoriteList**: Lista de favoritos
  - Grid responsivo
  - Estado vazio personalizado

#### Layout e Navegação
- **Header Aprimorado**: Navegação completa
  - Logo clicável para voltar à lista
  - Botão de favoritos com contador
  - Estado visual ativo
  - Navegação entre páginas
- **Template**: Layout base responsivo
  - Header fixo
  - Conteúdo scrollável
  - Estrutura flexível

#### Utilitários e Tipagem
- **Formatters**: Função `formatPopulation()` para formatação de números
  - Suporte a bilhões (B), milhões (M) e milhares (K)
  - Fallback para números pequenos
- **Types**: Tipagem completa do sistema
  - `CountryType` para dados da API
  - `FavoriteCountry` para favoritos
  - `ApiResponseType` para respostas da API

#### Estilização
- **SASS Modules**: Sistema de estilos modular
  - Variáveis CSS para temas
  - Layout responsivo
  - Animações suaves
  - Estados visuais (hover, focus, active)

### Changed

- **Estrutura de Pastas**: Reorganização para melhor organização
  - Separação clara entre componentes, hooks e domínio
  - Estrutura de features por funcionalidade
- **Navegação**: Sistema de roteamento aprimorado
  - Redirecionamento automático da home para `/countries`
  - Navegação entre páginas com estado visual

### Technical

- **Performance**: Otimizações implementadas
  - Debounce na busca para reduzir chamadas à API
  - Delay mínimo para melhor UX
  - Lazy loading de componentes
- **TypeScript**: Tipagem completa do projeto
  - Interfaces para todos os componentes
  - Tipos para estados e props
  - Tipagem de respostas da API
- **Error Handling**: Tratamento robusto de erros
  - Estados de erro em componentes
  - Mensagens amigáveis ao usuário
  - Fallbacks para dados ausentes

## [0.3.0]

### Added

#### Sistema de Notificações Toast
- **Toast Component**: Sistema completo de notificações
  - Componente `Toast` com 4 status: success, error, info, warning
  - Ícones específicos para cada tipo de notificação
  - Animações suaves de entrada e saída
  - Suporte a título e descrição
  - Duração configurável (padrão: 5 segundos)
- **Toast Provider**: Gerenciamento global de notificações
  - Context API para controle centralizado
  - Múltiplas notificações simultâneas
  - Pausa automática no hover
  - Remoção manual com botão X
  - Posicionamento fixo no canto superior direito

#### Melhorias na UX
- **Feedback Visual**: Notificações para ações do usuário
  - Confirmação ao adicionar/remover favoritos
  - Mensagens personalizadas com nome do país
  - Duração otimizada (2 segundos para ações rápidas)
- **Loading States**: Componente `LoadingDots` aprimorado
  - Animação de pontos para estados de carregamento
  - Integração em listas e páginas de detalhes

#### Componentes UI Aprimorados
- **Layout Integration**: Integração do Toast Provider
  - Provider adicionado ao layout raiz
  - Disponibilidade global das notificações
  - Não interfere no layout existente

### Changed

- **Layout Structure**: Integração do sistema de notificações
  - ToastProvider adicionado ao RootLayout
  - Posicionamento fixo das notificações
  - Não afeta a estrutura de navegação existente
- **User Feedback**: Melhoria na experiência do usuário
  - Feedback imediato para todas as ações
  - Mensagens claras e informativas
  - Duração otimizada para diferentes tipos de ação