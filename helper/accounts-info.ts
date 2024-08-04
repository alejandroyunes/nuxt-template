import GoogleSvg from "~/components/icons/accounts/GoogleSvg.vue"
import AppleSvg from "~/components/icons/accounts/AppleSvg.vue"
import PaypalSvg from "~/components/icons/accounts/PaypalSvg.vue"

type AccountInfoTypes = {
  name: string
  component: ReturnType<typeof defineComponent>
}

export const accountInfo: AccountInfoTypes[] = [
  {
    name: "google",
    component: GoogleSvg,
  },
  {
    name: "paypal",
    component: PaypalSvg,
  },
  {
    name: "apple",
    component: AppleSvg,
  },
]
