# Dominios — landing pages de Enlace Salud

Preparación aislada en `feature/v2-domain-landing-integration`. **No publicar a producción antes de validar V2.**

- Landing doctores: `/` en `enlacepaciente.com`.
- Landing pacientes: `/paciente` en `enlacepaciente.com/paciente`.
- Landing centros 330: `/clinicas330`, reservado para Q1 2027 (no anunciar todavía). La ruta sigue accesible directamente; ocultarla/restringirla requiere una decisión adicional.
- Aplicación V2: `https://app.enlacepaciente.com/login`.
- Botones «Entrar» y «Entra aquí» apuntan a `${PRODUCT_URL}/login`. «Crear mi cuenta» sigue apuntando a `${PRODUCT_URL}/signup`.
- Configurar `NEXT_PUBLIC_PRODUCT_URL=https://app.enlacepaciente.com` en el proyecto Vercel de landings **solo cuando la app V2 exista y funcione**. Mientras no se configure, se conserva el destino previo.
- DNS en Namecheap: agregar dominios al proyecto Vercel y copiar exactamente los registros que Vercel proporcione. No modificar DNS actual sin verificar ownership y TLS.
- Revisar manualmente navegación móvil, acceso, registro, y ambos landing pages antes de promover esta rama a `main`.
