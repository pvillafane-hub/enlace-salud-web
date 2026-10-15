export const PRODUCT_URL = "https://project-pmewh.vercel.app";
export const audiences = {
  doctor: {
    label: "Para doctores", href: "/", eyebrow: "INFORMACIÓN PARA TU CONSULTA",
    title: "Consulta la información que tus pacientes comparten contigo",
    intro: "Reúne documentos del paciente, revisa accesos y apóyate en tu personal para ayudar a quienes necesitan acompañamiento.",
    action: "Agenda una demostración", message: "Hola, quiero una demostración de Enlace Salud para mi práctica médica.",
    how: "Del permiso del paciente a la consulta de su información",
    steps: [
      ["Solicita autorización", "Invita al paciente y espera su aprobación para acceder a su información."],
      ["Consulta sus documentos", "Revisa los documentos disponibles según la autorización y la licencia vigente."],
      ["Organiza el seguimiento", "Consulta tus pacientes y reportes desde el módulo del doctor."]
    ],
    featureTitle: "Una herramienta para ti y para tu equipo",
    features: [
      ["Pacientes autorizados", "Identifica las relaciones de acceso y consulta la información compartida contigo."],
      ["Personal con su propia cuenta", "El administrador vincula el staff al doctor para apoyar a los pacientes sin compartir contraseñas."],
      ["Registro asistido", "Ayuda a activar pacientes que necesitan apoyo para comenzar a usar la aplicación."],
      ["Reportes a mano", "Revisa la información de tu práctica disponible en el módulo de reportes."]
    ],
    supportTitle: "El paciente puede necesitar una mano. Tu equipo puede ayudar.",
    support: "El personal autorizado puede acompañar el registro. Cuando hace falta un padre o tutor, el administrador valida y vincula esa relación.",
    closing: "Conoce cómo encaja Enlace Salud en tu consulta",
  },
  paciente: {
    label: "Para pacientes", href: "/paciente", eyebrow: "TU INFORMACIÓN, MÁS ORGANIZADA",
    title: "Tus documentos de salud, en un lugar fácil de encontrar",
    intro: "Guarda resultados y documentos médicos desde tu celular o computadora. Compártelos con tus doctores cuando tú lo autorices.",
    action: "Crear mi cuenta", message: "",
    how: "Empieza con tres pasos sencillos",
    steps: [
      ["Crea tu cuenta", "Completa tus datos personales. Si necesitas ayuda, pide apoyo al personal autorizado de tu doctor."],
      ["Guarda tus documentos", "Sube tus laboratorios, estudios y otros documentos médicos al expediente correspondiente."],
      ["Autoriza a tu doctor", "Revisa la solicitud de acceso y decide con qué doctor compartir tu información."]
    ],
    featureTitle: "Pensado para ti y para quienes te ayudan",
    features: [
      ["Documentos organizados", "Encuentra resultados y otros documentos sin buscarlos en distintos correos o carpetas."],
      ["Desde tu celular", "Entra desde el navegador de tu teléfono o desde una computadora."],
      ["Datos que puedes corregir", "Vuelve a tu información personal para revisar y actualizar tus datos."],
      ["Ayuda de un padre o tutor", "Un representante validado puede ayudar con varios pacientes, manteniendo separado el expediente de cada uno."]
    ],
    supportTitle: "¿Necesitas ayuda para comenzar?",
    support: "Pide apoyo al personal de tu doctor. Si eres padre o tutor, solicita que el administrador valide tu relación con cada paciente; así podrás ayudar desde tu propia cuenta.",
    closing: "Comienza a organizar tus documentos de salud",
  },
  clinicas330: {
    label: "Para clínicas", href: "/clinicas330", eyebrow: "CLÍNICAS Y CENTROS 330",
    title: "Ayuda a tus pacientes a mantener su información al alcance",
    intro: "Acompaña el registro de pacientes y facilita que compartan sus documentos con los doctores autorizados, con cuentas individuales para el personal.",
    action: "Agenda una demostración", message: "Hola, quiero conocer Enlace Salud para nuestra clínica o centro 330.",
    how: "Un recorrido claro para tu equipo y tus pacientes",
    steps: [
      ["Vincula al personal", "El administrador crea el acceso del staff y lo vincula al doctor correspondiente."],
      ["Acompaña al paciente", "El personal autorizado ayuda a activar su cuenta y completar la información necesaria."],
      ["Revisa las autorizaciones", "El doctor consulta los documentos compartidos; el administrador valida las relaciones de padres y tutores."]
    ],
    featureTitle: "Apoyo práctico para la atención al paciente",
    features: [
      ["Registro acompañado", "Ofrece ayuda a pacientes mayores y a quienes no están familiarizados con la tecnología."],
      ["Cuentas individuales", "Cada empleado utiliza su propia cuenta vinculada al doctor que apoya."],
      ["Familias con varios pacientes", "Los representantes validados pueden ayudar con más de un paciente, con expedientes separados."],
      ["Accesos revisados", "El administrador revisa las solicitudes de representación y los posibles registros duplicados."]
    ],
    supportTitle: "Una incorporación que empieza con acompañamiento",
    support: "En la demostración revisamos el registro asistido, los permisos del personal y el flujo de padres o tutores para acordar cómo comenzar en tu clínica.",
    closing: "Conversemos sobre el flujo de tu clínica",
  },
} as const;
export type Audience = keyof typeof audiences;
