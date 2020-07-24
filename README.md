# Bemol Channel
Esse projeto apresenta uma estrutura de conceito Omnichannel, o qual reune os princípais canais de comunicação da Bemol.

## Tecnologia
Aqui estão as tecnologias usadas neste projeto:
* Visual Studio Code (VSC);
* Extension **Live Server**. Pode ser adicionado nas extensões do VSC;
* API de serviço de CEP (https://viacep.com.br/).

O Live Server é um recurso usado para iniciar um servidor local de desenvolvimento de recarga ao vivo para páginas estáticas e dinâmicas.

## Como Usar
### 1.Interface de interação do usuário com a aplicação. Observa-se os principais canais de comunicação.
![Parte_1](https://github.com/LeonardoJacauna/BeChannel/blob/master/diagrama%20modelo%20C4/BeChannel.png)

O usuário poderá escolher uma das opções ao qual achar melhor. Caso o usuário queira realizar seu cadastro no sistema, o mesmo poderá realizar o seu cadastro clicando na opção de **Cadastra-se**, feito isso basta preencher o formulario com os seus dados.

![Parte_2](https://github.com/LeonardoJacauna/BeChannel/blob/master/diagrama%20modelo%20C4/BeChannel_cont.png)

### 2. Interface de cadastro da aplicação.
![Parte_3](https://github.com/LeonardoJacauna/BeChannel/blob/master/diagrama%20modelo%20C4/Cadastro.png)

Nesta interface o usuário poderá realizar o seu cadastro no sistema. Para melhor comodidade e segurança, ao informar o CEP o sistema verifica se é válido e retorna com o preencimento das informações relacionadas ao endereço. Caso o CEP informado seja inválido, o sistema alerta para o preencimento de um CEP válido.

![Parte_4](https://github.com/LeonardoJacauna/BeChannel/blob/master/diagrama%20modelo%20C4/Cadastro_cont.png)

## Features
O projeto pode ser usado como modelo para iniciar o desenvolvimento de um projeto Omnichannel. Ele também demonstra de forma prática como cadastrar e conectar o cliente com os canais de atendimento.
- Interface de interação
- Criação de contas de usuário
- Consumo de API de CEP.

## Diagramas C4 Model

### Diagrama de Contexto
Este é um diagrama de contexto do sistema BChannel fictício. Ele mostra as pessoas que o usam e os outros sistemas de software com os quais o BChannel tem um relacionamento.

![D_C1](https://github.com/LeonardoJacauna/BeChannel/blob/master/diagrama%20modelo%20C4/Contexto%20do%20Sistema.png)

### Diagrama de Container
Este é um diagrama de contêiner do sistema BChannel fictício. Ele mostra que o BChannel é composto de contêineres.

![D_C2](https://github.com/LeonardoJacauna/BeChannel/blob/master/diagrama%20modelo%20C4/Diagrama%20de%20Container.png)

## Link
- Repositório: https://github.com/LeonardoJacauna/BeChannel

## Questões
Respostas da questões: https://github.com/LeonardoJacauna/BeChannel/blob/master/Questoes.txt
## Autor
**Leonardo Jacaúna**
