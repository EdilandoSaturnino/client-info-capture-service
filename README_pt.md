# client-info-capture-service

**client-info-capture-service** é uma aplicação de microsserviço Node.js que captura informações do cliente, incluindo endereço IP, geolocalização e detalhes do navegador, fornecendo uma API simples para coleta e análise de dados.

## Funcionalidades

- Captura o endereço IP do cliente e determina se ele é público ou privado.
- Recupera dados de geolocalização com base no endereço IP do cliente usando o serviço IP-API.
- Coleta detalhes do navegador do cliente, como agente do usuário, idioma e host.
- Arquitetura modular e de fácil extensão.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/EdilandoSaturnino/client-info-capture-service.git
   cd client-info-capture-service
   ```

2. Instale as dependências usando Bun:

   ```bash
   bun install
   ```

## Uso

### Executando a Aplicação

Para iniciar o servidor, execute o seguinte comando:

```bash
bun run src/app.ts
```

A aplicação será iniciada em `http://localhost:7000/`.

### Acessando a API

Envie uma requisição GET para `http://localhost:7000/` para recuperar as informações do cliente.

### Exemplo de Resposta

```json
{
  "message": "Informações capturadas com sucesso!",
  "data": {
    "ip": "seu_endereço_ip",
    "userAgent": "seu_agente_de_usuário",
    "language": "seu_idioma",
    "host": "seu_host",
    "connection": "sua_conexão",
    "encoding": "sua_codificação",
    "referer": "seu_referer",
    "timeOfAccess": "2024-08-12T00:00:00.000Z",
    "location": {
      "status": "success",
      "country": "Nome do País",
      "region": "Nome da Região",
      "city": "Nome da Cidade",
      ...
    }
  }
}
```

## Estrutura do Projeto

```bash
/project-root
│
├── /src
│   ├── /services
│   │   ├── geoLocationService.ts
│   │   └── ipUtils.ts
│   │
│   ├── /controllers
│   │   └── clientInfoController.ts
│   │
│   ├── /routes
│   │   └── clientInfoRoutes.ts
│   │
│   ├── /config
│   │   └── serverConfig.ts
│   │
│   └── app.ts
│
├── package.json
└── tsconfig.json
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
