---
titulo: GPU Benchmark Suite
descripcion: Infraestructura para comparar CUDA y OpenCL ejecutando los mismos algoritmos bajo condiciones idénticas.
problema: Todo el mundo opina si CUDA es más rápido que OpenCL; casi nadie lo mide igual.
tecnologias:
  - C++
  - CUDA
  - OpenCL
repo: https://github.com/josegavinov/gpu-benchmark
contexto: academico
orden: 3
destacado: false
---

## Qué es

Una infraestructura reutilizable para comparar el rendimiento de **CUDA** y
**OpenCL** ejecutando los mismos algoritmos en las mismas condiciones, con el
rigor que exigiría un artículo IEEE.

## La parte difícil no es medir

Es que la medición signifique algo. Para que la comparación fuera justa hubo
que aislar todo lo que no es el framework:

- Generación de datos **determinista** con semilla fija: ambas ejecuciones ven
  exactamente los mismos números
- Verificación CPU contra GPU en cada corrida, para que un resultado rápido
  pero incorrecto no pase por bueno
- Registro automático en CSV, para que los números no dependan de que alguien
  los copie bien
- La infraestructura común es **agnóstica al framework**: C++ puro en cabeceras,
  sin nada de CUDA ni de OpenCL, y cada framework aporta solo su parte

## Entorno

Medido sobre una NVIDIA Quadro K2200 (Maxwell, 4 GB), Xeon E5-2699 v3 y
Ubuntu 22.04 con CUDA 11.8. El entorno está documentado en el repositorio
porque sin él los números no son reproducibles.
