# Comandos principais em SQL


- SELECT

```SELECT * FROM aluno ``` *Utilizando o * retorna todo o conteúdo da entidade selecionada.*


```SELECT matricula, nome FROM aluno ``` *Utilizando as referências matricula, nome retorna apenas os respectivos conteúdos da entidade selecionada.*

- SELECT + WHERE

```SELECT * FROM aluno WHERE matricula = 1``` *Utilizando SELECT + WHERE retorna os respectivos campos da entidade selecionados onde(where) a matricula seja igual a 1.*

- SELECT + Operadores Relacionais

```SELECT * FROM aluno WHERE matricula = 1``` 
*Retorna os valores que estão na entidade aluno e que tem matricula igual a 1*


```SELECT * FROM aluno WHERE nome like 'J%'``` 
*Retorna os valores que estão na entidade aluno que contém inicialmente J e não se importando com o restante do conteúdo*

## Operadores Relacionais

``` Maior que ( > ) ``` ``` Menor que ( < ) ```

``` Maior ou Igual ( >= ) ``` ``` Menor ou Igual ( <= ) ```

``` Não Igual ( <> ) ``` ``` Diferente de ( != )```

## Operadores Matemáticos

``` Adição ( + ) ``` ``` Subtração ( - )```

``` Divisão ( / ) ``` ``` Multiplicação ( * )```

``` Resto / Módulo ( % ) ```

## Operadores Lógicos

##### Operador AND
```SELECT * FROM aluno WHERE nome like 'J%' AND matricula > 2```

##### Operador OR
```SELECT * FROM aluno WHERE nome like 'J%' OR matricula < 2```

##### Operador BETWEEN
```SELECT * FROM aluno WHERE matricula BETWEEN 2 AND 3```

```SELECT * FROM aluno WHERE matricula NOT BETWEEN 2 AND 3```

##### Operador IN e IN NOT
```SELECT * FROM aluno WHERE matricula IN (1, 3)```

```SELECT * FROM aluno WHERE matricula NOT IN (2, 3)```

##### Operador IS NULL e NULL IS NOT
```SELECT * FROM aluno WHERE matricula IS NULL```

```SELECT * FROM aluno WHERE matricula IS NOT NULL```

## Operadores Lógicos

##### Comandos de INSERT, UPDATE e DELETE

*INSERT + INTO + entidade(argumentos) + VALUES + (valor dos argumentos)*

```INSERT INTO aluno (nome, cpf, responsavel) VALUES ('Alexandre Junior', 9999, 'Alexandre Medeiros')```

*UPDATE + (entidade) + SET + (argumento = modificação) + WHERE + (dado da entidade que deseja selecionar) + operador para relacionar*

```UPDATE aluno SET nome='Alexandre Medeiros', responsavel='Alex Junior' WHERE matricula = 5```

*DELETE + FROM + (entidade) + WHERE + (selecionar entidade desejada) + (operador com a identificação do valor que deseja excluir)*

```DELETE FROM aluno WHERE matricula = 5```
