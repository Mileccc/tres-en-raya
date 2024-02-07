## Tres en raya
- Creamos el proyecto y lo iniciamos:
```bash
npm create vite@latest
cd tres-en-raya/
npm install
npm run dev
```

- Creamos las constantes de los Turnos.
- Creamos la constante del tablero

#### 1. Tablero inicial
![Pasted image 20240203184917](https://github.com/Mileccc/tres-en-raya/assets/121825748/c361228e-53af-4b69-8a90-99db00ecee73)

![Pasted image 20240203190311](https://github.com/Mileccc/tres-en-raya/assets/121825748/307e61d8-415c-4b71-86ab-3890e45b6e85)

![Pasted image 20240203190426](https://github.com/Mileccc/tres-en-raya/assets/121825748/aabf7b4e-e873-4e77-959e-de3878851b72)


#### 2. Turno inicial

![Pasted image 20240204161129](https://github.com/Mileccc/tres-en-raya/assets/121825748/1772dad7-dd6a-416e-aaa3-0ff7ba68bc16)

![Pasted image 20240203194243](https://github.com/Mileccc/tres-en-raya/assets/121825748/d046d960-6c58-43b7-9dad-6c09574ecb4b)

#### 3. Actualizando tablero al hacer click
![Pasted image 20240204165735](https://github.com/Mileccc/tres-en-raya/assets/121825748/c7ebeff2-6750-45d6-bd5c-f5a1a32b3fd0)

![Pasted image 20240204173349](https://github.com/Mileccc/tres-en-raya/assets/121825748/c2921a66-eb06-4b54-a98a-261ee45317ab)


- Condicional para que si ya hay algo en la casilla (board\[index] no es igual a null) que retorne y no permita seguir actualizando el tablero
![Pasted image 20240204174437](https://github.com/Mileccc/tres-en-raya/assets/121825748/d2f814c1-2bcd-48cf-b265-3132e6762375)

![Pasted image 20240204174156](https://github.com/Mileccc/tres-en-raya/assets/121825748/419b8dea-1c8a-47e1-8f46-996c19249d5c)


#### 4. Detectar el ganador

![Pasted image 20240204184503](https://github.com/Mileccc/tres-en-raya/assets/121825748/7964dfe0-f282-494e-bdf5-d807e38cd585)


##### Sección que se renderiza para mostrar el ganador

![Pasted image 20240206155546](https://github.com/Mileccc/tres-en-raya/assets/121825748/2a91ab60-a1af-42a9-845f-d5f95c2487ef)

![Pasted image 20240206155639](https://github.com/Mileccc/tres-en-raya/assets/121825748/0365d6dc-3045-4695-81cb-15c7a32108ad)


#### 5. Método para mostrar empate y resetear

![Pasted image 20240206162230](https://github.com/Mileccc/tres-en-raya/assets/121825748/fa4e494a-7505-4061-91b3-3e28baa4bb41)


#### Añadimos confeti para la victoria
- Instalamos la dependencia ``npm install canvas-confetti -E``
![Pasted image 20240206162815](https://github.com/Mileccc/tres-en-raya/assets/121825748/d5e21793-7b81-41d2-8726-fc944c4ca1c7)

![Pasted image 20240206163041](https://github.com/Mileccc/tres-en-raya/assets/121825748/398a946d-751f-4297-91a7-87c0cf4d71a8)

![Pasted image 20240206163137](https://github.com/Mileccc/tres-en-raya/assets/121825748/c070ffa1-0766-4de4-bbcd-40d0f874ea7a)

### Buenas prácticas, separación de constantes, componentes y lógica

![Pasted image 20240206184829](https://github.com/Mileccc/tres-en-raya/assets/121825748/e7a028b7-b910-4b82-ad5a-de86966e6a41)

### Persistir la partida en el localStorage
![Pasted image 20240207163651](https://github.com/Mileccc/tres-en-raya/assets/121825748/acc367be-3dd9-4803-9641-0dca7b61c6d4)






