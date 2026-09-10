---
titulo: Analizador de Kotlin
descripcion: Analizador léxico, sintáctico y semántico de un subconjunto de Kotlin, hecho en Python con PLY y con interfaz web para pegar código y ver los resultados.
problema: Antes de compilar un lenguaje hay que saber leerlo, entenderlo y comprobar que tiene sentido.
tecnologias:
  - Python
  - PLY
  - Flask
repo: https://github.com/Jorgelet/kotlin-analizador
contexto: academico
rol: Una de las tres partes del analizador, en sus tres fases, más la interfaz web
orden: 7
destacado: false
---

## Qué es

Las tres primeras fases de un compilador, aplicadas a un subconjunto de Kotlin:

1. **Léxico** — parte el código en tokens: palabras reservadas, identificadores,
   literales, operadores.
2. **Sintáctico** — comprueba que esos tokens formen estructuras válidas del
   lenguaje: condicionales, bucles, declaraciones de función.
3. **Semántico** — comprueba que lo que es sintácticamente correcto además
   tenga sentido: que la condición de un `if` sea booleana, que la función que
   llamas exista.

Encima va una interfaz web en Flask: pegas código Kotlin y ves qué encontró
cada fase, en vez de leer la salida de una consola.

## Mi parte

Proyecto de tres personas para la materia Lenguajes de Programación. Trabajé en
las tres fases, no solo en una:

- **Léxico** — tokens reservados y uno de los tres algoritmos de análisis
- **Sintáctico** — expresiones booleanas y de comparación, `while`, `Map` y
  funciones de una línea
- **Semántico** — validación de que la condición de `if`/`while` sea booleana
  y detección de llamadas a funciones no declaradas
- **Interfaz web** — la versión final compilada, incluido el arreglo de tipos
  MIME que la rompía en Windows

Cada fase quedó con su registro de pruebas en `logs/`, para poder ver qué
detectaba el analizador en cada versión.

## Lo que me llevé

El análisis semántico es donde se entiende por qué un compilador es más que un
lector de texto. Que `if (x = 5)` sea sintácticamente aceptable pero
semánticamente un error obliga a distinguir entre *estar bien escrito* y
*querer decir algo*.
