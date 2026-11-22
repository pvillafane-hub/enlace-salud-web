# Dominios — landing pages de Enlace Salud

Preparación aislada en `feature/v2-domain-landing-integration`. **No publicar a producción antes de validar V2.**

- Landing doctores: `/` en `enlacepaciente.com`.
- Landing pacientes: `/paciente` en `enlacepaciente.com/paciente`.
- Landing centros 330: `/clinicas330`, reservado para Q1 2027 (no anunciar todavía). La ruta sigue accesible directamente; ocultarla/restringirla requiere una decisión adicional.
- Aplicación V2: `https://app.enlacepaciente.com/login`.
- Cuando `NEXT_PUBLIC_PRODUCT_URL` está configurado, «Entrar» y «Entra aquí» apuntan a `${PRODUCT_URL}/login` y «Crear mi cuenta» a `${PRODUCT_URL}/signup`.
- Sin esa variable, se muestra «Acceso próximamente» y «Registro próximamente»; nunca se redirige a una aplicación antigua.
- Configurar `NEXT_PUBLIC_PRODUCT_URL=https://app.enlacepaciente.com` en el proyecto Vercel de landings **solo cuando la app V2 exista y funcione**. Hasta entonces, se bloquean los enlaces de acceso y registro.
- DNS en Namecheap: agregar dominios al proyecto Vercel y copiar exactamente los registros que Vercel proporcione. No modificar DNS actual sin verificar ownership y TLS.
- Revisar manualmente navegación móvil, acceso, registro, y ambos landing pages antes de promover esta rama a `main`.

## Subdominios de públicos (2026-11-21)
- `pacientes.enlacepaciente.com` reescribe internamente `/` a `/paciente` usando `next.config.ts` (la URL visible no cambia).
- `doctores.enlacepaciente.com` usa `/` (landing médico actual).
- Ambos subdominios deben añadirse al MISMO proyecto Vercel `enlace-salud-web`, con los registros DNS que Vercel muestre en Namecheap.
- QR de folletos: `https://pacientes.enlacepaciente.com` y `https://doctores.enlacepaciente.com`. No imprimir hasta probar ambos HTTPS en móvil.
- No habilitar dominio de aplicación hasta que V2 esté desplegada y aprobada.
