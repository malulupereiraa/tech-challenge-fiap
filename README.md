# Tech Challenge FIAP - Grupo 29

## Requisitos

- NodeJS v22.2.0;
- NPM 10.7.0.

## Antes de executar

```sh
npm install
```

## Execução

```sh
npm run dev
```

## Storybook

```sh
npm run storybook
```

## Transactions API

### Nova transação

<details>
 <summary><code>POST</code> <code><b>/api/transactions</b></code></summary>

##### Request Body Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------
> | type      | ✔        | `string`  | Tipo da transação (`deposit` ou `transference`)
> | date      | ✔        | `string`  | Data da transação
> | amount    | ✔        | `float`   | Valor da transação

##### Responses

> | http code     | content-type                      | response description
> |---------------|-----------------------------------|---------------------------------------
> | `201`         | `application/json`                | JSON contendo o ID do registro criado

##### Example cURL

> ```javascript
> curl -X POST 'http://localhost:3000/api/transactions' \
>      -H 'Content-Type: application/json' \
>      --data '{
>          "type": "deposit",
>          "date": "2024-09-29",
>          "amount": 150
>        }'
> ```
</details>

### Listar transações

<details>
 <summary><code>GET</code> <code><b>/api/transactions</b></code></summary>

##### Parameters

> Nenhum

##### Responses

> | http code     | content-type                      | description
> |---------------|-----------------------------------|-------------------------------------
> | `200`         | `application/json`                | JSON contendo a lista de transações

##### Example cURL

> ```javascript
> curl -X GET 'http://localhost:3000/api/transactions' -H 'Content-Type: application/json'
> ```
</details>

### Visualizar uma transação

<details>
 <summary><code>GET</code> <code><b>/api/transactions/{id}</b></code></summary>

##### Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------
> | id        | ✔        | `string`  | ID da transação

##### Responses

> | http code     | content-type       | description
> |---------------|--------------------|-------------------------------------
> | `200`         | `application/json` | JSON contendo os detalhes da transação
> | `404`         | `text/plain`       | `Transaction not found`

##### Example cURL

> ```javascript
> curl -X GET 'http://localhost:3000/api/transactions/1' -H 'Content-Type: application/json'
> ```
</details>

### Atualizar uma transação

<details>
 <summary><code>PUT</code> <code><b>/api/transactions/{id}</b></code></summary>

##### Request Body Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------------------------------------------
> | type      | ✔        | `string`  | Tipo da transação (`deposit` ou `transference`)
> | date      | ✔        | `string`  | Data da transação
> | amount    | ✔        | `float`   | Valor da transação

##### Responses

> | http code     | content-type       | description
> |---------------|--------------------|-------------------------------------
> | `200`         | `application/json` | JSON contendo os detalhes atualizados da transação
> | `404`         | `text/plain`       | `Transaction not found`

##### Example cURL

> ```javascript
> curl -X PUT 'http://localhost:3000/api/transactions/1' \
>      -H 'Content-Type: application/json' \
>      --data '{
>          "type": "deposit",
>          "date": "2024-09-29",
>          "amount": 150
>        }'
> ```
</details>

### Apagar uma transação

<details>
 <summary><code>DELETE</code> <code><b>/api/transactions/{id}</b></code></summary>

##### Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------
> | id        | ✔        | `string`  | ID da transação

##### Responses

> | http code     | content-type       | description
> |---------------|--------------------|------------------------------------------------
> | `200`         | `application/json` | JSON contendo os detalhes da transação apagada
> | `404`         | `text/plain`       | `Transaction not found`

##### Example cURL

> ```javascript
> curl -X DELETE 'http://localhost:3000/api/transactions/1' -H 'Content-Type: application/json'
> ```
</details>

## Contributors

[Cibele Santos](https://github.com/cibsantos)                                             | [Flávia Jaconis](https://github.com/flaJaconis)                                             |[Malu Pereira](https://github.com/malulupereiraa)                                                    | [Thiago Martins](https://github.com/thiagofm33)                                             | [Victor Dantas](https://github.com/victorx9999)
------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------
[<img src="https://github.com/cibsantos.png" width="90" />](https://github.com/cibsantos) | [<img src="https://github.com/flaJaconis.png" width="90" />](https://github.com/flaJaconis) | [<img src="https://github.com/malulupereiraa.png" width="90" />](https://github.com/malulupereiraa) | [<img src="https://github.com/thiagofm33.png" width="90" />](https://github.com/thiagofm33) | [<img src="https://github.com/victorx9999.png" width="90" />](https://github.com/victorx9999)
RM359376                                                                                  | ?                                                                                           | RM358717                                                                                            | RM359578                                                                                    | ?
