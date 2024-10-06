interface MenuHeader{
  label: string;
  path: string;
  icon: string;
  props?: any
}

export const menuHeader: MenuHeader[] = [
  {
    label: "Sair da conta",
    path: "/",
    props: "(click)='exit()'",
    icon: "exit-outline"
  },
]