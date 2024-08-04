import { defineFormKitConfig } from "@formkit/vue"
import { es } from "@formkit/i18n"

export default defineFormKitConfig({
  locales: {
    es: {
      ...es,
      validation: {
        required: () => "requerido.",
        email: (node) => {
          if (node.name == "email-sign-in") {
            return "Debe ser un email válido."
          }
          return "Email inválido."
        },
        // matches: (node: { name: string }) => {
        //   switch (node.name) {
        //     case "email":
        //       return "error email"
        //     default:
        //       return "Invalid type."
        //   }
        // },
      },
    },
  },

  locale: "es",
})
