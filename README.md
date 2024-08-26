

![Logo do Projeto](./img/capa_1_toni.jpg)

## Descrição
Esta é a submissão do grupo Aurum para o hackathon Brasa Hacks, promovido pela [BRASA](https://www.gobrasa.org/).


Toni é uma solução inovadora de inteligência artificial desenvolvida pela nossa equipe em parceria com a Stone. Ele foi criado para ser o assistente financeiro personalizado de microempreendedores, oferecendo suporte prático e eficiente na gestão das finanças do dia a dia. Com Toni, os clientes da Stone podem simplificar suas operações financeiras, ganhando insights valiosos e controle total sobre suas vendas e fluxo de caixa.

## Funcionalidades Principais
- **Gestão Financeira**: Geração de relatórios detalhados de vendas e monitoramento de fluxo de caixa para uma visão clara e organizada das finanças.
- **Insights Personalizados**: Toni oferece recomendações baseadas em análises de dados de vendas, ajudando os empreendedores a tomar decisões informadas.
- **Segurança**: Implementa criptografia de ponta a ponta para garantir a proteção dos dados financeiros dos usuários.

## Tecnologias Utilizadas
- **Dados da Stone**: Por utilizar os proprios dados da Stone, o Toni conhece e consegue atender cada negócio de forma personalizada e pessoal.
- **Inteligência Artificial**: O Toni é alimentado pelos mais capazes modelos de IA, utilizando o melhor da tecnologia para melhorar a experiência do cliente Stone.
- **Whatsapp**: A interação com o Toni acontece 100% via Whatsapp, tendo uma curva de aprendizado nula, focada completamente no empreendedor.
- **Desenvolvimento Backend**: Pythom, Flask, Twilio, OpenAI API
- **Desenvolvimento Frontend (Landing Page)**: Javascript, NextJS

## Roadmap Futuro
- **Integração com API Própria da Stone**: Numa implementação futura do Toni, ele pode ser linkado diretamente com a API da Stone, tendo sempre acesso aos novos dados do empreendedor.
- **Aumento da Escalabilidade**: Conforme o uso do Toni aumentar, será necessário ter um servidor dedicado para lidar com as 

## Equipe
- **José**: Business, Editor
- **Luiz**: Business
- **Yago**: Design
- **Rhyan**: Programação
- **Pedro**: Programação


## Instruções para instalação
Para rodar o Toni localmente são necessários alguns requisitos, tais como: 
- Uma Chave de API do ChatGPT (Ou seu LLM de preferência)
- Uma Sandbox do Twilio configurada
- Python instalado (Para desenvolvimento e utilização dos programas)
- Ngrok para tunelamento de porta (Basicamente criar um URL que aponta para um servidor local rodando no seu computador)

Seguem abaixo alguns links úteis para a instalação: 
- [Download do Ngrok](https://ngrok.com/download)
- [Documentação do Twilio para WhatsApp](https://www.twilio.com/docs/whatsapp)
- [Documentação do OpenAI para ChatGPT API](https://platform.openai.com/docs/api-reference/chat)
- [Tutorial de Configuração da Sandbox do Twilio](https://www.twilio.com/docs/whatsapp/sandbox)
- [Guia de Instalação do Python](https://www.python.org/downloads/)

## Instruções para utilização
- Primeiro é necessário clonar este repositório utilizando o comando ``` git clone https://github.com/23f09crz/stone-challenge```
- Após clonar, vá para o diretório principal utilizando o comando ``` cd stone-challenge```
- Instale todas as dependências do projeto rodando ``` pip install -r requirements.txt```
- Crie um arquivo ```.env``` e adicione todas as credenciais conforme mostrado no arquivo [`.env.example`](https://github.com/23f09crz/stone-challenge/blob/main/.env.example)
- Rode o comando ``` ngrok http 127.0.0.1:5000``` para iniciar o tunelamento da porta 5000 rodando localmente no seu computador
- Adicione o link que o ngrok gerar na parte de forwarding no twilio sandbox
- Rode o comando ``` cd src/backend && python main.py``` para começar a rodar a aplicação

E pronto, o Toni já está rodando localmente no seu Whatsapp!

Lembrando que por motivos de LGPD, não podemos disponibilizar os dados da Stone neste repositório, portanto é necessário ter os dados e inseri-los de contexto para a IA.
Além disso, caso queira rodar a landing page localmente é possível fazê-lo rodando os comandos: 
- ```cd src/landing-page```
- ```npm i```
- ```npm run dev```


Para mais informações, a documentação oficial pode ser acessada [Neste Link](https://docs.google.com/document/d/1m8SNWrLXF-v2AqN_ZCpz7OAvnOQiiQ7nLFXgE2IL560/edit)




