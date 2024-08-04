export type Section = {
  breadcrum: string
  email: string
  password: string
  website: string
  secureQuestion: string
  tags: string[]
}
export const sections: Section[] = [
  {
    breadcrum: "google",
    email: "alejandro@gmail.com",
    password: "123",
    website: "www.gmail.com",
    secureQuestion: "",
    tags: ["email", "personal"],
  },
  {
    breadcrum: "paypal",
    email: "alejandroreallylongggggggggggg@outlook.com",
    password: "123",
    website:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae dolores eaque cumque quisquam ex, ipsa excepturi et, aliquam pariatur incidunt quia impedit quo hic sit architecto, dolore deleniti labore obcaecati velit adipisci dolorem. Aliquam tenetur quod mollitia dolorem sequi natus odio, odit velit debitis blanditiis modi officiis itaque praesentium?",
    secureQuestion: "",
    tags: ["email", "personal"],
  },
  {
    breadcrum: "apple",
    email: "alejandro@gmail.com",
    password: "123",
    website: "www.apple.com",
    secureQuestion: "",
    tags: ["email", "personal"],
  },
]
