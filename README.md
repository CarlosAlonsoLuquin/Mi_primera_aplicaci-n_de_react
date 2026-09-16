# Magic The Gathering - Life Counter

Una aplicación moderna e interactiva diseñada para llevar el conteo de los puntos de vida de dos jugadores en partidas de Magic: The Gathering (MTG). 

## Características principales

- **Soporte para 2 Jugadores:** Interfaz dividida para el "Jugador 1" y "Jugador 2".
- **Gestión de Puntos de Vida:** Ambos jugadores inician con 20 puntos de vida (el estándar de MTG).
- **Controles Intuitivos:** Botones individuales para restar (-1) y sumar (+1) puntos de vida.
- **Validación de Límite:** Los puntos de vida nunca pueden ser menores a cero.
- **Botón de Reinicio:** Un botón para reiniciar la partida que restaura la vida de ambos jugadores a 20, pidiendo confirmación previa mediante una alerta para evitar reinicios accidentales.
- **Diseño Premium:** Interfaz de usuario atractiva utilizando efectos *glassmorphism* (cristal), gradientes y animaciones sutiles.

## Tecnologías Utilizadas

- **React:** Librería principal para construir la interfaz de usuario.
- **TypeScript:** Para añadir tipado estático y mejorar la calidad y escalabilidad del código.
- **Vite:** Herramienta de compilación ultrarrápida.
- **CSS Vanilla:** Estilizado moderno, personalizado y sin dependencias externas.

## Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Abre tu terminal** y navega hasta la carpeta del proyecto.
2. **Instala las dependencias necesarias** ejecutando:
   ```bash
   npm install
   ```
3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
4. **Abre tu navegador web** en la dirección que aparezca en la consola (usualmente `http://localhost:5173/`).
